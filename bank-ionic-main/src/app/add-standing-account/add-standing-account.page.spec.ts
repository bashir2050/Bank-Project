import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStandingAccountPage } from './add-standing-account.page';

describe('AddStandingAccountPage', () => {
  let component: AddStandingAccountPage;
  let fixture: ComponentFixture<AddStandingAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStandingAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStandingAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
