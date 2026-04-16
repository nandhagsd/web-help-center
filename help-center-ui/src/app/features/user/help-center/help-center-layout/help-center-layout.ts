import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { AppSvgIconComponent } from '@vallift/ngl';
import { Assets } from '@core/generated/assets';

@Component({
  selector: 'app-help-center-layout',
  imports: [RouterLink, RouterOutlet, AppSvgIconComponent],
  templateUrl: './help-center-layout.html',
  styleUrl: './help-center-layout.css',
})
export class HelpCenterLayout {
  protected readonly Assets = Assets;
}

