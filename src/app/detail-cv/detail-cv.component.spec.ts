import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCvComponent } from './detail-cv.component';

describe('DetailCvComponent', () => {
  let component: DetailCvComponent;
  let fixture: ComponentFixture<DetailCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
