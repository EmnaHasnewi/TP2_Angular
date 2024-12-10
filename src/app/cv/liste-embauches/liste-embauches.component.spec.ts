import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmbauchesComponent } from './liste-embauches.component';

describe('ListeEmbauchesComponent', () => {
  let component: ListeEmbauchesComponent;
  let fixture: ComponentFixture<ListeEmbauchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeEmbauchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmbauchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
