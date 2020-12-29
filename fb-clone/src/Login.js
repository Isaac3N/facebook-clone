import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    const [state, dispatch]= useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })


            console.log(result.user);
        }).catch(error => alert(error.message))

    };
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/600px-Facebook_Logo_(2019).png" alt =""/>

                <img
                    src="https://tse3.mm.bing.net/th?id=OIP.ke9jghYUklLHgagXu98khAHaBc&pid=Api&P=0&w=508&h=99" width= '200px' alt=""/>
            </div>
            <Button type="submit" onClick ={signIn}>Sign In </Button>

        </div>
    )
}

export default Login
