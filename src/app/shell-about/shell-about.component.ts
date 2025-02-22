import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shell-about',
  standalone: true,
  imports: [],
  templateUrl: './shell-about.component.html',
  styleUrl: './shell-about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellAboutComponent { }
