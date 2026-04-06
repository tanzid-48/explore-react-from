import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookFrom = () => {

    const [name, changedName] = useInputField('');
    const [email,changedEmail] = useInputField(''); 
    const [password,changedPassword] = useInputField('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit",name,email,password)
    }
 
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" defaultValue={name} onChange={changedName}  name='name' placeholder='Name' /><br />
                <input defaultValue={email} onChange={changedEmail} type="email" name="email" id="" placeholder='Email' /><br />
                <input defaultValue={password} onChange={changedPassword} type="password" name="password" id=""  placeholder='Password'/><br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default HookFrom;<form >
</form>