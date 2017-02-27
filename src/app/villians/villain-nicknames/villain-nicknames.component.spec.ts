import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainNicknamesComponent } from './villain-nicknames.component';

describe('VillainNicknamesComponent', () => {
  let component: VillainNicknamesComponent;
  let fixture: ComponentFixture<VillainNicknamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainNicknamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainNicknamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
