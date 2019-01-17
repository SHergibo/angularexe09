import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrackComponent } from './info-track.component';

describe('InfoTrackComponent', () => {
  let component: InfoTrackComponent;
  let fixture: ComponentFixture<InfoTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
