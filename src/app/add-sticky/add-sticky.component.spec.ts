import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStickyComponent } from './add-sticky.component';

describe('AddStickyComponent', () => {
  let component: AddStickyComponent;
  let fixture: ComponentFixture<AddStickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
