import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  labelsDonaUno: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  dataDonaUno: any[] = [350, 450, 100];

  labelsDonaDos: string[] = ['Descargar Ventas', 'Ventas en Store', 'Ventas Order'];
  dataDonaDos: any[] = [100, 100, 800];
}
