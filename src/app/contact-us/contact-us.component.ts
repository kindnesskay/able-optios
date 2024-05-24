import { Component } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ImageSideComponent,ContactFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
