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

    fetch("https://getform.io/f/0eaa3611-cc9d-4774-b456-2a7240c96640", {
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
        className="h-[100vh] md:h-fit p-5 w-fit bg-gradient-to-r flex flex-col from-sky-400 to-indigo-600 "
      >
        <div className=" absolute md:left-[10vw] md:top-[20vh] bottom-[80vh] mt-3 text-3xl">
          <p> Get in Touch</p>
          <div className="border-b-2"></div>
        </div>
        <p className="font-semibold text-white w-fit p-1 md:mt-20 ">
          {" "}
          Please enter your info below{" "}
        </p>
        <form
          id="form"
          onSubmit={handleSubmit}
          method="POST"
          acceptCharset="UTF-8"
        >
          <div>
            <label htmlFor="firstName" className="m-2 flex flex-col">
              <input
                className="border-2 border-purple-500 rounded h-5   p-4 placeholder:text-gray-600"
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
            <label className="m-2 flex flex-col">
              <input
                className="border-2 border-purple-500 rounded h-5   p-4 placeholder:text-gray-600"
                onChange={HandleChange}
                placeholder="LastName"
                name="lastName"
                autoComplete="off"
                type="text"
                required
                value={data.lastName}
              />
            </label>
            <label className="m-2 flex flex-col">
              <input
                className="border-2 border-purple-500 rounded h-5 hover:shadow-2xl  p-4 placeholder:text-gray-600"
                onChange={HandleChange}
                value={data.email}
                placeholder="Email"
                autoComplete="off"
                name="email"
                type="email"
                required
              />
            </label>
            <label className=" m-2 flex flex-col">
              <input
                className="border-2 rounded border-purple-500  h-5 p-4 hover:shadow-2xl placeholder:text-gray-600"
                onChange={HandleChange}
                value={data.number}
                placeholder="Phone Number"
                maxLength={12}
                name="number"
                type="tel"
                required
              />
            </label>
            <div className="flex flex-col">
              <label htmlFor="">
                <textarea
                  className="rounded-md border-2 border-purple-500   hover:shadow-2xl placeholder:text-gray-600 ml-4 md:mr-3 "
                  name="textarea"
                  onChange={HandleChange}
                  value={data.textarea}
                  id="textarea"
                  cols="26"
                  rows="3"
                  placeholder="Message"
                  required
                ></textarea>
              </label>

              <button
                className="  mt-8 ml-20 md:ml-[27%] text-black font-bold border-2 h-fit w-fit rounded-md p-3 bg-white hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 "
                type="submit"
              >
                Submit now
              </button>
            </div>
          </div>
        </form>
        <div>
          {record.map((value) => {
            const { firstName, lastName, email, number, textarea } = value;
            return (
              <div
                className="flex flex-wrap justify-center bg-gradient-to-r from-fuchsia-600 to-pink-600 gap-2 rounded md:h-[50px] w-[90vw] p-2 items-center mt-8 text-sm"
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
