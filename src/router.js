import {
    BrowserRouter, //сам роутер
    Route, //путь до компонента может быть много, основной компонент в который я вставляю путь по которому нужно отобразить какой-либо компонент
    Switch, //контейнер для наших роутов
    useRouteMatch // хукй (хз зачем, но может будет нужен)
} from "react-router-dom";
import Index from './pages/index';
import auth from './pages/auth';
import register from "./pages/register";
import Edit from "./pages/edit";
import Lenta from "./pages/lenta";

function Router(){
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/auth" component={auth} />
                    <Route exact path="/register" component={register} />
                    <Route exact path="/edit" component={Edit} />
                    <Route exact path="/lenta" component={Lenta} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router;