import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'inbuilt-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.css'
})
export class InbuiltPipesComponent {

  title = 'Angular Pipes Example';
  today = new Date();
  price = 12345.6789;
  percentValue = 0.856;
  jsonData = { name: 'Ravi', role: 'Trainer', topics: ['Angular', '.NET', 'Cloud'] };
  message = 'welcome to angular pipes demo';

}
