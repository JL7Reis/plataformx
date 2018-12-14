import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmbarqueComponent } from './lista-embarque.component';

describe('ListaEmbarqueComponent', () => {
  let component: ListaEmbarqueComponent;
  let fixture: ComponentFixture<ListaEmbarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEmbarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmbarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
