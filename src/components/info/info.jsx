import { Link } from "react-router-dom";

function Info(){

    return (
        <>
            <div className={"info__photo"}>$Фото$</div>
            <div className={"info__flex"}>
                <div className={"info__name"}>$Имя$</div>
                <div className={"info__surname"}>$Фамилия$</div>
            </div>
            <div className={"info__flex"}>
                <div className={"info__name"}>$Почта@mail.ru$</div>
            </div>
            <div className={"info__flex"}>
            <Link to={"/edit"}><img src="https://img.icons8.com/ios/40/000000/edit-administrator.png"/></Link>
            </div>
        </>
    )
}

export default Info;