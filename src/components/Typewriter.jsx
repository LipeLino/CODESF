import { useEffect, useState } from "react";

// Local replacement for react-typewriter-effect (which bundled webpack 4 and
// ~hundreds of vulnerable transitive packages). Same props used by Hero.jsx.
const Typewriter = ({
  text,
  typeSpeed = 100,
  startDelay = 0,
  cursorColor = "black",
  hideCursorAfterText = false,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), typeSpeed);
    return () => clearTimeout(t);
  }, [started, count, text, typeSpeed]);

  const done = count >= text.length;
  const showCursor = !(done && hideCursorAfterText);

  return (
    <div className="react-typewriter-text" style={{ padding: 0, margin: 0, textAlign: "left" }}>
      <span>{text.slice(0, count)}</span>
      {showCursor && (
        <span
          className="typewriter-cursor"
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            verticalAlign: "text-bottom",
            backgroundColor: cursorColor,
            animation: done ? "none" : "typewriter-blink 1s step-end infinite",
          }}
        />
      )}
    </div>
  );
};

export default Typewriter;
