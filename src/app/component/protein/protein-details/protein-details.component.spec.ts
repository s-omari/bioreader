import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinDetailsComponent } from './protein-details.component';

describe('ProteinDetailsComponent', () => {
  let component: ProteinDetailsComponent;
  let fixture: ComponentFixture<ProteinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
