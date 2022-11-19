import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrainigComponent } from './past-trainig.component';

describe('PastTrainigComponent', () => {
  let component: PastTrainigComponent;
  let fixture: ComponentFixture<PastTrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastTrainigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastTrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
