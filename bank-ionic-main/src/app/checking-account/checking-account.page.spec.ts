import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckingAccountPage } from './checking-account.page';

describe('CheckingAccountPage', () => {
  let component: CheckingAccountPage;
  let fixture: ComponentFixture<CheckingAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckingAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckingAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
