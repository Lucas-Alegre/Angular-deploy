import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCaracteristicasComponent } from './empleado-caracteristicas.component';
import {MatCardModule} from '@angular/material/card';

describe('EmpleadoCaracteristicasComponent', () => {
  let component: EmpleadoCaracteristicasComponent;
  let fixture: ComponentFixture<EmpleadoCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoCaracteristicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
