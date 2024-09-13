import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSavingsAccountPage } from './add-savings-account.page';

describe('AddSavingsAccountPage', () => {
  let component: AddSavingsAccountPage;
  let fixture: ComponentFixture<AddSavingsAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSavingsAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSavingsAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
