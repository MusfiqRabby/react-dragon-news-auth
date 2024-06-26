import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        Element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;