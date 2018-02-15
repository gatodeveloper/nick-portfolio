import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentSharedComponent } from './example-component-shared.component';

describe('ExampleComponentSharedComponent', () => {
  let component: ExampleComponentSharedComponent;
  let fixture: ComponentFixture<ExampleComponentSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponentSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponentSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
