import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Trophy } from "lucide-react";

const GAME_WIDTH = 300;
const GAME_HEIGHT = 400;
const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 20;
const ITEM_SIZE = 20;
const SPEED = 3;

interface CatchGameProps {
  onComplete?: () => void;
}

const CatchTheItemsGame: React.FC<CatchGameProps> = ({ onComplete }) => {
  const [playerX, setPlayerX] = useState(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
  const [items, setItems] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  // Spawn new items every 1 sec
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setItems((prev) => [
        ...prev,
        {
          x: Math.random() * (GAME_WIDTH - ITEM_SIZE),
          y: 0,
          id: Date.now(),
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Game loop: move items down
  useEffect(() => {
    if (gameOver) return;

    const loop = setInterval(() => {
      setItems((prev) =>
        prev
          .map((item) => ({ ...item, y: item.y + SPEED }))
          .filter((item) => item.y < GAME_HEIGHT)
      );
    }, 16);

    return () => clearInterval(loop);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    items.forEach((item) => {
      const caught =
        item.y + ITEM_SIZE >= GAME_HEIGHT - PLAYER_HEIGHT &&
        item.x < playerX + PLAYER_WIDTH &&
        item.x + ITEM_SIZE > playerX;

      if (caught) {
        setScore((s) => s + 1);
        setItems((prev) => prev.filter((i) => i.id !== item.id));

        if (score + 1 >= 10) {
          setGameOver(true);
          if (onComplete) onComplete();
        }
      }
    });
  }, [items, playerX]);

  // Desktop keyboard movement
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((x) => Math.max(0, x - 20));
      } else if (e.key === "ArrowRight") {
        setPlayerX((x) => Math.min(GAME_WIDTH - PLAYER_WIDTH, x + 20));
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Touch/drag for mobile
  const handleTouch = (e: React.TouchEvent) => {
    const rect = gameRef.current?.getBoundingClientRect();
    if (!rect) return;

    const touchX = e.touches[0].clientX - rect.left;
    setPlayerX(Math.min(GAME_WIDTH - PLAYER_WIDTH, Math.max(0, touchX - PLAYER_WIDTH / 2)));
  };

  const resetGame = () => {
    setScore(0);
    setItems([]);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-md mx-auto">
      <div className="flex justify-between w-full items-center mb-3">
        <h3 className="font-bold text-lg text-blue-600 flex items-center gap-2">
          <Trophy className="w-5 h-5" /> Catch the Falling Items
        </h3>
        <span className="text-sm text-gray-600">Score: {score}/10</span>
      </div>

      <div
        ref={gameRef}
        onTouchMove={handleTouch}
        className="relative bg-gray-100 border border-gray-300 rounded-lg overflow-hidden"
        style={{
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
          touchAction: "none",
        }}
      >
        {/* Player */}
        <div
          className="absolute bg-blue-600 rounded-md"
          style={{
            width: PLAYER_WIDTH,
            height: PLAYER_HEIGHT,
            bottom: 0,
            left: playerX,
          }}
        />

        {/* Falling items */}
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute bg-yellow-400 rounded-full shadow"
            style={{
              width: ITEM_SIZE,
              height: ITEM_SIZE,
              top: item.y,
              left: item.x,
            }}
          />
        ))}
      </div>

      {gameOver ? (
        <div className="mt-4 text-center">
          <p className="text-xl font-bold text-green-600 mb-3">
            🎉 You caught 10 items! 🎉
          </p>
          <Button onClick={resetGame} className="bg-green-600 hover:bg-green-700">
            Play Again
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          onClick={resetGame}
          size="sm"
          className="mt-4 text-gray-500"
        >
          <RefreshCcw className="w-4 h-4 mr-2" /> Restart
        </Button>
      )}
    </div>
  );
};

export default CatchTheItemsGame;
