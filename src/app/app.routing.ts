import { Route } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [

    // Redirect empty path to '/login'
    {path: '', pathMatch : 'full', redirectTo: 'login'},

    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'place'},

    
    {
        path: '',
        children: [
            {path: 'login', loadChildren: () => import('../app/modules/login/login.module').then(m => m.LoginModule)},
        ]
    },
    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {path: 'place', loadChildren: () => import('../app/modules/place/place.module').then(m => m.PlaceModule)},
        ]
    },

];
