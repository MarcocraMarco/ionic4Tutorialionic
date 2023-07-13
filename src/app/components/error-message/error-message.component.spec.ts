import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should show error message on field touche and error present', () => {
    component.field=new FormGroup({email :new FormControl()});
    component.field.markAsTouched(); //simulating that the field has been touched 
    component.field.setErrors({required:true}) //simulating that in the field there is an error
    component.error="required";
    expect(component.shouldShowComponent()).toBeTruthy();
  });
  it('should show error message on field touche and email error present', () => {
    component.field=new FormGroup({email :new FormControl()});
    component.field.markAsTouched(); //simulating that the field has been touched 
    component.field.setErrors({email:true}) //simulating that in the field there is an error
    component.error="email";
    expect(component.shouldShowComponent()).toBeTruthy();
  });*/ //these tests re redundant

  it('should show error message on field touche and error present', () => {
    component.field=new FormGroup({anyField :new FormControl()});
    component.field.markAsTouched(); //simulating that the field has been touched 
    component.field.setErrors({anyError:true}) //simulating that in the field there is an error
    component.error="anyError";
    expect(component.shouldShowComponent()).toBeTruthy();
  });
  it('should hide error message on field not touched', () => {
    component.field=new FormGroup({anyField :new FormControl()});
    
    component.field.setErrors({anyError:true}) //simulating that in the field there is an error
    component.error="anyError";
    expect(component.shouldShowComponent()).toBeFalsy();
  });
  it('should hide error message on field not touched, but no errors', () => {
    component.field=new FormGroup({anyField :new FormControl()});
    component.field.markAsTouched(); //simulating that the field has been touched 
    component.error="anyError";
    expect(component.shouldShowComponent()).toBeFalsy();
  });
  it('should hide error message on field not touched and has errors, but is different error', () => {
    component.field=new FormGroup({anyField :new FormControl()});
    component.field.markAsTouched(); //simulating that the field has been touched 
    component.field.setErrors({anyError:true})
    component.error="anotherError";
    expect(component.shouldShowComponent()).toBeFalsy();
  });
}); 
