import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnestudComponent } from './onestud.component';

describe('OnestudComponent', () => {
  let component: OnestudComponent;
  let fixture: ComponentFixture<OnestudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnestudComponent]
    });
    fixture = TestBed.createComponent(OnestudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
