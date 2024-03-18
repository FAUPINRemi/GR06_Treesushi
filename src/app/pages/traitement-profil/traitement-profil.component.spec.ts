import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementProfilComponent } from './traitement-profil.component';

describe('TraitementProfilComponent', () => {
  let component: TraitementProfilComponent;
  let fixture: ComponentFixture<TraitementProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraitementProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitementProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
