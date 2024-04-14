import React from 'react'
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudShowersHeavy } from "react-icons/fa";

const ShowWeather = ({data}) => {
    if(!data)
    {
        return;
    }
  return (
        <div>
            {
                (data.cod === "404") ? (<div className='flex flex-col justify-center items-center mt-[3rem] gap-y-1 text-[1rem]'>
                City Not Found ! 
                <br></br> 
                <p>Please enter a valid city name</p>
                </div>) : 
                (
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center gap-[0.5rem] mb-[1rem]'>
                        <p className='text-[2rem]'>{data.name}</p>
                        <img  alt="country" src={`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`}
                        className='w-[30px] h-[30px]'></img>
                    </div>

                    <div>
                        <p className='text-[1.5rem] font-[200]'>{data?.weather?.[0]?.description}</p>
                    </div>

                    <div>
                        <img alt= "weather-description" src={`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`}
                        className='w-[90px] h-[90px]'></img>
                    </div>

                    <div>
                        <p className='text-[2.75rem] font-[700] mb-[2rem]'>{`${data.main.temp}°c`}</p>
                    </div>



                    <div className='flex flex-row gap-y-[10px] gap-x-[20px] items-center justify-center flex-wrap'>

                        <div className='w-[30%] max-w-[200px] bg-[rgba(219,226,239,0.5)] rounded-[5px] p-[1rem] flex flex-col items-center gap-[5px]'>
                            <div><FaWind fontSize={50} color='#5BBCFF'/></div>
                            <p className='uppercase text-[1.15rem] font-[700]'>Windspeed</p>
                            <p className='text-[1rem] font-[200]'>{`${data?.wind?.speed}m/s`}</p>
                        </div>

                        <div className='w-[30%] max-w-[200px] bg-[rgba(219,226,239,0.5)] rounded-[5px] p-[1rem] flex flex-col items-center gap-[5px]'>
                            <div><WiHumidity fontSize={50} color='#5BBCFF'/></div>
                            <p className='uppercase text-[1.15rem] font-[700]'>Humidity</p>
                            <p className='text-[1rem] font-[200]'>{`${data?.main?.humidity}%`}</p>
                        </div>

                        <div className='w-[30%] max-w-[200px] bg-[rgba(219,226,239,0.5)] rounded-[5px] p-[1rem] flex flex-col items-center gap-[5px]'>
                            <div><FaCloudShowersHeavy fontSize={50} color='#5BBCFF'/></div>
                            <p className='uppercase text-[1.15rem] font-[700]'>Clouds</p>
                            <p className='text-[1rem] font-[200]'>{`${data?.clouds?.all}%`}</p>
                        </div>
                        
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default ShowWeather