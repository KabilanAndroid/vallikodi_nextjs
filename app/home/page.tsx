"use client"

import Button from "@mui/material/Button"
import { log } from "console"
import { useEffect } from "react"
import axios from 'axios';

const Home = () => {

  const handleapi =async()=>{
    try{
      axios.defaults.withCredentials = false;
      const response = await axios.post("http://172.21.4.154:8080/api/login",
        {email:"kabilan13@gmail.com",
          password:"1234",
          withCredentials:false
        })
      console.log("response:",response.data);
      
    }catch(e){
      console.log("error:",e)
    }
    
  }

  return <div className='w-full h-full bg-amber-600'>

  <Button onClick={handleapi}>click</Button>
  </div>
}
export default Home
