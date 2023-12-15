import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderCompComponent } from './wonder-comp.component';

describe('WonderCompComponent', () => {
  let component: WonderCompComponent;
  let fixture: ComponentFixture<WonderCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WonderCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WonderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
