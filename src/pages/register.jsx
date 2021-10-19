import React from 'react'
import '../styles/register.css'
import logo from '../images/Instagram_logo.png'
import Input from '../components/register-auth/input';
import { Link } from "react-router-dom";
import Link_to from '../components/register-auth/link_to';


function Register(){
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
                        <Input type='text' text='Password'/>
                        <Input type='text' text='Email'/>
                        <Link to={"/auth"}><div className={'pages__button'}>Зарегистрироваться</div></Link>
                        <Link_to link='/auth' text='Есть аккаунт? Вход'/>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Register;