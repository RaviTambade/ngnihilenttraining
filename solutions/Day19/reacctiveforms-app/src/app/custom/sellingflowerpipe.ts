import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'sellable' })
export class SellingflowersPipe implements PipeTransform {

  transform(allfloweres: any[]) {
    return allfloweres.filter(flower => (flower.canSell == true));
  }
}


@Pipe({ name: 'reasonable' })
export class ReasonablePipe implements PipeTransform {

  transform(allfloweres: any[]) {
    return allfloweres.filter(flower => (flower.unitPrice <20));
  }
}

//1.steps to create a service

//1 create a class and decorate it with @Injectable decorator
//2 provide the service in root or in a module's providers array
//3 implement the required logic in the service class
//4 inject the service in a component or another service using constructor injection
//5 use the service methods and properties in the component or service



//Receipe to remember while working with Angular Projects 


//0.steps to create a custom module

//1 create a class and decorate it with @NgModule decorator
//2 provide declarations, imports, exports, providers in the @NgModule decorator
//3 declare components, pipes, directives in the declarations array
//4 import other modules in the imports array
//5 export components, pipes, directives in the exports array
//6 provide services in the providers array
//7 import the custom module in the main app module or other modules where needed



//1.steps to create a custom component

//1 create a class and decorate it with @Component decorator
//2 provide a selector, templateUrl, styleUrls in the @Component decorator
//3 implement the required logic in the component class
//4 declare the component in a module's declarations array
//5 use the component in a template by adding its selector as an element


//2.steps to create a custom pipe

//1 create a class and implement PipeTransform interface
//2 decorate the class with @Pipe decorator and provide a name
//3 implement the transform method
//4 declare the pipe in a module's declarations array
//5 use the pipe in a template with the pipe operator (|)


//3.steps to create custom element(attribute) directive

//1 create a class and implement Directive interface
//2 decorate the class with @Directive decorator and provide a selector
//3 implement the required logic in the class
//4 declare the directive in a module's declarations array
//5 use the directive in a template by adding the selector as an attribute to an element



//4.steps to create custom template(structural) directive
//1 create a class and implement Directive interface
//2 decorate the class with @Directive decorator and provide a selector starting with *
//3 inject TemplateRef and ViewContainerRef in the constructor
//4 implement the required logic in the class using TemplateRef and ViewContainerRef
//5 declare the directive in a module's declarations array
//6 use the directive in a template by adding the selector as an attribute to an element

//5.stepd to create cutom httpInterceptor for Angulat project
