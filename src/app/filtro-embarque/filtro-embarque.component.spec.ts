import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEmbarqueComponent } from './filtro-embarque.component';

describe('FiltroEmbarqueComponent', () => {
  let component: FiltroEmbarqueComponent;
  let fixture: ComponentFixture<FiltroEmbarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroEmbarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroEmbarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
