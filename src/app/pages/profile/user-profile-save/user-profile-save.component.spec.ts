import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSaveComponent } from './user-profile-save.component';

describe('UserProfileSaveComponent', () => {
  let component: UserProfileSaveComponent;
  let fixture: ComponentFixture<UserProfileSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
