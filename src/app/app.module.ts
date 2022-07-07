import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ComponentesModule } from './componentes/components.module';
import { MaterialModule } from './angular-material';

const materialComponents=[
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
  
]

@NgModule({
  declarations: [
    AppComponent,
    
    MenuprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ComponentesModule,
    MaterialModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
