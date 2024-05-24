import { Component } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';
import { ServiceCardComponent } from '../components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ImageSideComponent,ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
