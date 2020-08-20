import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo: boolean): unknown {
    let iter = value.length;
    let retorno = '';

    if(activo){
      for(let i = 0; i < iter; i++){
        retorno += '*';
      }
    }else{
      retorno = value;
    }

    console.log(retorno);
    return retorno;
  }

}
