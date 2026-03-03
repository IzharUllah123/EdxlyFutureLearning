import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Check, Trophy } from "lucide-react";

interface WordSearchGameProps {
  words: string[];
  onComplete?: () => void;
}

const GRID_SIZE = 10;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const WordSearchGame: React.FC<WordSearchGameProps> = ({
  words = ["MATH", "ADD", "SUM", "COUNT"],
  onComplete,
}) => {
  const [grid, setGrid] = useState<string[][]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [selectedCells, setSelectedCells] = useState<{ r: number; c: number }[]>(
    []
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startCell, setStartCell] = useState<{ r: number; c: number } | null>(
    null
  );
  const gridRef = useRef<HTMLDivElement>(null);

  // 🔁 Initialize / Reset Game
  useEffect(() => {
    generateGrid();
  }, [words]);

  const generateGrid = () => {
    const newGrid = Array.from({ length: GRID_SIZE }, () =>
      Array(GRID_SIZE).fill("")
    );

    // ✅ Unique + Uppercase Words
    const uniqueWords = Array.from(
      new Set(words.map((w) => w.toUpperCase()))
    );

    // 🎲 Shuffle words
    const shuffledWords = [...uniqueWords].sort(
      () => Math.random() - 0.5
    );

    const directions = [
      [0, 1],  // →
      [1, 0],  // ↓
      [1, 1],  // ↘
      [-1, 1], // ↗
    ];

    const canPlace = (
      word: string,
      r: number,
      c: number,
      [dr, dc]: number[]
    ) => {
      if (
        r + (word.length - 1) * dr < 0 ||
        r + (word.length - 1) * dr >= GRID_SIZE ||
        c + (word.length - 1) * dc < 0 ||
        c + (word.length - 1) * dc >= GRID_SIZE
      )
        return false;

      for (let i = 0; i < word.length; i++) {
        const cell = newGrid[r + i * dr][c + i * dc];
        if (cell !== "" && cell !== word[i]) return false;
      }
      return true;
    };

    const placeWord = (word: string) => {
      for (let attempt = 0; attempt < 50; attempt++) {
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const r = Math.floor(Math.random() * GRID_SIZE);
        const c = Math.floor(Math.random() * GRID_SIZE);

        if (canPlace(word, r, c, dir)) {
          for (let i = 0; i < word.length; i++) {
            newGrid[r + i * dir[0]][c + i * dir[1]] = word[i];
          }
          return true;
        }
      }
      return false;
    };

    shuffledWords.forEach(placeWord);

    // 🔤 Fill empty cells
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (!newGrid[r][c]) {
          newGrid[r][c] =
            ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        }
      }
    }

    setGrid(newGrid);
    setFoundWords([]);
    setSelectedCells([]);
    setStartCell(null);
  };

  // 🖱 Interaction Handlers
  const handleStart = (r: number, c: number) => {
    setIsDragging(true);
    setStartCell({ r, c });
    setSelectedCells([{ r, c }]);
  };

  const handleMove = (r: number, c: number) => {
    if (!isDragging || !startCell) return;

    const dr = r - startCell.r;
    const dc = c - startCell.c;
    const steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) return;

    const rStep = dr / steps;
    const cStep = dc / steps;

    if (![0, 1, -1].includes(rStep) || ![0, 1, -1].includes(cStep)) return;

    const cells = [];
    for (let i = 0; i <= steps; i++) {
      cells.push({
        r: startCell.r + rStep * i,
        c: startCell.c + cStep * i,
      });
    }
    setSelectedCells(cells);
  };

  const handleEnd = () => {
    setIsDragging(false);

    const word = selectedCells
      .map((c) => grid[c.r][c.c])
      .join("");
    const reversed = word.split("").reverse().join("");

    const match = words
      .map((w) => w.toUpperCase())
      .find((w) => w === word || w === reversed);

    if (match && !foundWords.includes(match)) {
      setFoundWords((prev) => [...prev, match]);
      if (navigator.vibrate) navigator.vibrate(80);
    }

    setSelectedCells([]);
    setStartCell(null);
  };

  const isSelected = (r: number, c: number) =>
    selectedCells.some((cell) => cell.r === r && cell.c === c);

  const uniqueWordCount = new Set(words.map((w) => w.toUpperCase())).size;
  const allFound = foundWords.length === uniqueWordCount;

  // 🎨 UI
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl border">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-extrabold text-xl text-purple-600 flex items-center gap-2">
          <Trophy className="w-5 h-5" /> Word Search
        </h3>
        <span className="text-sm font-semibold text-gray-500">
          {foundWords.length}/{uniqueWordCount}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
          style={{ width: `${(foundWords.length / uniqueWordCount) * 100}%` }}
        />
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid gap-1 mb-6 select-none touch-none"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
        onMouseLeave={handleEnd}
      >
        {grid.map((row, r) =>
          row.map((letter, c) => (
            <div
              key={`${r}-${c}`}
              onMouseDown={() => handleStart(r, c)}
              onMouseEnter={() => handleMove(r, c)}
              onMouseUp={handleEnd}
              onTouchStart={() => handleStart(r, c)}
              className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center font-extrabold text-lg rounded-lg cursor-pointer transition-all duration-200
                ${
                  isSelected(r, c)
                    ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white scale-110 shadow-lg animate-pulse"
                    : "bg-white text-gray-700 hover:bg-purple-100 hover:scale-105 shadow-sm"
                }
              `}
            >
              {letter}
            </div>
          ))
        )}
      </div>

      {/* Word List */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Array.from(new Set(words.map((w) => w.toUpperCase()))).map((word) => {
          const found = foundWords.includes(word);
          return (
            <span
              key={word}
              className={`px-3 py-1 rounded-full text-xs font-bold border transition-all
                ${
                  found
                    ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-md scale-105"
                    : "bg-white text-gray-600 border-gray-200"
                }
              `}
            >
              {word} {found && <Check className="inline w-3 h-3 ml-1" />}
            </span>
          );
        })}
      </div>

      {/* Controls */}
      {allFound ? (
        <div className="text-center">
          <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 mb-3">
            🏆 You Win!
          </p>
          <Button
            onClick={onComplete || generateGrid}
            className="bg-green-600 hover:bg-green-700"
          >
            Play Again
          </Button>
        </div>
      ) : (
        <Button variant="outline" size="sm" onClick={generateGrid}>
          <RefreshCcw className="w-4 h-4 mr-2" /> Shuffle Board
        </Button>
      )}
    </div>
  );
};

export default WordSearchGame;