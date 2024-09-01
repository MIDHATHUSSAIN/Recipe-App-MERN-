import FORM from "./form";
import axios from "axios";
import { useState } from "react";


function REGISTER (){
    let [name, setname] = useState("");
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
   async function onSubmit(e){
        e.preventDefault()
        try{
         await axios.post('http://localhost:8000/auth/registration',{name,email,password});
          alert('registration completed , now login');
          setname("")
          setemail("")
          setpassword("")
          

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
        label={'REGISTER'}
        onSubmit={onSubmit}
        />
    )
}



export default REGISTER;
