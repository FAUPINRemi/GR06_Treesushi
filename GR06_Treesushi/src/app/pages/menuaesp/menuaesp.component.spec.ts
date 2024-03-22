import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuaespComponent } from './menuaesp.component';

describe('MenuaespComponent', () => {
  let component: MenuaespComponent;
  let fixture: ComponentFixture<MenuaespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuaespComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuaespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
