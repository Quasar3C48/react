import React from 'react'
import { Link } from "react-router-dom";
// import '../../styles/register.css'

function Auth(){
    return (
        <>
            <Link to={"/auth"}><p>есть акаунт? <a>Вход</a></p></Link>
        </>
    )
}

export default Auth