import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Main',
          url: '/',
        },
        {
          titulo: 'Progressbar',
          url: 'progress'
        },
        {
          titulo: 'Graficas',
          url: 'grafica1'
        },
        {
          titulo: 'Promesas',
          url: 'promesas'
        },
        {
          titulo: 'rxjs',
          url: 'rxjs'
        }
      ]
    }
  ];
  constructor() { }
}
