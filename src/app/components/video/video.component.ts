import { Component, Input} from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent {
  @Input() height! :number
  @Input() width!:number;
  @Input() videoUrl!:string;

}
