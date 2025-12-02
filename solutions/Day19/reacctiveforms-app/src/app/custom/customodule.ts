import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SellingflowersPipe } from "./sellingflowerpipe";

import { ReasonablePipe } from "./sellingflowerpipe";
import { FlowersComponent } from "./flowers/flowers.component";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [ 
                    // contain pipes, components, directives
                    SellingflowersPipe,
                    ReasonablePipe,
                    FlowersComponent
                ],
    exports: [      SellingflowersPipe,
                    ReasonablePipe ,
                    FlowersComponent
             ],
    imports:[ CommonModule],
})
export class Customodule{}