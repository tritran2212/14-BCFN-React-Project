import { createBrowserRouter } from 'react-router'

import { Home } from '../pages/home'
// import { Login } from '../pages/login'
// import { Signup } from '../pages/signup'

import { Component, lazy } from 'react';

import { BaseTemplate } from '../template_s/base_/base.template';
// khi  bấm mới tải trang , còn không chưa tải trang
const  Login = lazy(()=>import('../pages/login'))
const  Signup =lazy (()=>import('../pages/signup'))
const  CardDetail =lazy (()=>import('../pages/card-detail'))
const  ChangePassword = lazy(()=>import('../pages/change-password'))
export const router = createBrowserRouter([

    {

        element:<BaseTemplate />,
        children:[

            {
                path :"",
               Component:Home
            },
            {
                //:id dynamic segment 
                path :"/card-detail/:id",
               element :<CardDetail/>
            },
            {
                path :"/change-password",
               Component:ChangePassword
            }

            
        ],
    },
    {
        path:"login",
       element:<Login />,
     
    },
    {
        path:"sign-up",
         element:<Signup />,
    
    }
])