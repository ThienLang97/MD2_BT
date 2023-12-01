import axios from "axios"
export default {
    //hàm register để đăng kí 
    register: async (dataRegister) => {
        return await axios.post(`http://localhost:5566/users`, dataRegister)
        
    },
    login: async () => {
        // return await axios.post("http://localhost:5555/users",data)
        return await axios.post(`${import.meta.env.VITE_HOST_NAME}users`,data)
    },
    checkRegister: async(email)=>{
        return await axios.get(`http://localhost:5566/users?email=${email}`)
    },
    checkLogin: async(email,password)=>{
        // return await axios.get(`${import.meta.env.VITE_HOST_NAME}users?email=${email}&password=${password}`)
        return await axios.get(`http://localhost:5566/users?email=${email}&password=${password}`)
    }
}
/* 
data:
id
username:
email */