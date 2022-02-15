import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsiListComponent } from './vsi-list.component';

describe('VsiListComponent', () => {
  let component: VsiListComponent;
  let fixture: ComponentFixture<VsiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
