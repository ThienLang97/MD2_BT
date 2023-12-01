import React, { useState } from 'react'
import api from './../../service/APIs/API.user';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [user,setUser]= useState({
        email:"",
        password:""
    })
    let reDirect = useNavigate()
    const handleChange=(e)=>{
      const {name,value} = e.target
      setUser({
        ...user,[name]:value
      })
    }
    const handleClick=()=>{
        api.checkLogin(user.email,user.password)
        .then((response)=>{
            
            if(response.data.length!=0){
            alert("Đăng nhập thành công");
            reDirect("/home")
            
        }else{
            console.log(response.data);
            alert("Tài khoản sai")
        }
       })
       
    }
  return (
    <div>
         
          <label htmlFor="">Email</label>
          <input type="text" onChange={handleChange} name='email' />
          <br />
          <label htmlFor="">Password</label>
          <input type="text" onChange={handleChange} name='password' />
          <br />
          <button style={{ backgroundColor: "red" }} onClick={handleClick}>Login</button>
          <br />
    </div>
  )
}
