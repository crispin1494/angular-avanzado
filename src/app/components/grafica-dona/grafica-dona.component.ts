import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent {
  @Input() labels: Label[] = [];
  @Input() data: MultiDataSet = []
  @Input() title: string = '';

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ]

}
