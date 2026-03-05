import axios from "axios";
import { useState } from "react";
function Reg()
{
    const [data,setdata]=useState(
        {
            username:"",
            email:"",
            password:""
        }
    )
    const changeName=(e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    const changeEmail=(e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    const changePassword=(e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=async()=>
    {
        if (!data.username.trim() || !data.email.trim() || !data.password.trim()) {
            alert("Please fill username, email, and password")
            return
        }

        try{
                const res=await axios.post("https://cabsystemsms-1.onrender.com/register",data)
                alert(res.data)
        }
    catch(xyz)
    {
            if (xyz.response?.status === 409) {
                alert("User already exists. Try a different username or email.")
                return
            }
            const errorMessage = xyz.response?.data?.message || xyz.response?.data || xyz.message || "Registration failed"
            alert(typeof errorMessage === "string" ? errorMessage : JSON.stringify(errorMessage))
    }
}
return(
    <>
    <h1>iam App</h1>
    <input onChange={changeName} name="username" placeholder="enter username"/>
    <input onChange={changeEmail} name="email" placeholder="enter email"/>
    <input onChange={changePassword} name="password" placeholder="enter password"/>
    <button onClick={submit}>register</button>
    </>
)
}
export default Reg;