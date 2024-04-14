import React from 'react'

const GrantLocation = ({setLocalCoordinates}) => {

    function getlocation(){
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{
            console.log("No geolocation Support");
        }
    }
    
    function showPosition(position)
    {
        const userCoordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        }
    
        sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
        setLocalCoordinates(JSON.stringify(userCoordinates));
        console.log(userCoordinates);
    }
  return (
    <div className='h-full w-full mt-[3rem] flex flex-col justify-center items-center'>
        <p className='text-[1rem]'>Grant Location Access</p>
        <p className='text-[0.85rem] mt-[1.2rem] mb-[1.75rem] leading-[0.75px] font-[500]'>Allow access to get Weather Infomation</p>
        <button onClick={() => getlocation()}
        className='border-none text-white font-[0.85rem] uppercase rounded-[5px] bg-[#3F72AF] cursor-pointer py-[10px] px-[30px] mb-[10px]'>Grant Access</button>
    </div>
  )
}

export default GrantLocation