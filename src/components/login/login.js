import axios from "axios";
import FORM from "./form";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"
import { useState } from "react";

function LOGIN (){
    let [name, setname] = useState("");
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    const [,setCookies] = useCookies(["access_token"])
    let navigate = useNavigate()
    async function onSubmit(e){
        e.preventDefault()
        try{
          const response = await axios.post('http://localhost:8000/auth/login',{name,email,password});
          alert("user login")
          console.log(response.data)
          setCookies("access_token",response.data.token)
          window.localStorage.setItem("userId",response.data.userId)
          setname("")
          setemail("")
          setpassword("")
          navigate("/")
        }catch(error){
            console.error(error)

        }
    }
    return(
        <FORM 
        name={name}
        setname={setname}
        email={email}
        setemail={setemail}
        password={password}
        setpassword={setpassword}
        label={'LOGIN'}
        onSubmit={onSubmit}
        />
    )
}

export default LOGIN;