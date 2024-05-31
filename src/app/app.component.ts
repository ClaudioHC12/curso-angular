import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HermanoGrandeComponent } from './hermano-grande/hermano-grande.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PadreComponent, HermanoGrandeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';

  propiedad?:string;
  metodo1():void{
    let a:string;
  }
  
  
}
function name() {
  
}