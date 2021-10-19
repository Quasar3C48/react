import Header from "../components/header/header";
import H2__name from "../components/line__name/h2__name";
import Posts from "../components/posts/posts";

function Lenta(){

    return (
        <>
        
        <Header/>
        <H2__name text={"Лента новостей"}/>
        <Posts/>

        </>
    )
}

export default Lenta;