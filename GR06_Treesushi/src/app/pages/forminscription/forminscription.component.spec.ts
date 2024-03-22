import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminscriptionComponent } from './forminscription.component';

describe('ForminscriptionComponent', () => {
  let component: ForminscriptionComponent;
  let fixture: ComponentFixture<ForminscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForminscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForminscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
