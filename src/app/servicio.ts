import { Empleado } from "./app.empleado";

export class ServicioEmpleado{
    empleados: Empleado[] = [
        new Empleado('Lucas', 'Alegre', 'Gefe', 100000),
        new Empleado('Aye', 'Vega', 'Presidenta', 80000),
        new Empleado('Emilio', 'Olivieri', 'Administrador', 70000),
      ];
agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado)
}

}