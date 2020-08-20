import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Capitana Susi";
  nombre2: string = "mIguEl AnGeL";
  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.1611;

  salario: number = 1234.5;

  fecha: Date = new Date();

  idioma: string = 'fr';

  activar: boolean = true;

  videoURL = 'https://www.youtube.com/embed/-RJSbO8UZVY';

  valorPromesa = new Promise<string>((resolve) =>{
    setTimeout(() =>{
      resolve('Llegó la Data');
    },4500);
  });

  
  setLanguageEs(){
    this.idioma = 'es';
  }


  setLanguageEn(){
    this.idioma = 'en';
  }

  setLanguageFr(){
    this.idioma = 'fr';
  }

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
