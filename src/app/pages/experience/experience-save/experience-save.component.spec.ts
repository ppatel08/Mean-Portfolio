import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesSaveComponent } from './experience-save.component';

describe('ExperiencesSaveComponent', () => {
  let component: ExperiencesSaveComponent;
  let fixture: ComponentFixture<ExperiencesSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
