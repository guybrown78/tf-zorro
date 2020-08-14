import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfListComponent } from './tf-list.component';

describe('TfListComponent', () => {
  let component: TfListComponent;
  let fixture: ComponentFixture<TfListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
