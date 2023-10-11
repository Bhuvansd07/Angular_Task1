import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtextComponent } from './subtext.component';

describe('SubtextComponent', () => {
  let component: SubtextComponent;
  let fixture: ComponentFixture<SubtextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtextComponent]
    });
    fixture = TestBed.createComponent(SubtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
