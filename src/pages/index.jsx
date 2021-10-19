import Header from "../components/header/header";
import Info from "../components/info/info";
import LineName from "../components/line__name/line__name";
import My_posts from "../components/posts/my__posts";

function Index(){

    return (
        <>
        
        <Header/>
        <Info/>
        <LineName text={"Мои посты"}/>
        <My_posts/>

        </>
    )
}

export default Index;