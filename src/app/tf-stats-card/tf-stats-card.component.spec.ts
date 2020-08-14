import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TfStatsCardComponent } from './tf-stats-card.component';

describe('TfStatsCardComponent', () => {
  let component: TfStatsCardComponent;
  let fixture: ComponentFixture<TfStatsCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfStatsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
