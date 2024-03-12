import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandmenuComponent } from './commandmenu.component';

describe('CommandmenuComponent', () => {
  let component: CommandmenuComponent;
  let fixture: ComponentFixture<CommandmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
