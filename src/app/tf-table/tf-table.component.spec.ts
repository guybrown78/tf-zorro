import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfTableComponent } from './tf-table.component';

describe('TfTableComponent', () => {
  let component: TfTableComponent;
  let fixture: ComponentFixture<TfTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
