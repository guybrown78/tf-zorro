import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfHeaderComponent } from './tf-header.component';

describe('TfHeaderComponent', () => {
  let component: TfHeaderComponent;
  let fixture: ComponentFixture<TfHeaderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
