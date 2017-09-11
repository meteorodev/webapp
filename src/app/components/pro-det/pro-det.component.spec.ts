import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDetComponent } from './pro-det.component';

describe('ProDetComponent', () => {
  let component: ProDetComponent;
  let fixture: ComponentFixture<ProDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
