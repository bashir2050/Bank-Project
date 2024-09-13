import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindClientsPage } from './find-clients.page';

describe('FindClientsPage', () => {
  let component: FindClientsPage;
  let fixture: ComponentFixture<FindClientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindClientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
