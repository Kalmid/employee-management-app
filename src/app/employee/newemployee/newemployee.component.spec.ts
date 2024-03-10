import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeeComponent } from './newemployee.component';

describe('NewemployeeComponent', () => {
  let component: NewemployeeComponent;
  let fixture: ComponentFixture<NewemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewemployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
