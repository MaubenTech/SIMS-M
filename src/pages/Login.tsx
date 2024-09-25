import React, { useState } from 'react'
import '../css/loginlogout.css'
import img from '../assets/library.jpeg'

function Login() {
  const [formData, setFormData] = useState({
    email : '',
    password : '',
    role: '',
  });
  const {email, password, role} = formData

  const [message, setMessage] = useState("");


  const onSubmit = (e :any) => {
    e.preventDefault();
    if(password === null || password === ""){
      setMessage(' password can\'t be empty');
    }
  }


  return (
    <>
        <section>
          <form onSubmit={onSubmit}>
            <p id='message'>{message}</p>
                <h1>Log In</h1>
                <p>Please enter your information</p>
                <div className="form-group">
                    <span>Email</span>
                    <input type="email" className="form-control" id='email' name='email'  placeholder='John Constantine' required/>
                </div>
                <div className="form-group">
                  <span>Password</span>
                    <input type="password" className="form-control" id='password' name='password' placeholder='********' />
                
                    <a id='linkpassword'><p id='passwordreset'>Forgot Password?</p></a>
                </div>
                <div className="form-group">
                  <span>Role</span>
                	  <select className="form-control">
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-block">Submit</button>
                </div>
            </form>

            <div className='imgpanel'>
            </div>

        </section>

    </>
  )
}

export default Login