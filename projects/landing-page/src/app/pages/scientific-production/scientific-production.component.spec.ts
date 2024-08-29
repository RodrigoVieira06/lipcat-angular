import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificProductionComponent } from './scientific-production.component';

describe('ScientificProductionComponent', () => {
  let component: ScientificProductionComponent;
  let fixture: ComponentFixture<ScientificProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScientificProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientificProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
