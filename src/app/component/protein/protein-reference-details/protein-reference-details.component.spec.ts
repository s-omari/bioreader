import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinReferenceDetailsComponent } from './protein-reference-details.component';

describe('ProteinReferenceDetailsComponent', () => {
  let component: ProteinReferenceDetailsComponent;
  let fixture: ComponentFixture<ProteinReferenceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinReferenceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinReferenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
