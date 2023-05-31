import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Ignacio';
  public genero : "male" | "female" = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient():void {
    this.name = 'Melisa';
    this.genero = 'female';
  }

  // i18nPlural
  public clients: string[] = ['uno','dos','tres','cuatro','cinco'];
  public clientsMap = {
    '=0': 'no hay ningun cliente esperando.',
    '=1': 'hay un cliente esperando.',
    '=2': 'hay 2 personas esperando.',
    'other': 'hay # clientes esperando.',
  }
  public borrarClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Ignacio',
    age: 36,
    address: 'mi casa'
  };

  // Async Pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve ('Tenemos datos en la promesa.');
      console.log('Tenemos datos en la promesa.');
  }, 3500);
  })

}
