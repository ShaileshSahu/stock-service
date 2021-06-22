import { useSelector } from "react-redux";
import AccountDetail from "./acount-details";
import Login from "./login/login.component";
import Signup from "./signup/signup.component";
import React, {useState} from 'react';
const Account = () => {
    const [isSigningUp, setIsSigningUp] = useState(false);
    const session = useSelector(state => state.session);
    console.log('there I am', session);
    if (!session) return  isSigningUp ? <Signup onChangeToLogin = {() => setIsSigningUp(false)}/> : <Login onChangeToSignup={()=> setIsSigningUp(true)} />
    return <AccountDetail />

}

export default Account;