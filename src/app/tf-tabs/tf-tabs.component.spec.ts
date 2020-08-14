import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfTabsComponent } from './tf-tabs.component';

describe('TfTabsComponent', () => {
  let component: TfTabsComponent;
  let fixture: ComponentFixture<TfTabsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
