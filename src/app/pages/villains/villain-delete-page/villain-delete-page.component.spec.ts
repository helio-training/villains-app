import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainDeletePageComponent } from './villain-delete-page.component';

describe('VillainDeletePageComponent', () => {
  let component: VillainDeletePageComponent;
  let fixture: ComponentFixture<VillainDeletePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainDeletePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
