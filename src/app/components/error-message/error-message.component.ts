import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent  implements OnInit {

@Input() message!:string ; //this arrives from the login.page.html 
@Input() field!:FormGroup ; //this arrives from the login.page.html 
@Input() error!:string ;  //this arrives from the login.page.html 



  constructor() { }

  ngOnInit() {}

  shouldShowComponent(){
    if(this.field?.touched && this.field!.errors?.[this.error]){ // is field touched? are 
      return true;
    }
    return false;
  }

}
