import React, { useState } from 'react'
import{Link,useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';

function Login() {
   
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })
    console.log(inpval);

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("user");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
          alert('email field is requred');
        } else if (!email.includes("@")) {
          alert('plz enter valid email addres');
        } else if (password === "") {
          alert('password field is requred');
        } else if (password.length < 5) {
          alert('password length greater five');
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/Home")
                }
            }
        }

    }   
  return (
    <div className='MainLogin'>
        <div className='LeftLogin'>
            <h1>Welcome Back to</h1>
            <h1>Pretty login</h1>
            <h4>Its Great to have You back!</h4>
            <form type="submit">
                <label>Email</label>
                <input type={'email'} placeholder={'Enter Email Id'} name="email" onChange={getdata}></input>
                <label>Password</label>
                <input type={'password'} placeholder={'Enter Password'} name="password" onChange={getdata}></input>
                <Button type='submit' onClick={addData} variant="outlined" > Login</Button>  
            </form>
            <Button variant="outlined"><Link to={"/"}>Create Account</Link></Button>
        </div>
       
    </div>
  )
}
export default Login