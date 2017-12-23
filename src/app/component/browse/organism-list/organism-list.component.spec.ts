import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismListComponent } from './organism-list.component';

describe('OrganismListComponent', () => {
  let component: OrganismListComponent;
  let fixture: ComponentFixture<OrganismListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
