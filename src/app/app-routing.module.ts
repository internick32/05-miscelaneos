import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { UsuarioComponent } from './componets/usuario/usuario.component';
import { USUARIO_ROUTES } from './componets/usuario/usuario.routes';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { 
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  { path:'**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
