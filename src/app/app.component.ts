import { Component } from '@angular/core';
import { Empleado } from './app.empleado';
import { ServicioEmpleado } from './servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private servicio: ServicioEmpleado) {
    this.empleados=servicio.empleados;
  }
  title = 'Empleados-Directivas';
  unSalari: number = 0;
empleados:Empleado[]=[];
  agregarEmpleado(
    nombre: string,
    apellido: string,
    cargo: string,
    salario: number
  ) {
    let nuevoEmpleado = new Empleado(nombre, apellido, cargo, salario);
    this.servicio.agregarEmpleadoServicio(nuevoEmpleado);
  }
}
