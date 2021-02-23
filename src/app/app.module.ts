import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './componets/ng-style/ng-style.component';
import { CssComponent } from './componets/css/css.component';
import { ClasesComponent } from './componets/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './componets/ng-switch/ng-switch.component';
import { HomeComponent } from './componets/home/home.component';
import { UsuarioComponent } from './componets/usuario/usuario.component';
import { UsuarioEditarComponent } from './componets/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './componets/usuario/usuario-detalle.component';
import { UsuarioNuevoComponent } from './componets/usuario/usuario-nuevo.component';

import { NavbarComponent } from './componets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    UsuarioNuevoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
