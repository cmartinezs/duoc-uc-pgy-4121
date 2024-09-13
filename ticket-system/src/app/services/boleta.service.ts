import { Injectable } from '@angular/core';
import { Boleta } from '../models/boleta';

@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  constructor() { }

  generarBoleta(tipoEntrada: string, edad: number, cantidad: number) {
    let precioEntrada = 0

    if (tipoEntrada === '2D') {
      precioEntrada = 3000
    } else if (tipoEntrada === '3D') {
      precioEntrada = 6000
    } else if (tipoEntrada === '4DX') {
      precioEntrada = 9000
    }

    let descuento = 0

    if (edad < 18) {
      descuento = precioEntrada * 0.1;
    } else if (edad > 60) {
      descuento = precioEntrada * 0.2;
    }

    return new Boleta(precioEntrada, descuento, cantidad);
  }
}
