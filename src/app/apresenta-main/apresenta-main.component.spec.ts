import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentaMainComponent } from './apresenta-main.component';

describe('ApresentaMainComponent', () => {
  let component: ApresentaMainComponent;
  let fixture: ComponentFixture<ApresentaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApresentaMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApresentaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
