import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
/*this file descrivbes the tests to be escuted on this page*/
describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router:Router;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router=TestBed.get(Router);
  });
  it('should go to login page after load', fakeAsync(() => { //using fake async due to the timeOut added on loader.page 
    spyOn(router,'navigate');
    component.ngOnInit();
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login'])
  }));
});
