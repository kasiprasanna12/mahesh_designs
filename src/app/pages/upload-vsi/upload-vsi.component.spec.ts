import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVsiComponent } from './upload-vsi.component';

describe('UploadVsiComponent', () => {
  let component: UploadVsiComponent;
  let fixture: ComponentFixture<UploadVsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadVsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadVsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
