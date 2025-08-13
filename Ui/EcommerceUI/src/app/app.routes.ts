import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Register } from './components/register/register';
import { User } from './components/user/user';
import { Login } from './components/login/login';
import { Edit } from './components/edit/edit';
import { Delete } from './components/delete/delete';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:Home
        
    },
    {
        path:'home/edit/:id',
        component:Edit
    },
    {
        path:'home/delete/:id',
        component:Delete
    },
    {
        path:'login',
        component:Login

    },
    {
        path:'register',
        component:Register
    },
    {
        path:'userData',
        component:User
    }
];
