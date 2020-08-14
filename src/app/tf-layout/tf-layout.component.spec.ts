import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfLayoutComponent } from './tf-layout.component';

describe('TfLayoutComponent', () => {
  let component: TfLayoutComponent;
  let fixture: ComponentFixture<TfLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
