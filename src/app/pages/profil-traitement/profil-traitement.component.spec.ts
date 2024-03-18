import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTraitementComponent } from './profil-traitement.component';

describe('ProfilTraitementComponent', () => {
  let component: ProfilTraitementComponent;
  let fixture: ComponentFixture<ProfilTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilTraitementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
