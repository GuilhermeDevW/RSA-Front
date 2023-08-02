import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './modules/home/home-component/home-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão/redirecionamento
  {
    path: 'home',
    component: HomeComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
