import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickupCallsPage } from './pickup-calls.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

describe('PickupCallsPage', () => {
  let component: PickupCallsPage;
  let fixture: ComponentFixture<PickupCallsPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupCallsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallsPage);
    component = fixture.componentInstance;
    router=TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should go to home on create new pickup call', () => {
    spyOn(router,'navigate');
    component.newPickUpCall();
    expect(router.navigate).toHaveBeenCalledWith(['home'])
  });});
