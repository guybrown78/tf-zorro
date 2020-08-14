import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfCourseActionComponent } from './tf-course-action.component';

describe('TfCourseActionComponent', () => {
  let component: TfCourseActionComponent;
  let fixture: ComponentFixture<TfCourseActionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfCourseActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfCourseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
