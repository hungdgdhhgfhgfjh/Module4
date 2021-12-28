import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenUpdateComponent } from './studen-update.component';

describe('StudenUpdateComponent', () => {
  let component: StudenUpdateComponent;
  let fixture: ComponentFixture<StudenUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
