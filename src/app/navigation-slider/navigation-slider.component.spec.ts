import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSliderComponent } from './navigation-slider.component';

describe('NavigationSliderComponent', () => {
  let component: NavigationSliderComponent;
  let fixture: ComponentFixture<NavigationSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
