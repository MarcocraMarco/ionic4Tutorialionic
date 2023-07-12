import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router=TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should go on pick-up calls on see all', () => {
    spyOn(router,'navigate');
    component.goToPickUpCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls'])
  });
  it('should go new pick-up calls on create pickup-call', () => {
    spyOn(router,'navigate');
    component.newPickUpCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call'])
  });

});

