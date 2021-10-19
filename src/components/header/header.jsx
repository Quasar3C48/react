import { Link } from "react-router-dom";

function Header(){

    return (
        <>
            <div className={"header"}>

                <Link to={"/lenta"}><img src="https://img.icons8.com/ios/30/000000/google-news.png"/></Link>
                <Link to={"/"}><img style={{margin: '0 5vw 0 5vw'}} src="https://img.icons8.com/ios/30/000000/name--v2.png" /></Link>
                <Link to={"/auth"}><img src="https://img.icons8.com/ios-glyphs/30/000000/exit.png"/></Link>
            
            </div>
        </>
    )
}

export default Header;