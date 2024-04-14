import React, { useEffect } from 'react'
import { useState } from "react";
import GrantLocation from './GrantLocation';
import ShowWeather from './ShowWeather';
import Loading from './Loading';

const YourLocation = () => {
    const [localCoordinates,setLocalCoordinates] = useState(sessionStorage.getItem("user-coordinates"));
    const key = 'a4bf314e6160a4a0084639c2b809b3db';
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(false);

    useEffect( () => {
        async function fetchUserWeatherInfo(coordinates)
        {
            setLoading(true);
            const {lat,lon} = coordinates;
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
                const data = await response.json();
                setData(data);
                console.log(data);
            }
            catch(e)
            {
                console.log(e);
            }
            setLoading(false);
        }

        if(localCoordinates)
        {
            console.log(localCoordinates);
            try {
                const coordinates = JSON.parse(localCoordinates);
                console.log(coordinates);
                fetchUserWeatherInfo(coordinates);
            } catch (error) {
                console.log("Error parsing localCoordinates:", error);
            }
            // const coordinates = {lat:10,lon:11}
        }
    },[localCoordinates])


  return (
    <div>
        {
            localCoordinates ? (
                loading ? (<Loading/>) :(<ShowWeather data = {data}></ShowWeather>)) 
            : (<GrantLocation setLocalCoordinates= {setLocalCoordinates}/>)
        }
    </div>
  )
}

export default YourLocation