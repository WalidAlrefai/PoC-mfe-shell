import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shell-home',
  standalone: true,
  imports: [],
  templateUrl: './shell-home.component.html',
  styleUrl: './shell-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellHomeComponent { }
