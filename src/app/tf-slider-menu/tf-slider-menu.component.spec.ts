import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfSliderMenuComponent } from './tf-slider-menu.component';

describe('TfSliderMenuComponent', () => {
  let component: TfSliderMenuComponent;
  let fixture: ComponentFixture<TfSliderMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfSliderMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfSliderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
