import { Component } from '@angular/core';
import { PresidenteService } from '../../services/presidente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-presidente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './presidente.component.html',
  styleUrl: './presidente.component.scss'
})
export class PresidenteComponent {
  presidente = {
    cedula: '',
    nombre: '',
    direccion: '',
    telefono: '',
    vicepresidente: { cedula: '', nombre: '', direccion: '', telefono: '' }
  };

  constructor(private presidenteService: PresidenteService) {}

  insertarPresidente() {
    this.presidenteService.insertarPresidente({
      ...this.presidente,
      vicepresidentes: [this.presidente.vicepresidente] 
    }).subscribe();
  }
}
