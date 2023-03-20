import React from 'react'
import{Link} from 'react-router-dom' 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function CreateAccount() {
    const history = useNavigate();
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [data,setData] = useState([]);
    console.log(setData);
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

        const { name, email, password } = inpval;
        if (name === "") {
            alert(' name field is requred!');
        } else if (email === "") {
             alert('email field is requred');
        } else if (!email.includes("@")) {
             alert('plz enter valid email addres');
        }  else if (password === "") {
             alert('password field is requred');
        } else if (password.length < 5) {
             alert('password length greater five');
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("user",JSON.stringify([...data,inpval]));
        }

    }
  return (
    <div className='MainLogin'>
        <div className='LeftLogin'>
            <h1>Create Account</h1>
            <form type="submit">
            <label>Name</label>
                <input type={'text'} placeholder={'Enter Name'} name="name" onChange={getdata}></input>
                <label>Email</label>
                <input type={'email'} placeholder={'Enter email id'} name="email" onChange={getdata}></input>
                <label>Password</label>
                <input type={'password'} placeholder={'Enter password'} name="password" onChange={getdata}></input>
                <Button type='submit' onClick={addData} variant="outlined"> Submit Details</Button>  
            </form>
            <p>Already Have Account<Link to={"/Login"} > SignUp</Link></p>
        </div>
       
    </div>
  )
}
export default CreateAccount