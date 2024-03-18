import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementInscriptionComponent } from './traitement-inscription.component';

describe('TraitementInscriptionComponent', () => {
  let component: TraitementInscriptionComponent;
  let fixture: ComponentFixture<TraitementInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraitementInscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
