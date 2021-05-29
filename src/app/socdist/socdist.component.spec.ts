import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocdistComponent } from './socdist.component';

describe('SocdistComponent', () => {
  let component: SocdistComponent;
  let fixture: ComponentFixture<SocdistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocdistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
