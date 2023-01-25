import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-empleado-caracteristicas',
  templateUrl: './empleado-caracteristicas.component.html',
  styleUrls: ['./empleado-caracteristicas.component.css']
})
export class EmpleadoCaracteristicasComponent {

  @Output() catacteristicasEmpleados= new EventEmitter<string>();
agregaCaracteristicas(value: string){
  this.catacteristicasEmpleados.emit(value)

}

}
