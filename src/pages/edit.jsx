import Header from "../components/header/header";
import { Link } from "react-router-dom";
import Input from '../components/register-auth/input';
import H2__name from "../components/line__name/h2__name";

function Edit(){

    return (
        <>
        <Header/>
        <H2__name text={"Редактировать профиль"}/> <br/>
        <div className="box">
            <div className="form">
                Фото: <Input type='file' text='$Имя$'/> <br/>
                Имя: <Input type='text' text='$Имя$'/>
                Фамилия: <Input type='text' text='$Фамилия$'/> <br/>
                Почта: <Input type='text' text='$Почта$'/> <br/>
                Пароль: <Input type='text' text='$Пароль$'/> <br/>
                <Link to={"#"}><div className={'pages__button'}>Сохранить изменения</div></Link>
            </div>
        </div>
        </>
    )
}

export default Edit;
