import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSideComponent } from './image-side.component';

describe('ImageSideComponent', () => {
  let component: ImageSideComponent;
  let fixture: ComponentFixture<ImageSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
