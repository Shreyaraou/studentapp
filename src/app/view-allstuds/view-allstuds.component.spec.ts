import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllstudsComponent } from './view-allstuds.component';

describe('ViewAllstudsComponent', () => {
  let component: ViewAllstudsComponent;
  let fixture: ComponentFixture<ViewAllstudsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllstudsComponent]
    });
    fixture = TestBed.createComponent(ViewAllstudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
