import { Component, OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent{
  contador: number = 0;
  mensajePadre: string = 'Mensaje desde padre';
  recibePadre: string = '';

  recibirMensaje($event: string) {
    this.recibePadre = $event;
  }

  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
}
