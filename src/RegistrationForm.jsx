import React, { useState } from 'react'

const RegistrationForm = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleInputValues = (e)=>{
        const {name, value} = e.target;

        setUser((prev)=> ({...prev, [name]:value}));
    }

    const handleFormSubmit = (event)=>{
        alert("Form submit successfully");
        // event.preventDefault();
    }

    return (
        <>
            <section>
                <p>
                    My name is {user.firstName} {user.lastName}.
                    My email is {user.email}.
                    My Phone Number is {user.phone}
                </p>
            </section>
            <div className='container'>
                <h1>Registration Form Using React</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className='form-div'>
                        <label>First Name </label>
                        <input type='text' name='firstName' 
                            placeholder='Enter Your First Name'
                            value={user.firstName} required 
                            onChange={(e) => handleInputValues(e)}
                            />
                    </div>
                    <div className='form-div'>
                        <label>Last Name </label>
                        <input type='text' name='lastName' 
                            placeholder='Enter Your Last Name'
                            value={user.lastName} required 
                            onChange={(e) => handleInputValues(e)}
                            />
                    </div>
                    <div className='form-div'>
                        <label>Email </label>
                        <input type='email' name='email' 
                            placeholder='Enter Your Email'
                            value={user.email} required 
                            onChange={(e) => handleInputValues(e)}
                            />
                    </div>
                    <div className='form-div'>
                        <label>Password </label>
                        <input type='password' name='password' 
                            placeholder='Enter Your Password'
                            value={user.password} required 
                            onChange={(e) => handleInputValues(e)}
                            />
                    </div>
                    <div className='form-div'>
                        <label>Phone </label>
                        <input type='number' name='phone' 
                            placeholder='Enter Your Phone Number'
                            value={user.phone} required 
                            onChange={(e) => handleInputValues(e)}
                            />
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegistrationForm
