import { useState } from "react";
import "./App.css";
// https://reqres.in/api/users?page=1
function App() {
  const [state, setState] = useState(0);
  const [user, setUser] = useState([]);

  // alert("render")
  const getData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");

    const get = await res.json();
    setUser(get.data);
  };

  console.log(user);

  return (
    <>
      <div className="m-2 h-[50px] flex text-center justify-center items-center w-full">
        <span className="text-xl">To get User Data : </span>
        <button
          className="m-2 rounded bg-black text-white border border-black p-2 w-[100px] text-center"
          onClick={getData}
        >
          Click Here
        </button>
      </div>
      <hr className="border" />

      <div className="w-full flex justify-center">
        <div className="w-[600px] ">
          {user.map((e) => {
            return (
              <div className="flex border border-black p-2 m-2 rounded-xl shadow-xl">
                <div>
                  <img className="rounded-xl" src={e.avatar} />
                </div>
                <div className="p-2 text-start flex flex-col justify-center">
                  <p>id : {e.id}</p>
                  <p>First Name : {e.first_name}</p>
                  <p>Last Name: {e.last_name}</p>
                  <p>Email : {e.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
