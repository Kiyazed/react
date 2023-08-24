import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./login.scss";
const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

    }
    return ( 
        <div className='login'>
            <div className='glass'>
                <h1 className='log'>Log In</h1>
         <form onSubmit={handleSubmit}>
            <lable for="email">Email</lable>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" 
                id="email" name="email"/>
           <lable for="password">Password </lable>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*******" 
                id="password" name="password"/> 
              <Link to= {'/home'}> <button >Log In</button> </Link>  
                
              <label className='check'><input type='checkbox' name='r' id='r' /> Remember me <a href='#'>forgot password?</a></label>
                        <hr/>
              <p className='para'>Don't have an account? <Link to= {'/Register'}>  <a href='#'>Register here</a> </Link> </p>
        </form>
      
    </div>
    </div>
        
     );
}
 
export default Login;