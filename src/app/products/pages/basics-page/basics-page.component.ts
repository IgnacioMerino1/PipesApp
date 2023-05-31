import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = 'ignacio';
  public nameUpper: string = 'IGNACIO';
  public fullName: string = 'ignacio MERINO';

  public customDate: Date=new Date();
  
}
