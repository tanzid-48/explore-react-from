import React, { useRef } from 'react';

const UncontrolledFiled = () => {

    const emailRef = useRef('');
    const passwordRrf = useRef('');

    const handleSubmit = e =>{
        e.preventDefault ();
        console.log(emailRef.current.value)
        console.log(passwordRrf.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input  ref={emailRef} type="email" name="email" id="" placeholder='email'/>
                <br />
                <input  ref={passwordRrf} type="password" name="password" id="" placeholder='password'  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledFiled;