import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './modules/home/home-component/home-component.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './modules/login/login.component';
import { ClientesComponent } from './modules/clientes/clientes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }, // Rota padrão/redirecionamento
  {
    path: 'home',
    component: HomeComponentComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent }, // Rota para a página "login"
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
