import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmpleadoCaracteristicasComponent } from './empleado-caracteristicas/empleado-caracteristicas.component';
import { ServicioEmpleado } from './servicio';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmpleadoCaracteristicasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule
  ],
  providers: [ServicioEmpleado],
  bootstrap: [AppComponent]
})
export class AppModule { }
