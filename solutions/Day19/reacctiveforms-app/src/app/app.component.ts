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
  title = 'chart-app';
}



//SDLC Phases:
//Solution Provider

//1.Requirement Gathering (Business Analysis)
//2.Analysis (Feasibility Study, Requirement Analysis)
//3.Design (System Design, Architecture Design)
//          monolithic, microservices, serverless
// frontend: angular, react, vue
// backend: nodejs, java springboot, python django, go
// database:   RDBMS: SQLServer, MySQL ,
//             nosql : MongoDB, Cassandra

//4.Development/Coding (using Co-pilot, ChatGPT)
//            Clean Code Principles
//            Design Patterns
//            Code Reviews
//            Version Control (Git)
//            CI/CD (Jenkins, GitHub Actions)
//5.Testing:
// Angular Testing Strategies
//            Unit Testing (Jasmine, Mocha)
//            Test-Runners (Karma, Jest)
//
//            Static Code Analysis (SonarQube)
//            Code Coverage
//            Integration Testing
//            E2E Testing (Protractor, Cypress)
//            Cucumer BDD
//            Selenium for UI Testing
//            Playwright

//6.Deployment
//7.Maintenance


//unit Testing
//Units of Angular Application to test
//Components-----unit test using Jasmine, Karma
//Services-------unit test using Jasmine, Karma
//Pipes----------unit test using Jasmine, Karma
//Directives-----unit test using Jasmine, Karma
//Guards---------unit test using Jasmine, Karma
//interceptors---unit test using Jasmine, Karma
//Services
//Pipes
//Directives
//Guards
//interceptors

//End to End Testing
