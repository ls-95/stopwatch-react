import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>
      <div className="text-2xl font-mono mb-8">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="flex space-x-4">
        {running ? (
          <button
            className="bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-600 transition-colors"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        )}
        <button
          className="bg-gray-500 text-white rounded-lg py-2 px-4 hover:bg-gray-600 transition-colors"
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
