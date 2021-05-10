import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then(data => {
      console.log(data);
    });
    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('hola mundo');
    //   } else {
    //     reject('la promesa fallo');
    //   }
    // });

    // promesa.then((message) => {
    //   console.log('termina la promesa', message);

    // }).catch(error => {
    //   console.log('cago...', error);

    // })
    // console.log('fin del init');

  }

  getUsers = () => {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json()
          .then(body => resolve(body.data)
          )
        )
    });
  }

}
