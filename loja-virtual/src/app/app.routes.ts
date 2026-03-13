import { Routes } from '@angular/router';
import { LayoutPublico } from './layouts/layout-publico/layout-publico';
import { Home } from './pages/home/home';
import { LayoutAdmin } from './layouts/layout-admin/layout-admin';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { AdminClientes } from './pages/admin-clientes/admin-clientes';
import { Produtos } from './pages/produtos/produtos';
import { ProdutoDetalhe } from './pages/produtos/produto-detalhe';

export const routes: Routes = [
  // Área pública (usa o layout público)
  {
	path: '',
	component: LayoutPublico,
	children: [
	  { path: '', redirectTo: 'home', pathMatch: 'full' },
	  { path: 'home', component: Home },
	{ path: 'produtos', component: Produtos },
	{ path: 'produtos/:id', component: ProdutoDetalhe },

	],
  },
  // Área admin (usa o layout admin)
  {
	path: 'admin',
	component: LayoutAdmin,
	children: [
	  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	  { path: 'dashboard', component: AdminDashboard },
	  { path: 'clientes', component: AdminClientes },
	],
  },
  // 404
  { path: '**', redirectTo: 'home' },
];
