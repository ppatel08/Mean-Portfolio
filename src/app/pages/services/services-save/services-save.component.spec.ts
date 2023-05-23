import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSaveComponent } from './services-save.component';

describe('ServicesSaveComponent', () => {
  let component: ServicesSaveComponent;
  let fixture: ComponentFixture<ServicesSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
