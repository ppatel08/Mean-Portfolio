import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetSaveComponent } from './skillset-save.component';

describe('SkillsetSaveComponent', () => {
  let component: SkillsetSaveComponent;
  let fixture: ComponentFixture<SkillsetSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsetSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
