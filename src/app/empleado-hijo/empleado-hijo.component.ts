import { Component, Input } from '@angular/core';
import { Empleado } from '../app.empleado';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
@Input() empleadoLista:Empleado;

arrayCaracteristicas=[''];
agregarCARACT(newItem: string){
this.arrayCaracteristicas.push(newItem)
}
}
