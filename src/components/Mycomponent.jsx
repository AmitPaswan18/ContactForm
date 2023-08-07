import { useState } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((respon) => {
        console.log(respon[99]);
      });
    setData((e) => ({
      ...e,
    }));
  }
  return (
    <>
      <div className="bg-sky-500">
        {data === null && <p>Loading data...</p>}
        {data !== null && (
          <div>
            <p className="font-serif">Data has been loaded!</p>
          </div>
        )}
      </div>
      <button name="f1" onClick={fetchData}>
        {" "}
        button
      </button>
    </>
  );
}

export default MyComponent;
