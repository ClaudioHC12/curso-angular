import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioFamiliarService {
  hermanoGrande?: string;
  hermanoPequeno?: string;

  get getHermanoGrande(){
    return this.hermanoGrande || '';
  }
  getHermanoPequeno(){
    return this.hermanoPequeno || '';
  }
  set setHermanoGrande(hermanoGrande:string){
    this.hermanoGrande = hermanoGrande;
  }
  setHermanoPequeno(hermanoPequeno:string){
    this.hermanoPequeno = hermanoPequeno;
  }

  saludar(hermano: string) {
    console.log(`hola ${hermano}`);
  }
  preguntarPorHijo(): string {
    return '¿Como esta tu hijo?';
  }
  constructor() {}
}