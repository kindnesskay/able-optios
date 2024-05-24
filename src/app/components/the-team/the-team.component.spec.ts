import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheteamComponent } from './the-team.component';

describe('TheteamComponent', () => {
  let component: TheteamComponent;
  let fixture: ComponentFixture<TheteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheteamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
