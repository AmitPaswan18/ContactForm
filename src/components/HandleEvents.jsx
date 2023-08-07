// import { Divide } from "hamburger-react";

import { useState } from "react";
import { useEffect } from "react";

const HandleEvents = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    textarea: "",
  });
  const [record, setRecords] = useState([]);

  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...data, id: new Date().getTime().toString() };
    setRecords([...record, newRecord]);
    console.log(record);
    alert("Your Details is succesfully submited");
    setData({
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      textarea: " ",
    });
  };

  function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/1c407ca9-ddab-42a4-ada3-4ab7cdee594a", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        document.getElementById("form").reset();
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);
  }, []);

  return (
    <>
      <div
        id="mainForm"
        className="h-[100vh] lg:h-fit p-5 w-full bg-gradient-to-r flex flex-col from-sky-400 to-indigo-600 "
      >
        <div className=" absolute lg:left-[10vw] lg:top-[20vh] bottom-[80vh] top-[120px] mt-3 md:w-full text-3xl max-w-max">
          <p> Get in Touch</p>
          <div className="border-b-2"></div>
        </div>
        <p className="font-semibold text-white  p-1  my-3 mt-[100px] ">
          {" "}
          Please enter your info below{" "}
        </p>
        <form
          id="form"
          onSubmit={handleSubmit}
          method="POST"
          acceptCharset="UTF-8"
          className="flex-col rounded-[20px] shadow-lg shadow-fuchsia-500 border-fuchsia-500 border p-3 md:p-10   justify-center items-center md:w-[70%]  px-4 lg:w-[40%] flex space-y-5"
        >
          <label>
            <input
              className="border-2 border-purple-500 rounded h-5 w-full md:[50%] p-4 placeholder:text-gray-600"
              onChange={HandleChange}
              value={data.firstName}
              placeholder="FullName"
              name="firstName"
              autoComplete="off"
              type="text"
              id="firstName"
              required
            />
          </label>
          <label>
            <input
              className="border-2 border-purple-500 rounded h-5 w-full  p-4 placeholder:text-gray-600"
              onChange={HandleChange}
              placeholder="LastName"
              name="lastName"
              autoComplete="off"
              type="text"
              required
              value={data.lastName}
            />
          </label>
          <label>
            <input
              className="border-2 border-purple-500 rounded h-5 hover:shadow-2xl md:[70%] w-full p-4 placeholder:text-gray-600"
              onChange={HandleChange}
              value={data.email}
              placeholder="Email"
              autoComplete="off"
              name="email"
              type="email"
              required
            />
          </label>
          <label>
            <input
              className="border-2 rounded border-purple-500  w-full h-5 p-4 hover:shadow-2xl placeholder:text-gray-600"
              onChange={HandleChange}
              value={data.number}
              placeholder="Phone Number"
              maxLength={12}
              name="number"
              type="tel"
              required
            />
          </label>

          <label>
            <textarea
              className="rounded-md border-2 border-purple-500  w-full hover:shadow-2xl placeholder:text-gray-600   "
              name="textarea"
              onChange={HandleChange}
              value={data.textarea}
              id="textarea"
              cols="28"
              rows="3"
              placeholder="Message"
              required
            ></textarea>
          </label>

          <button
            className="  mt-8 md:ml-16  text-black font-bold border-2 h-fit w-full md:w-[10vw] rounded-md p-3 bg-white hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 md:mr-[45px]"
            type="submit"
          >
            Submit now
          </button>
        </form>
        <div>
          {record.map((value) => {
            const { firstName, lastName, email, number, textarea } = value;
            return (
              <div
                className="flex flex-wrap justify-center bg-gradient-to-r from-fuchsia-600 to-pink-600 gap-2 rounded lg:h-[50px] w-[90vw] p-2 items-center mt-8 text-sm"
                key={value.id}
              >
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{number}</p>
                <p>{textarea}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HandleEvents;
