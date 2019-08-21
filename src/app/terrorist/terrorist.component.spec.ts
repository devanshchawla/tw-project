import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerroristComponent } from './terrorist.component';

describe('TerroristComponent', () => {
  let component: TerroristComponent;
  let fixture: ComponentFixture<TerroristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerroristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerroristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
