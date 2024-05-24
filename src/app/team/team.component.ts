import { Component } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ImageSideComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
