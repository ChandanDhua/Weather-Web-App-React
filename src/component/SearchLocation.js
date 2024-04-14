import React, { useState } from 'react'
import ShowWeather from './ShowWeather'
import { FaSearch } from "react-icons/fa";
import Loading from './Loading';

const SearchLocation = () => {
    const key = 'a4bf314e6160a4a0084639c2b809b3db';
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(false);
    const [city,setCity] = useState("");

    function changeHandler(event)
    {
        setCity(event.target.value);
    }

    function submitHandler(event)
    {
        event.preventDefault();
        fetchSearchWeatherInfo(city);
    }

    async function fetchSearchWeatherInfo(city)
    {
        if(city === "") {
            console.log("Please Eneter a city")
        }
        else{
            try{
                setLoading(true);
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
                const data  =  await response.json();
                setData(data);
            }
            catch(er)
            {
                console.log(er);
            }
            setLoading(false);
        }
    }

  return (
    <div className='w-full'>
        <div className='w-full'>
            <form onSubmit={submitHandler} className='flex flex-row w-full ml-[2rem]'>
                <input type='text' onChange={changeHandler} placeholder="Search For City..." 
                className='w-[calc(100%-80px)] h-[40px] px-[20px] bg-[rgba(219,226,239,0.5)] rounded-[10px] mr-[0.6rem] mb-[1rem] 
                text-[1rem] font-[400] placeholder-white'></input>
                <button type='submit'
                className=' mb-[1rem]'><FaSearch fontSize={27} color='white'/></button>
            </form>
        </div>
        {
            loading ? (<Loading/>) : (<ShowWeather data={data}/>)

        }
    </div>
  )
}

export default SearchLocation