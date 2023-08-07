import axios from "axios";
import { useEffect, useState } from "react";

const Usingeffect = () => {
  const [data, setData] = useState({ postId: "", id: "", name: "" });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].id);
      });
    console.log(data);
  });
  function handleClick() {
    console.log(data);
  }
  return (
    <>
      <h1>hello{data.postId}</h1>
      <button onClick={handleClick}> This is a button</button>
    </>
  );
};

export default Usingeffect;
