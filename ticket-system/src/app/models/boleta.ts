export class Boleta {
    precioEntrada: number;
    descuento: number;
    cantidad: number;

    constructor(pe: number, d: number, c: number) {
        this.precioEntrada = pe;
        this.descuento = d;
        this.cantidad = c;
    }

    calcularTotal() {
        return (this.precioEntrada - this.descuento) * this.cantidad;
    }
}