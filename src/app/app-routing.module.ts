import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"productos",component:ProductosComponent},
  {path:"servicios",component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
