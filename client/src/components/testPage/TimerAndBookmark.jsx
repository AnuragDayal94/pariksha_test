import { useEffect, useRef, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
const TimerAndBookmark = ({
  toggleBookmark,
  bookmarked,
  currentQuestion,
  questions,
  duration,
  handleEndTest,
  setSideOpen,
}) => {
 
  const convertDurationToSeconds = (duration) => {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const [timeLeft, setTimeLeft] = useState(() => convertDurationToSeconds(duration));
  const timeInterval = useRef(null);

  useEffect(() => {
    
    timeInterval.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
         
          clearInterval(timeInterval.current);
          handleEndTest();
          return 0;
        }
      });
    }, 1000);

   
    return () => clearInterval(timeInterval.current);
  }, [handleEndTest]);

 
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-between items-start sm:items-center">
      <div className="flex-col flex  justify-center gap-5">
      <button
        onClick={() => toggleBookmark(questions[currentQuestion].questionNum)}
        className={`flex items-center justify-center p-2 gap-1 border rounded ${
          bookmarked.includes(questions[currentQuestion].questionNum)
            ? "bg-yellow-500"
            : ""
        }`}
      >
        <FaRegBookmark />
        <span className="text-lg">
          {bookmarked.includes(questions[currentQuestion].questionNum)
            ? "Unmark"
            : "Mark"}
        </span>
      </button>
      <button className="sm:hidden p-2 flex items-center gap-1 border rounded text-lg" onClick={()=>setSideOpen(prev=>!prev)}><span>subjects</span><IoIosArrowDropright /></button>
      </div>
      <div className="flex-col flex sm:flex-row items-end sm:items-center justify-center gap-5">
        <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
          Time Left: {formatTime(timeLeft)}
        </div>
        <button onClick={handleEndTest} className="btn btn-neutral">
          End Test & Submit
        </button>
      </div>
    </div>
  );
};

export default TimerAndBookmark;