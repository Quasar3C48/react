import React from 'react'
import '../styles/register.css'
import logo from '../images/Instagram_logo.png'
import { Link } from "react-router-dom";
import Input from '../components/register-auth/input';
import Link_to from '../components/register-auth/link_to';

function Auth(){
    return (
        <>
            <div className={"register"}>
                <div className="box">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="form">
                        <Input type='text' text='Name'/>
                        <Input type='text' text='Surname'/>
                        <Link to={"/"}><div className={'pages__button'}>Авторизироваться</div></Link>
                        <Link_to link='/register' text='Есть аккаунт? Вход'/>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Auth;