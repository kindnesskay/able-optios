import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdisComponent } from './ndis.component';

describe('NdisComponent', () => {
  let component: NdisComponent;
  let fixture: ComponentFixture<NdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
