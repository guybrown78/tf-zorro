import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfFormComponent } from './tf-form.component';

describe('TfFormComponent', () => {
  let component: TfFormComponent;
  let fixture: ComponentFixture<TfFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
