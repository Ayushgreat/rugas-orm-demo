import { useState } from "react";

const login = () => {
    const {login,setloggedIn} = useState(false);
    const{email,setEmail} = useState("");
    const{password,setPassword} = useState("");

    const handlelogin=()=>{
        setloggedIn(true);
        alert("Login Successful");
    }
 const handleSubmit =(e) =>{
     e.preventDefault();
     if(email && password){
         alert('Login Successful');
     }else{
         alert('Please fill all the fields');
     }
    
}
return(
    <>
     <button onClick={handlelogin}>Login
     {loggedIn ? "loggedIn": "Not loggedIn"}
    </button>
   
     <form  onSubmit ={handleSubmit} > </form>
     <input
     type="email"
     placeholder="eamil"
     value={email}
     onChange={(e) =>setEmail(e.target.value)}
     />

     <input
     type="password"
     placeholder="password"
     value={password}
     onChange={(e) =>setPassword(e.target.value)}
     
        />
        </>
)

export default login;