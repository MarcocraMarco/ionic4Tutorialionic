import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupCallPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    router=TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should go to home on create new pickup call', () => {
    spyOn(router,'navigate');
    component.newPickUpCall();
    expect(router.navigate).toHaveBeenCalledWith(['home'])
  });
});
