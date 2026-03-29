import clsx from 'clsx';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useNavigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Auth/Auth3"
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { Home } from '../../pages';
import styles from '../../pages/index.module.css';


const Unauthorized = () => {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {"Uh oh... Not logged in."}
                </Heading>
                <p className="hero__subtitle">{"Cherrytopframework Org Docs"}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/">
                        Authenticate 🗝️
                    </Link>
                </div>
            </div>
        </header>
    )
}

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = false;
    useEffect(() => {
        console.log("the location has changed: ", window.location)

    }, [window.location]);
    if (!isAuthenticated) navigate("/auth");
    return children;
}

const appRoutes = [
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: "/auth",
        element: (<Unauthorized />),
    }
];

function AppRouter() {
    return (
        <AuthProvider extra={Unauthorized}>
            <RouterProvider router={createBrowserRouter(appRoutes)} />
        </AuthProvider>
    );
};

export default AppRouter;
