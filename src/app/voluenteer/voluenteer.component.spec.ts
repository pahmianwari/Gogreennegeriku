import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluenteerComponent } from './voluenteer.component';

describe('VoluenteerComponent', () => {
  let component: VoluenteerComponent;
  let fixture: ComponentFixture<VoluenteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluenteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluenteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
