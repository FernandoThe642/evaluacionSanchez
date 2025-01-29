import { Routes } from '@angular/router';
import { PresidenteComponent } from './components/presidente/presidente.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'components/presidente',
        pathMatch: 'full' //Coincidir ruta vacia
    },
    {
        path: 'components/presidente',
        component: PresidenteComponent 
    }
];
