import {routes} from "../utils";
import {Route, Routes} from "react-router-dom";
import {useStore} from "effector-react";
import {AuthStore} from "../stores";
import {StartWrapper} from "../layots";
import {MainHeader} from "../components";
import {useEffect} from "react";



const AppRoutes = () => {
    // Получение начального значение аутенфикации [false]
    const status = useStore(AuthStore.$authStatus);

    useEffect(() => {
        AuthStore.getCompanyDataFx()
    }, []);

    

    return (
        <main className="flex min-h-screen min-w-full relative bg-mainBg">
            {status
                ?
                <StartWrapper>
                    <MainHeader/>
                    <Routes>
                        {routes.authRoutes.map((route, index) =>
                            <Route path={route.path} element={route.element} key={`auth-route-${index+1}`}/>)
                        }
                        <Route
                            path={routes.authException.path}
                            element={routes.authException.element}
                        />
                    </Routes>
                </StartWrapper>
                :
                <Routes>
                    {routes.publicRoutes.map((route, index) =>
                        <Route path={route.path} element={route.element} key={`pub-route-${index+1}`}/>)
                    }
                    <Route
                        path={routes.publicException.path}
                        element={routes.publicException.element}
                    />
                </Routes>
            }
        </main>
    );
};

export {AppRoutes};