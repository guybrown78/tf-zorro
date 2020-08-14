import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfSliderComponent } from './tf-slider.component';

describe('TfSliderComponent', () => {
  let component: TfSliderComponent;
  let fixture: ComponentFixture<TfSliderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
