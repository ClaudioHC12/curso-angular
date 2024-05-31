import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { HermanoComponent } from '../hermano/hermano.component';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';

@Component({
  selector: 'app-hermano-grande',
  standalone: true,
  imports: [HermanoComponent, EstiloHermanosDirective],
  templateUrl: './hermano-grande.component.html',
  styleUrl: './hermano-grande.component.css'
})
export class HermanoGrandeComponent  implements OnInit {

  nombre?: string;
  constructor(private _servcioFamiliar: ServicioFamiliarService) {}
  ngOnInit(): void {
    this._servcioFamiliar.setHermanoGrande = 'luis';
    this.nombre = this._servcioFamiliar.getHermanoGrande;
  }

  saludar(){
    this._servcioFamiliar.saludar(this._servcioFamiliar.getHermanoGrande || '.I.');
  }
  preguntar(){
    console.log(this._servcioFamiliar.preguntarPorHijo());
  }
}
