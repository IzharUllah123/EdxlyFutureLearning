import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Sparkles } from "lucide-react";

/**
 * Bubble Pop Game
 *
 * - Bubbles spawn at random horizontal positions and sizes
 * - They animate upwards with pure CSS (no physics)
 * - Tap/click a bubble to pop it (pop animation), increments score
 * - If a bubble reaches the top, it is removed
 * - Mobile-friendly (touch)
 *
 * Props can be added later (spawnRate, maxBubbles, durationRange, etc.)
 */

type Bubble = {
  id: number;
  leftPercent: number;   // 0..100
  size: number;          // px
  riseDuration: number;  // seconds
  delay: number;         // seconds
  popped?: boolean;
};

const SPAWN_INTERVAL = 700; // ms between spawn attempts
const MAX_BUBBLES = 12;

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const BubblePopGame: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [poppedCount, setPoppedCount] = useState(0);
  const [running, setRunning] = useState(false);
  const spawnRef = useRef<number | null>(null);
  const nextId = useRef(1);

  // Start / stop control
  const startGame = () => {
    setBubbles([]);
    setScore(0);
    setPoppedCount(0);
    setRunning(true);
  };

  const stopGame = () => {
    setRunning(false);
    if (spawnRef.current) {
      window.clearInterval(spawnRef.current);
      spawnRef.current = null;
    }
  };

  // Spawn loop
  useEffect(() => {
    if (!running) {
      // cleanup
      if (spawnRef.current) {
        window.clearInterval(spawnRef.current);
        spawnRef.current = null;
      }
      return;
    }

    // spawn immediately then interval
    const spawnOne = () => {
      setBubbles((prev) => {
        if (prev.length >= MAX_BUBBLES) return prev;
        const id = nextId.current++;
        const leftPercent = Math.round(random(4, 92) * 100) / 100;
        const size = Math.round(random(28, 80)); // px
        const riseDuration = Math.round(random(4.8, 9.5) * 100) / 100; // seconds
        const delay = Math.round(random(0, 0.6) * 100) / 100;
        return [
          ...prev,
          { id, leftPercent, size, riseDuration, delay }
        ];
      });
    };

    // initial spawn burst
    for (let i = 0; i < 3; i++) spawnOne();

    spawnRef.current = window.setInterval(() => {
      spawnOne();
    }, SPAWN_INTERVAL);

    return () => {
      if (spawnRef.current) {
        window.clearInterval(spawnRef.current);
        spawnRef.current = null;
      }
    };
  }, [running]);

  // Remove bubble (used when rise animation ends)
  const removeBubble = (id: number) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  // Pop bubble (on click/tap)
  const popBubble = (id: number) => {
    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );
    setScore((s) => s + 10);
    setPoppedCount((p) => p + 1);

    // remove after pop animation (~260ms)
    setTimeout(() => removeBubble(id), 300);
  };

  // Handle animationend from rising (when bubble reaches top)
  const onRiseEnd = (e: React.AnimationEvent<HTMLDivElement>, id: number) => {
    // filter to the rise animation only (in case pop animation triggers end)
    if (e.animationName === "rise") {
      removeBubble(id);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 w-full max-w-md mx-auto">
      {/* Local CSS for keyframes included inside component so this is self-contained */}
      <style>{`
        @keyframes rise {
          from { transform: translateY(0); opacity: 1; }
          to   { transform: translateY(-120%); opacity: 0.95; }
        }
        @keyframes pop {
          0% { transform: scale(1); opacity: 1; }
          60% { transform: scale(1.4); opacity: 0.9; }
          100% { transform: scale(0.1); opacity: 0; }
        }
        /* small shimmer */
        .bubble-gloss::after {
          content: "";
          position: absolute;
          right: 10%;
          top: 18%;
          width: 28%;
          height: 28%;
          border-radius: 50%;
          background: rgba(255,255,255,0.45);
          transform: rotate(-25deg);
          pointer-events: none;
        }
      `}</style>

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-purple-700 flex items-center gap-2">
          <Sparkles className="w-5 h-5" /> Bubble Pop
        </h3>
        <div className="text-sm text-gray-600 font-medium">
          Score: <span className="font-bold text-primary">{score}</span>
        </div>
      </div>

      <div
        className="relative bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden border border-blue-100"
        style={{ height: 360 }}
        role="application"
        aria-label="Bubble popping game area"
        onTouchStart={(e) => {
          // prevent scroll when touching game
          e.preventDefault();
        }}
      >
        {/* Play area */}
        <div className="absolute inset-0">
          {bubbles.map((b) => {
            const style: React.CSSProperties = {
              position: "absolute",
              left: `${b.leftPercent}%`,
              width: b.size,
              height: b.size,
              bottom: -b.size, // start just below bottom
              transform: "translateX(-50%)",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              userSelect: "none",
              // rise animation
              animationName: b.popped ? "pop" : "rise",
              animationDuration: b.popped ? "260ms" : `${b.riseDuration}s`,
              animationTimingFunction: b.popped ? "ease-out" : "linear",
              animationFillMode: "forwards",
              animationDelay: `${b.delay}s`,
              zIndex: b.popped ? 30 : 10,
              boxShadow: "0 6px 18px rgba(16,24,40,0.06)",
              background: `radial-gradient(closest-side, rgba(255,255,255,0.85), rgba(255,255,255,0.6) 30%, rgba(125,211,252,0.18))`,
              border: "1px solid rgba(255,255,255,0.6)",
            };

            return (
              <div
                key={b.id}
                role="button"
                aria-label="Pop bubble"
                tabIndex={0}
                onClick={() => popBubble(b.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") popBubble(b.id);
                }}
                onAnimationEnd={(e) => onRiseEnd(e, b.id)}
                className={`bubble-gloss`}
                style={style}
              />
            );
          })}
        </div>

        {/* Overlay - instructions */}
        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="bg-white/70 px-4 py-2 rounded-full text-center pointer-events-auto">
              <p className="text-sm text-gray-700 font-medium">Tap to pop the bubbles!</p>
              <p className="text-xs text-gray-500">Pop as many as you can — mobile friendly</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {!running ? (
          <Button onClick={startGame} className="flex-1">
            Start
          </Button>
        ) : (
          <Button onClick={stopGame} variant="outline" className="flex-1">
            Stop
          </Button>
        )}

        <Button
          variant="ghost"
          onClick={() => {
            setBubbles([]);
            setScore(0);
            setPoppedCount(0);
          }}
          className="w-12 h-10"
          title="Reset"
        >
          <RefreshCcw className="w-4 h-4" />
        </Button>
      </div>

      {/* Small stats */}
      <div className="mt-3 text-xs text-gray-500 flex justify-between">
        <span>Popped: {poppedCount}</span>
        <span>Active: {bubbles.length}</span>
      </div>
    </div>
  );
};

export default BubblePopGame;
