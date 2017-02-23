import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainCreatePageComponent } from './villain-create-page.component';

describe('VillainCreatePageComponent', () => {
  let component: VillainCreatePageComponent;
  let fixture: ComponentFixture<VillainCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
