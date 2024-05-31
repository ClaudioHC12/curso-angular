import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() recibeHijo:string = '';

  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  mensaje:string = '';

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
    this.mensaje = '';
  }
}
