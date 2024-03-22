import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemenuComponent } from './onemenu.component';

describe('OnemenuComponent', () => {
  let component: OnemenuComponent;
  let fixture: ComponentFixture<OnemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnemenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
