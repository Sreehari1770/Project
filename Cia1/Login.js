import React, { useState, useEffect } from 'react';
import ss from './Login.module.css' 
function DynamicForm() {
    const initValue={username:'',email:'',password:''};
    const[formValues,setFormValues]=useState(initValue);
    const[formErrors,setFormErrors]=useState({});
    const[isSubmit,setisSubmit]=useState(false);

    const handleChange=(event)=>{
        const {id,value}=event.target;
        setFormValues({...formValues,[id]:value})
        console.log(formValues);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setisSubmit(true);
    }
    const validate=(values)=>{
        const error={};
        const reg=new RegExp("[0-9]+")
        const preg=new RegExp("[A-Z][A-Za-z0-9$_]+")
        if(!values.username)
           error.username = "UserName is Required";
         else if(values.username.length<5)
           error.username ="UserName must be 5 letters";
         else if(reg.test(values.username))
              error.username = "Username must be in letters";
         if(!values.email)
           error.email="Email is Required";
         if(!values.password)
           error.password="Password is Required";
         // else if(values.password.length<8)
         //   error.password="Password must be 8 letters";
         else if(!preg.test(values.password))
           error.password="Incorrect Format";
         return error;
         
     }
    return ( 
        <>
        <center>
        <div className={ss.center}>
        <h1 className={ss.h1}>Dynamic Form</h1>
        <div className={ss.container}>
        <form className={ss.body} onChange={handleSubmit}>
        <div className='row'>
        <label className={ss.label}>Enter your username :</label>
        <input style={{border:"2px solid red"}} type="text" id="username" placeholder="your Username"
        value={formValues.username}
        onChange={handleChange}
        /> 
        </div>
        <p style={{color:'red'}}>{formErrors.username}</p>
        {/* <br/> */}
        <div className='row'>
        <label className={ss.label}>Enter your email :</label>
        <input style={{border:"2px solid red"}} type="email" id="email" placeholder="your Email"
        value={formValues.email}
        onChange={handleChange}
        /> 
        </div>
        <p style={{color:'red'}}>{formErrors.email}</p>
        {/* <br/> */}
        <div className='row'>
        <label className={ss.label}>Enter your password :</label>
        <input style={{border:"2px solid red"}} type="password" id="password" placeholder="your Password"
        value={formValues.password}
        onChange={handleChange}
        /> 
        </div>
        <p style={{color:'red'}}>{formErrors.password}</p>
        {/* <br/>
        <div className='row'>
                <button className='btn btn-primary'>Login</button>
            </div> */}
        </form>
        </div>
        </div>
        </center>
        </>
     );
}

export default DynamicForm;