import { Component } from '@angular/core';
import { ContentThreeComponent } from '../components/home/content-three/content-three.component';
import { OurValuesComponent } from '../components/our-values/our-values.component';
import { OurMissionComponent } from '../components/our-mission/our-mission.component';
import { SliderComponent } from '../components/slider/slider.component';
import { TheteamComponent } from '../components/the-team/the-team.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    OurMissionComponent,
    OurValuesComponent,
    ContentThreeComponent,
    SliderComponent,
    TheteamComponent,
    WelcomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
