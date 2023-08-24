import "./register.scss";
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return (  
        <div className="register">
            <div className='glass'>
                <h1>Register </h1>
                <p>Please register to login</p>
            <form onSubmit={handleSubmit}>
                <label for='text'>Full Name</label>
                <input type="text" placeholder="full Name" name="text"/>
                <label for='text'>Phone Number</label>
                <input type="text" placeholder="mobile number" name="text"/>
            <lable for="email">Email</lable>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" 
                id="email" name="email"/>
           <lable for="password">Password </lable>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*******"id="password" name="password"/> 
                <label className='checkregister'><input type='checkbox' name='r' id='r' /> Agree to terms and conditions <a href='#'></a> </label>
              <Link to= {'/'}> <button >Sign up</button> </Link>  
                

              <p>Already have an account? <Link to= {'/'}>  <a href='#'>Log In</a> </Link> </p>
        </form>
            </div>
        </div>
    );
}
 
export default Register;