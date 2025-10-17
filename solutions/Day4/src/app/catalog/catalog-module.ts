import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from './list/list';
import { Details } from './details/details';
import { Create } from './create/create';
import { ProductService } from './product-service';



@NgModule({
  declarations:[] ,
  imports: [CommonModule,List, Details, Create],
  exports:[List, Details, Create],
  providers:[ProductService]
})
export class CatalogModule { }
