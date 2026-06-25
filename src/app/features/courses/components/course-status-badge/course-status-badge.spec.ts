import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStatusBadge } from './course-status-badge';

describe('CourseStatusBadge', () => {
  let component: CourseStatusBadge;
  let fixture: ComponentFixture<CourseStatusBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseStatusBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseStatusBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
