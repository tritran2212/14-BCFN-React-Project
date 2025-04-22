import { createBrowserRouter} from 'react-router'

import { Home } from '../pages/home'
import { Login } from '../pages/login'
import { Signup } from '../pages/signup'
export const router = createBrowserRouter([
    {
        path :"",
        Component :Home,
        
    },
    {
        path:"login",
        Component:Login,
    },
    {
        path:"sign-up",
        Component:Signup,
    }
])