import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { API } from "./global";
import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Welcome({setInputValue, setUser}) {
  const nav = useNavigate();
  const [value, setValue] = useState("");
  // const location = useLocation();
  // const token = new URLSearchParams(location.search).get('token');
  const { token } = useParams();

  // console.log(`shruthi welcome token: ${token}`);
  // console.log(`welcome token2: ${token2}`);
  useEffect(() => {
    fetch(`${API}/welcome/`+ token, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          //  "auth-token": token
      },
      //body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message === "Login success") {
        // if (res.Status === 200) {
          console.log(res.message);
          // toast.success("Login Successful", {
          //   onClose: () => {
          //     console.log("closed");
          //     setTimeout(function () {
          //       //nav("/welcome");
          //     }, 1000);
          //   },
          // });
       } else {
         
          console.log(`response status: ${res.status}`);
          console.log(`${res.message}`);
          toast.error(`${res.message}`, {
            onClose: () => {
              console.log("closed");
              setTimeout(() => {
                setUser(null)
                nav("/");
              }, 2000);
            },
          });
       }
      });
  },[])

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
    <ToastContainer />
      {/* Login successfull */}
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input
         type="text" 
         placeholder="Place the link to shorten it"
        value={value}
        onChange={e=> setValue(e.target.value)}
         />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  )
}
