import React, { useEffect, useState } from 'react'
import api from './../../service/APIs/API.user';
import {Link, useNavigate} from "react-router-dom"

export default function Register() {
    // let data = {
    //     "userName":"Nộc",
    //     "email":"123@gmail.com",
    //     "password":"123",
    //     "cart":[]
    // }
    
    // useEffect(() => {
    //     let result = api.checkRegister("123@gmail.com")
    //     result.then((res)=>{
    //         console.log("12345",res.data);
    //         if(res.data.length!=0){
    //             console.log("tài khoản đã tồn tại");
    //             return
    //         }
    //     })
        
    // }, [])
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
        cart:[]
    })
    const reDirect = useNavigate()
    const handleChange = (e)=>{
        let username = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,[username]:value
        })
    }
    const handleClick= ()=>{
        api.checkRegister(user.email)
        .then((res)=>{
            if(res.data.length!=0){
                alert("Tài khoản đã tồn tại");
                return
            }else{
                api.register(user)
                alert("Đăng kí thành công")
                reDirect("/login")
            }
        })
    }
    console.log("111111",user);
    return (
        <div>
            <label htmlFor="">Username</label>
            <input type="text" onChange={handleChange} name='username'/>
            <br/>
            <label htmlFor="">Email</label>
            <input type="text" onChange={handleChange}  name='email' />
            <br />
            <label htmlFor="">Password</label>
            <input type="text" onChange={handleChange}  name='password'/>
            <br />
            <button style={{backgroundColor:"red"}} onClick={handleClick}>Register</button>
            <br />
            <p>Bạn đã có tài khoản ? <Link to="/login">Login</Link></p>


        </div>
    )
}
