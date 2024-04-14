import { useState } from "react";
import "./App.css";
import YourLocation from "./component/YourLocation";
import SearchLocation from "./component/SearchLocation";

function App() {

  const [tab,setTab] = useState("userTab");

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center wrapper">

      <div className="w-full">

        <h1 className="text-[2rem] font-[700] uppercase pt-[20px] text-center">Weather App</h1>

        <div className="w-[90%] max-w-[550px] mx-auto mt-[4rem] flex justify-between flex-wrap">

            <button onClick={() => setTab("userTab")}
            className={`text-[1.2rem] py-[5px] px-[12px] cursor-pointer 
            ${tab === "userTab" ? 
            'bg-[rgba(219,226,239,0.5)] rounded-[4px]' :
            'bg-transparent'}`}>Your Weather</button>

            <button onClick={() => setTab("searchTab")}
            className={`text-[1.2rem] py-[5px] px-[12px] cursor-pointer 
            ${tab === "searchTab" ? 
            'bg-[rgba(219,226,239,0.5)] rounded-[4px]' :
            'bg-transparent'}`}>Search Weather</button>

        </div>
      </div>
      <div className="mt-[4rem] w-[35vw] flex justify-center">
        {
          tab === "userTab" ? (
            <YourLocation/>
            ) : 
            (
            <SearchLocation/>
            )
        }
      </div>
    </div>
  );
}

export default App;
