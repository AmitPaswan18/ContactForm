import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div className="flex items-center justify-center">
      <div className="w-[30%] h-[50vh]  ">
        <p className=" flex justify-center items-center text-3xl">
          {" "}
          <AiTwotoneHeart />
          {counter}
        </p>
        <button
          className="p-2 border-2 bg-green-900 rounded-md m-2 w-[80px]"
          onClick={increment}
        >
          Like
        </button>
        <button
          className="p-2 border-2 bg-cyan-600 rounded-md m-2 w-[80px]"
          onClick={decrement}
        >
          Dislike
        </button>
      </div>
    </div>
  );
}

export default Counter;
