import { Routes } from '@angular/router';

// Importação dos componentes para as rotas
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Notfound } from './notfound/notfound';
import { Usuario } from './usuario/usuario';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: Home},
    {path: 'sobre', component: Sobre},
    {path: 'usuario/:id', component: Usuario},
    { path: '**', component: Notfound },
];
