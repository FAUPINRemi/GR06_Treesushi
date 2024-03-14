import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementcommandeComponent } from './traitementcommande.component';

describe('TraitementcommandeComponent', () => {
  let component: TraitementcommandeComponent;
  let fixture: ComponentFixture<TraitementcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraitementcommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
