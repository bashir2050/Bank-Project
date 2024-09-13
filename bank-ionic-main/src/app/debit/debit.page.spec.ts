import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebitPage } from './debit.page';

describe('DebitPage', () => {
  let component: DebitPage;
  let fixture: ComponentFixture<DebitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
