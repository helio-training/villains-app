import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainUpdatePageComponent } from './villain-update-page.component';

describe('VillainUpdatePageComponent', () => {
  let component: VillainUpdatePageComponent;
  let fixture: ComponentFixture<VillainUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
