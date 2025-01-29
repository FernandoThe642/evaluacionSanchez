import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'components/presidente',
        pathMatch: 'full' //Coincidir ruta vacia
    },
    {
        path: 'components/usuario',
        component: PresidenteComponent
    }
];
