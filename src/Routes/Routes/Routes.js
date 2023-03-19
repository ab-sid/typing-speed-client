import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import TypingTest from "../../Pages/TypingTest/TypingTest";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/skill',
                element: <TypingTest></TypingTest>
            }
        ]
    }
])
export default routes;