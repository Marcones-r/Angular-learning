import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitSelectorComponent } from './fruit-selector.component';

describe('FruitSelectorComponent', () => {
  let component: FruitSelectorComponent;
  let fixture: ComponentFixture<FruitSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
