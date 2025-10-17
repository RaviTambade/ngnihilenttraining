import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component} from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Product } from './product';
import { ProductListComponent } from './product-list/product-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';

import { StyllingComponent } from './stylling/stylling.component';
import { CSSClassComponent } from './cssclass/cssclass.component';
import { CatalogModule } from './catalog/catalog-module';
import { List } from './catalog/list/list';
@Component({
  selector: 'app-root',
  standalone: true,
  /*imports:[CurrencyPipe,CounterComponent,ProductDetailsComponent,
           ProductListComponent,SignInComponent,RegisterComponent,
           InbuiltPipesComponent,StyllingComponent,
           CSSClassComponent],
           */

  imports:[CatalogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular17-app';

  theProduct={"id": 12,  "title":"Rose",
         "description": "Wedding flower","price":4  ,
          "likes":89000,
           "imageurl":"/assets/images/rose.jpg"
        };
}
