import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewExampleComponent } from './home-view-example.component';

describe('HomeViewExampleComponent', () => {
  let component: HomeViewExampleComponent;
  let fixture: ComponentFixture<HomeViewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
