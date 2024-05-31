import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { MiPipePersonalizadoPipe } from '../mi-pipe-personalizado.pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [MiPipePersonalizadoPipe, UpperCasePipe],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css',
})
export class HermanoComponent implements OnInit {

  nombre?: string;
  private _servcioFamiliar2 = inject(ServicioFamiliarService);

  constructor(private _servcioFamiliar: ServicioFamiliarService) { }
  ngOnInit(): void {
    this._servcioFamiliar.setHermanoPequeno('jose');
    this.nombre = this._servcioFamiliar.getHermanoPequeno();
  }
  saludar() {
    this._servcioFamiliar.saludar(this._servcioFamiliar.getHermanoPequeno() || '.I.');
  }
  preguntar() {
    console.log(this._servcioFamiliar.preguntarPorHijo());
  }
}
