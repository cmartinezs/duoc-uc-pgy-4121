import { Component } from '@angular/core';
import { Boleta } from '../models/boleta';
import { BoletaService } from '../services/boleta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre!: string;
  apellido!: string;
  edad!: number;
  pelicula!: string;
  tipoEntrada!: string;
  cantidad!: number;
  precioEntrada!: number;
  descuento!: number;
  total!: number;
  boleta!: Boleta;

  constructor(
    private boletaService: BoletaService
  ) {}

  procesar(){
    console.log("Procesando compra...")
    console.log(`nombre: ${this.nombre}`)
    console.log(`apellido: ${this.apellido}`)
    console.log(`edad: ${this.edad}`)
    console.log(`pelicula: ${this.pelicula}`)
    console.log(`tipoEntrada: ${this.tipoEntrada}`)
    console.log(`cantidad: ${this.cantidad}`)

    this.boleta = this.boletaService.generarBoleta(this.tipoEntrada, this.edad, this.cantidad);
  }

}
