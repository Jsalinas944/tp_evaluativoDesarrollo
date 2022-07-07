import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

import { InicioComponent } from "./inicio/inicio.component";
import { ProductosComponent } from "./productos/productos.component";
import { ServiciosComponent } from "./servicios/servicios.component";

@NgModule({
    declarations:[
        InicioComponent,
        ProductosComponent,
        ServiciosComponent
    ],
    imports:[
        CommonModule,
        MatCardModule,
        MatGridListModule
        
        
    ],
    exports:[
        InicioComponent,
        ProductosComponent,
        ServiciosComponent
    ]
})

export class ComponentesModule{}