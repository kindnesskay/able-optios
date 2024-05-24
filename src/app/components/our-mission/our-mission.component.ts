import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-mission',
  standalone: true,
  imports: [],
  templateUrl: './our-mission.component.html',
  styleUrl: './our-mission.component.css'
})
export class OurMissionComponent {
  @Input() image!: string;
  @Input() className!: string;

}
