import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    router=TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should go to homePage in register', () => {
    spyOn(router,'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['home'])
  });
});
