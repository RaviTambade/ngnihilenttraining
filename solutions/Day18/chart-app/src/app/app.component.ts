import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { Customodule } from './custom/customodule';
import { ReactiveModule } from './reactive/reactive.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartsComponent,Customodule,ReactiveModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
