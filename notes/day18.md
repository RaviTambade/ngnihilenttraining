# **Learning Angular Through Reverse Engineering**

Sometimes the fastest way to understand a technology… is not to read the whole documentation…
It is to **reverse engineer**.
To *open the hood*, peek inside the engine, and observe how someone else has built the machine.

That’s exactly what we’re doing today with our Angular application.

## 🔥 **The Journey Begins — Running the Application (ng serve)**

Imagine you’re sitting in front of your VS Code—curious, a little confused, but excited to see what the application really does.

You type:

```
ng serve
```

And for a moment, nothing happens.

Then Angular begins its magic…

* It compiles your app
* Bundles your TypeScript
* Resolves your imports
* Spins up a dev server
* And finally launches your browser

You wait…
And suddenly the browser opens at:

```
http://localhost:4200
```

That's the moment every developer lives for—the moment your code *comes alive*.

## 🎨 **The Screen Loads — And the Chart Appears**

At first, you see some login and register components.
Perfectly normal—that was your morning experiment.

But now, you comment out that login section, save your file… Angular recompiles instantly… and you refresh the screen.

Boom.
A beautiful chart appears:

* January, February, March…
* Monthly sales data
* Visitor counts to your blog

Two curves.
Two stories.
One chart.

This is the power of visualizations.

But here’s the truth:
**Angular never gives you chart libraries out of the box.**

You *must* use third-party libraries.

## 🧩 **Third-Party Libraries: The Heart of Angular Charts**

So how did this chart appear?

Because someone installed a package…
Someone imported a module…
Someone used a ready-made component…

And now comes the reverse engineering part.

As a mentor I always tell students:

> “If you want to understand someone’s Angular project, don’t start with the components.
> Start with the *package.json*.”

Just like…

* .NET developers open **.csproj** first
* Java developers check **pom.xml**
* Node.js developers inspect **package.json**

These files reveal the **soul** of the application.


## 🔍 **Reverse Engineering the package.json**

You open your project…
You expand the project tree…
You click **package.json**.

Inside, you see the expected Angular 17 dependencies:

```json
"@angular/core": "^17.x",
"@angular/common": "^17.x",
...
```

But then something catches your eye.

A module that wasn’t there in the original blank Angular project.

A name that stands out.

Something around **line #20**.

Maybe:

```
"angular-google-charts": "x.x.x"
```

or

```
"ng2-charts": "x.x.x"
```

or

```
"chart.js": "x.x.x"
```

Whatever it is — **that** is the chart library.

And just like that, reverse engineering works:

1. Check the *package.json* → discover the library.
2. Search the imports in your component → see how it’s used.
3. Observe the HTML template → find the chart tag.
4. Run ng serve → see it in action.

## 🧠 **The Mentor's Lesson**

Learning isn’t linear.
Documentation is useful but not always enough.

But **reverse engineering**?
That’s how you learn very, very fast.

It forces your mind to:

* Observe
* Decode
* Question
* Debug
* Connect concepts

And every time you do it, your brain gets better at understanding real-world applications.



# 🌱 **The Secret Behind Charts in Angular**

So yes…
When you scroll through the **package.json** and you spot:

```
"angular-google-charts": "..."
```

or

```
"google-charts": "..."
```

Immediately your developer brain should light up:

> “Aha! So this is the third-party library behind those charts!”

And the moment you know the library, everything else becomes simple.

## 🔧 **1. Installing the Google Charts Library**

You type:

```
npm install google-charts
```

or the safer wrapper:

```
npm install angular-google-charts
```

And just like that, Angular fetches the whole chart engine into your project.

Fantastic.

This is the **first step of reverse engineering**:
*Identify the dependency → install it → understand why it exists.*

## 🏛 **2. The App Folder — The Heart of Your Angular Project**

When you reverse engineer an Angular project, remember one thing:

> “Everything meaningful begins under the **app** folder.”

So you open:

```
src/app
```

The first file to check?

### ✔ **app.component.html**

Because this file represents your **root view**.

And what do you see there?

```
<app-charts></app-charts>
```

Immediately your brain says:

> “This must be a custom Angular component.”

Perfect reverse-engineering instinct.

## 🔍 **3. Finding the charts component**

Next you open **app.component.ts** and you see something like:

```ts
import { ChartsComponent } from './charts/charts.component';
```

This tells you:

* A charts folder exists
* A charts component has been imported
* The app.component is using it as a child component

So you go into:

```
src/app/charts
```

And yes!
You see:

* charts.component.ts
* charts.component.html
* charts.component.css
* charts.component.spec.ts

Just like Angular CLI always generates.

## 🎨 **4. Opening charts.component.html – And the Surprise**

Now you expect complicated code.

You expect loops, arrays, TypeScript logic…

But when you open **charts.component.html**, you find something shockingly simple:

```html
<google-bar-chart></google-bar-chart>
<google-line-chart></google-line-chart>
```

Or sometimes even simpler:

```html
<div id="barchart" style="width: 400px; height: 300px;"></div>
```

Just empty `<div>` tags.

Yet the browser still displays beautiful, animated charts.

How?

# 🎯 **5. The Canvas Analogy — Why Empty Div Still Shows Chart**

And here comes the mentor moment.

You ask your students:

> “Does this remind you of something we learned last week?”

Yes!

When we did **graphics drawing**—line, rectangle, ellipse—you used:

```
<canvas></canvas>
```

Canvas was **empty**, but behind the scenes:

* The browser created a drawing context
* JavaScript rendered shapes inside it
* You saw lines and circles appear

Exactly the same thing happens with Google Charts.

The `<div>` is nothing but a **drawing surface**.
A *container*.

Google Charts injects JavaScript into that `<div>` and draws:

* Bars
* Lines
* Legends
* Axes

Just like canvas draws shapes.

You don’t write the drawing code —
the **chart library** draws inside that empty area automatically.

This is the power of modern rendering engines.

# 🌟 **The Mentor’s Lesson**

Reverse engineering Angular is a beautiful process:

1. **Check package.json** → spot the library.
2. **Find the root component** → discover how custom components are used.
3. **Locate the component folder** → understand the structure.
4. **Open the HTML** → see the template.
5. **Compare it with something you know** → canvas analogy.

This is how a real developer learns 10× faster.

This is how you grow.


# 🌱 **Connecting Canvas, DIV, ViewChild, Loader.js & Angular Lifecycle**

So yes…
Earlier we wrote:

```
<canvas id="myCanvas"></canvas>
```

And we took that **canvas element**, grabbed its **ID**, and used:

```
const ctx = canvas.getContext("2d");
ctx.moveTo(...)
ctx.lineTo(...)
ctx.stroke();
```

This was pure mathematics + graphics rendering.

Now in Angular, we are **not** using `<canvas>`.
We simply use:

```
<div #barChart></div>
<div #lineChart></div>
```

Empty `<div>` blocks.

Still, charts appear.

So the question is…

> **Who is doing the drawing?**
> Where is the code that calculates the bars, lines, axes, labels?

And here's the magic:

# 🎯 **Google Charts hides all the complexity inside its own library**

You don’t manually calculate heights, widths, scaling, axis positions.
Google has already written:

* moveTo()
* lineTo()
* fillRect()
* stroke()
* bezierCurveTo()
* axis drawing
* label positioning

All of it is buried inside:

```
loader.js
```

This JavaScript file is the *brain* doing the entire drawing job.

Your Angular component is only a **controller**, not the artist.
The actual painting happens inside Google’s chart engine.

# 🧩 **Why do we need a `<script>` tag in index.html?**

Because:

```
https://www.gstatic.com/charts/loader.js
```

contains the code that knows:

* how to interpret your data table
* how to draw bar charts
* how to draw line charts
* how to scale the canvas
* how to render the final visualization

So you insert:

```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
```

This ensures the browser downloads the entire rendering engine.

# 🧠 **Where does Angular come into the picture?**

Angular DOES NOT draw the chart.

Angular only:

* gives you the component lifecycle
* gives you the ViewChild reference
* makes sure the DOM element (`div`) exists
* tells you when the view is ready
* allows you to call the Google Charts APIs at the correct time

So we use:

### ✔ `@ViewChild('barChart') barChart!: ElementRef;`

### ✔ `@ViewChild('lineChart') lineChart!: ElementRef;`

This is exactly like your earlier canvas example:

```
document.getElementById("myCanvas")
```

But Angular way.

# ⚙ **Why do we need ngAfterViewInit()?**

Because you cannot draw something inside a `<div>`
**before the div is created**.

Angular lifecycle runs like this:

1. **constructor** → class is created
2. **ngOnInit** → input properties ready
3. **ngAfterViewInit** → DOM is fully created

This is the event we need because:

> “Our chart engine needs the `<div>` to be physically available.”

Only then Google Charts can inject the SVG/canvas drawing inside it.

# 🔄 **The Flow Explained Like a Story**

### 🎬 Scene 1 — Component loads

Angular builds your page.

### 🎬 Scene 2 — loader.js downloads

The chart engine gets loaded from Google’s CDN.

### 🎬 Scene 3 — ngAfterViewInit fires

Angular announces:

> “View is ready. DIV is present. You can draw now.”

### 🎬 Scene 4 — You call:

```
google.charts.load('current', ...)
google.charts.setOnLoadCallback(...)
```

This makes sure:

* data is ready
* chart engine is ready
* your draw functions are ready

### 🎬 Scene 5 — drawBarChart() & drawLineChart() execute

These functions:

* prepare data
* prepare options
* create a chart instance using:

```
new google.visualization.ColumnChart(this.barChart.nativeElement)
```

or

```
new google.visualization.LineChart(this.lineChart.nativeElement)
```

### 🎬 Scene 6 — chart.draw() runs

And the DIV is filled with:

* canvas drawing OR
* SVG drawing

(depending on what Google Charts chooses internally)

# 🤝 **Canvas vs GoogleCharts – Final Mentor Summary**

| **Canvas**                     | **Google Charts**                         |
| ------------------------------ | ----------------------------------------- |
| You write all drawing logic    | Google writes and hides all drawing logic |
| You do math for scaling        | Google calculates automatically           |
| You handle mouse, axes, labels | Built-in                                  |
| You manage animations          | Built-in                                  |
| Very flexible                  | Very easy                                 |
| Slow to build                  | Fast to implement                         |

So Google Charts = **Encapsulated Canvas Logic**
Wrapped inside a beautiful, developer-friendly API.



# 🌟 **How Google Charts Actually Works Inside Angular**

So yes, exactly what you observed:

When you write:

```ts
google.visualization.arrayToDataTable([
  ['Month', 'Sales'],
  ['Jan', 100],
  ['Feb', 200]
]);
```

That function call is **identical** to how you used to write:

```js
ctx.rect(...)
ctx.moveTo(...)
ctx.lineTo(...)
```

in plain JavaScript canvas.

The only difference is:

### ✔ Previously **YOU** wrote the drawing code

### ✔ Now **Google Charts** writes the drawing code

### ✔ You only pass data + options

### ✔ Rendering happens automatically inside the JS library

# 🧠 **JavaScript Skills Reappear in Angular**

You said it perfectly:

> “Those of you who worked with plain JavaScript will instantly recognize these functions.”

Yes!

Google Charts uses the same JavaScript functions internally.
Angular doesn't rewrite them. Angular just gives you:

* component classes
* lifecycle hooks
* ViewChild to access DOM
* TypeScript types
* a cleaner structure

Everything else — the drawing part — is pure JavaScript coming from:

```
loader.js
```

So the flow becomes:

# 🔄 **Third-Party Library Integration Flow (General Rule)**

You described this beautifully. Here is that rule cleanly summarized:

### **Step 1 — Get the JavaScript file**

(Add `<script>` for loader.js)

### **Step 2 — Install the Angular-friendly wrapper package**

Example:

```
npm install google-charts
```

This wrapper is the “bridge” between Angular and raw JS.

### **Step 3 — In the Angular component, access your HTML element**

Using:

```ts
@ViewChild('barChart') barChart!: ElementRef;
```

### **Step 4 — When the view is ready, call the JS functions**

In:

```ts
ngAfterViewInit()
```

### **Step 5 — Use the library’s API (google.visualization, Chart.js, etc.)**

Pass:

* nativeElement
* data
* config
* options
* chart type name

And the library handles the rendering.

This pattern is exactly the same for:

* Google Charts
* Chart.js
* D3.js
* Highcharts
* ECharts
* Kendo UI Charts
* Syncfusion Charts
* FusionCharts

All behave the same way inside Angular.

# 🖼️ **Why do we pass `nativeElement`?**

Because **Google Charts must know where to draw**.

Just like earlier in JavaScript you wrote:

```js
const element = document.getElementById('canvas')
```

In Angular:

```ts
this.barChart.nativeElement
```

This becomes the container where Google Charts injects:

* SVG
* Canvas
* HTML layers

depending on the chart type.


# 🎨 **Encapsulation: Google Charts = Canvas Drawing Hidden Inside a Library**

You said this perfectly:

Canvas:

* You do mathematical calculations
* You compute bar heights
* You calculate X/Y axes
* You draw lines manually
* You maintain scaling

Google Charts:

* You give data
* You give options
* You give which chart you want
* The library does everything
* You get professional UI with animation

This is the essence of **abstraction** and **encapsulation**.

# 🚀 **Bringing Real REST API Data Into the Chart**

You asked:

> "Right now data is hardcoded. Can I call my REST API and bind the response to drawBarChart?"

Yes — that’s the real goal.

The flow will be:

### 1. Create a service

```
sales.service.ts
```

### 2. Call REST API using HttpClient

```
this.http.get('api/sales')
```

### 3. Get the JSON

Example:

```json
[
  { "month": "Jan", "sales": 1200 },
  { "month": "Feb", "sales": 950 }
]
```

### 4. Convert to chart data array

Example:

```ts
const rows = apiData.map(x => [x.month, x.sales]);
const data = google.visualization.arrayToDataTable([
  ['Month', 'Sales'],
  ...rows
]);
```

### 5. Call drawBarChart(data)

Result:
Chart displays *live REST API data*.



## ✅ **Loading Google Charts (or any third-party JS library)?**

### **1. Angular life cycle vs Third-party JS loading**

Angular follows a structured lifecycle:

* `ngOnInit()` → component created
* `ngAfterViewInit()` → template HTML + child components are fully rendered

But **third-party JavaScript libraries like Google Charts don’t follow Angular’s lifecycle.**

They load **asynchronously**, from an external JS file (`google.charts.load(...)`).
These scripts take **unknown time** to download + parse + initialize.

So even if Angular finished rendering the view…

### ❗ Your external library may *not be ready yet*.

That’s why calling:

```ts
this.loadChart();
```

directly inside `ngAfterViewInit()` *may fail* if Google’s JS still hasn’t finished loading.


## ✅ **2. Why use `setInterval()`? (The actual purpose)**

`setInterval(() => this.loadChart(), 50);`

This is a **simple timing buffer**.

You give the browser **50 ms** to finish loading the external JS file.
This avoids runtime errors like:

* `google.visualization is undefined`
* `TypeError: chart.draw is not a function`
* empty chart
* chart not rendered

### 🎯 The idea:

* Let Angular finish the DOM.
* Give JS library a moment to finish loading.
* Then draw the chart.

This improves **user experience** and prevents random failures in production builds.

## ❓ **3. Is the interval number fixed?**

Yes — in your example, **50ms is a random safe value**.

There is **no guarantee** the library loads in 50ms.

It depends on:

* CPU speed
* network latency (first load)
* browser
* production build optimizations

But in practical use, 50–200ms usually works.


## ❓ **4. Does setInterval run repeatedly?**

No.
The way you used it:

```ts
setInterval(() => { this.loadChart(); }, 50);
```

⚠️ **This will actually call loadChart every 50ms forever**
UNTIL you manually stop it.

But in your code, you likely:

* clear the interval inside the first successful draw
* OR Angular destroys the component

So effectively it behaves like a *one-time buffer*.

## ❓ **5. Should we use setTimeout instead?**

If you want **only one delayed call**, then yes:

```ts
setTimeout(() => this.loadChart(), 50);
```

✔ cleaner
✔ safer
✔ avoids infinite repeated calls
✔ still solves the library-load delay

Many developers prefer this one.


## ❓ **6. Why did it work even without interval in development mode?**

Because:

* Local machine is fast
* Google JS downloaded from cache
* Dev build (JIT) is slower → gives JS more time to load

But…

🚨 **In production builds**, Angular compiles and renders extremely fast (AOT).
The external JS may not be loaded in time.

Hence: **best practice**

✔ in production
✔ when using external JS libraries
✔ especially those loaded via `<script>` tag

→ Add a small buffer using `setTimeout()` or check if library is ready.

## 🎯 **Recommended Best Practice Code**

```ts
ngAfterViewInit() {
  google.charts.setOnLoadCallback(() => {
    this.loadChart();
  });
}
```

OR

```ts
ngAfterViewInit() {
  setTimeout(() => this.loadChart(), 100);
}
```

This is safer and doesn’t hammer the browser with infinite calls.

## 📌 **Summary (Most Important Points)**

| Question                               | Answer                                                            |
| -------------------------------------- | ----------------------------------------------------------------- |
| Why interval?                          | To wait for external JS (Google Charts) to finish loading.        |
| Is the number fixed?                   | No, it's arbitrary but common.                                    |
| Does it repeat?                        | Yes, unless cleared.                                              |
| Will it auto-detect when Google loads? | No. It blindly waits.                                             |
| Why necessary in production?           | Production rendering is very fast → external JS may not be ready. |
| Better alternative?                    | Use `setTimeout()` or Google’s onLoad callback.                   |


Below is the **cleanest, production-friendly, Angular 17 + Google Charts sample** using:

✔ Standalone Components
✔ `provideHttpClient()`
✔ Google Charts JS loader
✔ NO `setInterval()`
✔ NO hacky delays
✔ Uses Google’s official `setOnLoadCallback()`

This is the *best-practice* approach for Angular 17.



## ✅ **1. Install Google Charts Loader**

```bash
npm install google-charts
```


## ✅ **2. Add Google Charts Script in `index.html`**

Add this **before `</body>`**:

```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
```


## ✅ **3. Create a clean Standalone Chart Component**

**charts.component.ts**

```ts
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var google: any;  // tell TS that google exists globally

@Component({
  selector: 'app-charts',
  standalone: true,
  template: `
    <div #chart style="width: 600px; height: 400px;"></div>
  `
})
export class ChartsComponent implements AfterViewInit {

  @ViewChild('chart', { static: true }) chartElement!: ElementRef;

  ngAfterViewInit(): void {
    // Ensure Google Charts is loaded before drawing
    google.charts.load('current', {
      packages: ['corechart']
    });

    google.charts.setOnLoadCallback(() => {
      this.drawChart();
    });
  }

  drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Year', 'Sales'],
      ['2019', 300],
      ['2020', 450],
      ['2021', 510],
      ['2022', 620],
    ]);

    const options = {
      title: 'Company Sales Report',
      legend: { position: 'bottom' }
    };

    const chart = new google.visualization.LineChart(
      this.chartElement.nativeElement
    );

    chart.draw(data, options);
  }
}
```

✔ No intervals
✔ No timers
✔ Uses Google’s recommended callback
✔ Super clean & stable


## ✅ **4. Add Component to Your App**

**app.component.html**

```html
<app-charts></app-charts>
```

If your app is standalone (Angular 17 default):

**app.component.ts**

```ts
import { Component } from '@angular/core';
import { ChartsComponent } from './charts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartsComponent],
  template: `<app-charts></app-charts>`
})
export class AppComponent {}
```



## ⭐ Optional: Bar Chart Example

Just replace this part:

```ts
const chart = new google.visualization.LineChart(
  this.chartElement.nativeElement
);
```

with:

```ts
const chart = new google.visualization.BarChart(
  this.chartElement.nativeElement
);
```


# 🌼 **Understanding Angular Custom Pipes**

Imagine you're sitting with your students, and you open your Angular app.
You tell them:

## 🌱 **“Look at the Browser… What Do You See?”**

“Students, on your Chrome browser… do you see the heading:

👉 *Today's fresh flowers are for sale*
👉 *Gerbera, Rose, Lotus*

Now look closely…
Do you see the serial numbers?

1, 2, ____, 4

*Number 3 is missing.*
Interesting, right?”

They nod.

You continue:

## 🌻 **“Now… Don’t Touch Your Browser. Just Watch.”**

You switch to VS Code.

You make a tiny change in your Angular code.

Then you ask:

“Now tell me… what happened on the screen?”

Suddenly they see a long list:

🌸 Gerbera
🌹 Rose
🌼 Jasmine
🌺 Orchid
💮 Lily
🌷 Tulip
🌻 Lotus

They get surprised.

You smile:

“Good! Now I’ll make **one more tiny change**.”

You change the code again.

You ask again:

“Now what do you see?
All flowers again…?
Or only a few?”

They respond:
“Sir, only **three** flowers.”

You nod proudly.

## 🌿 **“Let’s Understand the Magic Behind This.”**

You take them to **app.component.html**.

You show:

```html
<app-flowers></app-flowers>
```

Then:

```html
<div *ngFor="let flower of flowers | sellable">
  {{ flower.title }}
</div>
```

“Class, look carefully.

This `| sellable` is not uppercase, currency, or date pipe.

This is **our own pipe**.
A **custom pipe**—written by us, for our application.”

## 🌼 **Step 1: See the Data**

You open **flower.service.ts**.

You show them an array:

```ts
{
  id: 1,
  title: 'Gerbera',
  unitPrice: 10,
  canSell: true
}
```

You tell them:

“Observe this new property:
👉 `canSell: true` or `false`

Some flowers are available for sale.
Some are out of stock.”

## 🌳 **Step 2: The Need for Filtering**

“So students, my service sends *all* flowers.

But I want to show:

* Only sellable flowers in one case
* Only affordable flowers (e.g., price < 20) in another case

Should I:
❌ Change the HTML?
❌ Change the service?
❌ Change the component?

No.

Why disturb existing code?

Let the code be clean.

Let each file do only one job.

This is called **Separation of Concerns**.”

## 🌼 **Step 3: Enter… CUSTOM PIPE**

You open:

**selling-flower.pipe.ts**

```ts
@Pipe({ name: 'sellable' })
export class SellingFlowerPipe implements PipeTransform {
  transform(allFlowers: any[]) {
    return allFlowers.filter(f => f.canSell === true);
  }
}
```

You explain:

“A pipe is a small worker.
It receives data…
Applies some transformation…
And returns the final output.

Just like a water pipe:

💧 Dirty water goes in
🚰 Clean water comes out”

Students smile. They get it.

## 🌷 **Step 4: Reusable Logic**

You say:

“Students, please observe:

✔ No change in service
✔ No change in component
✔ No change in HTML logic
✔ Only apply a pipe where needed

This is the superpower of Angular pipes.”

## 🌺 **Step 5: Another Pipe – ‘Reasonable’**

You open:

```ts
@Pipe({ name: 'reasonable' })
export class ReasonablePipe implements PipeTransform {
  transform(allFlowers: any[]) {
    return allFlowers.filter(f => f.unitPrice < 20);
  }
}
```

Then you show:

```html
<div *ngFor="let flower of flowers | reasonable">
```

You tell them:

“Now you are not filtering by `canSell`.
You are filtering by `unitPrice`.

Different logic.
Same pattern.
Same pipe concept.”

## 🌿 **Step 6: Connect to Backend World (ASP.NET Core)**

You ask:

“Have you seen this idea before?
In ASP.NET Core MVC?”

Students whisper:
“Sir… action filters!”

You smile:

“Yes!
Angular pipes = ASP.NET Core filters.

🌐 Client and Server
🔁 Both have pipeline
🔁 Both have middleware
🔁 Both have filtering

Today’s technologies reflect each other.”


## 🌼 **Final Mentor Conclusion**

“So students…

Whenever you want your UI to show:

* Formatted data
* Filtered data
* Converted data
* Cleaned data
* Decorated data

👉 Use a **Pipe**
If Angular gives it → use built-in pipe
If you want your own logic → write a custom pipe”

You end with:

**“Architecture is not about writing more code.
It’s about writing code in the right place.”**

# 🌟 **The Grand Picture of Angular Customization**

Students, listen carefully.

Today, without realizing it, we actually touched the **entire soul of Angular**.

You saw **custom pipes**, but that was just one tile in the whole mosaic.
Angular is powerful because it lets you *extend itself*.

Just like:

* You can cook your own recipe
* You can build your own tools
* You can create your own reusable parts

Angular gives you this superpower through **custom building blocks**.

Let’s put everything into one simple, elegant understanding.

 

# 🌼 **1. Angular Lets You Build Your Own Tools**

You can create:

### ✔ Custom Components

Reusable UI blocks (e.g., FlowerListComponent)

### ✔ Custom Services

Reusable logic (e.g., FlowerService)

### ✔ Custom Pipes

Reusable data transformation (e.g., sellable | reasonable)

### ✔ Custom Directives

Reusable DOM behavior

* Attribute directives → `myHidden`, `myHighlight`
* Structural/template directives → `myIf`, `myFor`

### ✔ Custom Modules

A clean folder where you keep all your reusable building blocks

Angular is not just a framework.
It's a **machine where you can add your own parts**.

 

# 🌱 **2. Directives: Attribute vs Structural**

You asked:
“Sir, what was that `myHidden`? `myIf`? `myFor`?”

I told you:

There are **two types of directives**:

### **(A) Attribute or Element Directives**

Modify the behavior/appearance of an existing element.

Example:

```html
<div myHidden></div>
```

You wrote this last week to toggle visibility.

### **(B) Structural or Template Directives**

They change the DOM layout itself.

Example:

```html
<div *ngIf="isLoggedIn"></div>
<div *myFor="let item of items"></div>
```

These always start with `*`.

You implemented your own mini version of Angular’s `*ngIf` and `*ngFor`.

That’s a big achievement.

 

# 🌷 **3. So Why Did We Call It a 'Custom Module'?**

You asked a very good question:

> “Sir, is a custom module different from a regular module?”

No, it’s not.

A module is just a **container**.

But when you create a module to store all common reusable parts, we *call* it:

### ⭐ **Shared Module**

or

### ⭐ **Custom Module**

Why?

Not because Angular says so.
Because *we* use it to organize our project.

 
# 🏛️ **4. What Goes Inside a Custom (Shared) Module?**

Inside a Shared Module, you keep:

| Item             | Purpose                       |
| ---------------- | ----------------------------- |
| **Declarations** | Components, Pipes, Directives |
| **Exports**      | What other modules can use    |
| **Providers**    | Services (if needed)          |
| **Imports**      | Common Angular modules        |

So your custom module becomes a **library of reusable assets**.

Then you import this module wherever you need it.

Just like we do with:

* CatalogModule
* ShoppingCartModule
* OrderModule
* MembershipModule

Now we also have:

👉 **SharedModule**
for all common reusable custom things.

 

# 🌻 **5. How Big Applications Are Built**

I told you:

Enterprise applications grow like cities.

You have:

* Catalog module
* Shopping cart module
* Order processing module
* Payment module
* Shipping module
* Admin module
* Reporting module
* Membership module

Each is isolated.
Each is focused.
Each grows independently.

And then the Shared Module contains:

* Custom Pipes
* Custom Directives
* Custom Components
* Utility logic
* Shared layouts

This is how Angular helps you scale vertically and horizontally.

 

# 🌺 **6. Why Angular Scales Better Than React**

I explained:

React is good for startup-sized projects.
But if folder structure is not followed,
if naming is inconsistent,
if developers write code “anywhere”…

…then debugging becomes a nightmare.

Angular prevents this chaos by:

* Forcing structure
* Giving modules
* Giving decorators
* Giving CLI schematics
* Giving a predictable architecture

This is why enterprise companies prefer Angular for large codebases.

 

# 🌼 **7. Angular Material – Real Example of a Perfect Module**

Angular Material itself is a **shared module library**.

You install it:

```
ng add @angular/material
```

It gives:

* Buttons
* Cards
* Dialogs
* Navigation
* Form Controls
* Grids

All are components, directives, services — nicely grouped into modules.

So Angular Material is exactly what we are learning today:

👉 A set of ready-made reusable modules, components, directives, and utilities.

We are learning to build our own “mini Angular Material” for our application.

 

# 🌳 **8. The Recipe: Steps to Create Any Angular Building Block**

Here is the summary you crafted.

## ✔ **Steps to create a custom pipe**

1. Create class
2. Implement `PipeTransform`
3. Decorate with `@Pipe()`
4. Write `transform()` logic
5. Declare in module
6. Use it with `| myPipe`

 

## ✔ **Steps to create a directive**

1. Create class
2. Add `@Directive()` decorator
3. Provide selector
4. Inject `ElementRef` or `TemplateRef` if required
5. Manipulate DOM
6. Declare in module
7. Use with attribute or `*` syntax

 

## ✔ **Steps to create a service**

1. Create class
2. Add `@Injectable()`
3. Set `providedIn: 'root'` or add to module
4. Write logic
5. Inject via constructor
6. Use in component

 

## ✔ **Steps to create a module**

0. Create class with `@NgModule()`
1. Add declarations
2. Add imports
3. Add providers
4. Add exports
5. Reuse across app

 

# 🌟 **Final Mentor Conclusion**

Students, today you didn’t just learn custom pipes.
You learned **how Angular becomes YOUR framework**.

By creating:

* Custom components
* Custom pipes
* Custom directives (attribute + structural)
* Custom services
* Custom modules

You now understand the **full customization power** of Angular.

This is professional-level Angular knowledge.

 

If you want, I can create:

📌 A visual diagram showing the relationship between components → services → directives → pipes → modules
📌 A sample SharedModule with all custom items inside
📌 A mini project demonstrating all 5 custom concepts together
📌 An assignment for students to practice

Just tell me **"give diagram"** or **"give full example project"**.



Here is a **clean, classroom-friendly visual diagram** showing the relationship between
**Components → Services → Directives → Pipes → Modules**.

I’m giving **both ASCII Diagram** (for notes/handwritten clarity) and a **Mermaid Diagram** (for slides or documentation).

 

# 🌟 **ASCII Visual Diagram (Simple + Clear)**

```
                           ┌───────────────────────────────┐
                           │           MODULE               │
                           │        (Shared / Feature)      │
                           └───────────────┬───────────────┘
                                           │
     ┌─────────────────────────────────────┼─────────────────────────────────────┐
     │                                     │                                     │
┌────▼────┐                         ┌──────▼─────┐                        ┌──────▼──────┐
│COMPONENT│                         │ DIRECTIVE  │                        │    PIPE     │
└────┬────┘                         └──────┬─────┘                        └──────┬──────┘
     │ Use Template:                       │ Acts on DOM                          │ Transforms Data
     │ HTML + TS + CSS                     │ (attribute / structural)             │ (formatting)
     │                                      │                                     │
     │                                      │                                     │
     │ injects                              │ used inside HTML                    │ used inside HTML
     │                                      │                                     │
┌────▼──────────────────────────────────────────────┐
│                    SERVICE                        │
└────────────────────────────────────────────────────┘
                 Logic + API Calls + Reusable Code
```

 

# 🌳 **Explanation**

### **MODULE**

* The container
* Declares components, pipes, directives
* Provides services
* Exports what others can use

### **COMPONENT**

* UI + template + logic
* Uses services
* Uses directives
* Uses pipes

### **SERVICE**

* Business logic
* API calls
* Reusable code
* Injected into components or directives

### **DIRECTIVE**

* Modifies DOM behavior
* Structural (`*myIf`) or Attribute (`myHighlight`)

### **PIPE**

* Simple data transformation
* Pure functions for display

Everything flows like this:

```
Module → declares → components / directives / pipes  
Component → injects → services  
Component HTML → uses → directives / pipes
```

 

# 🧭 **Mermaid Diagram (for Slides, Documentation, GitHub)**

Copy-paste into any Mermaid-compatible editor:

```mermaid
flowchart TD

    A[Module<br>(Shared/Feature Module)] --> B[Component]
    A --> C[Directive<br>(Attribute / Structural)]
    A --> D[Pipe]
    A --> E[Service]

    B -->|Uses in HTML| C
    B -->|Uses in HTML| D
    B -->|Injects| E

    C -->|May Inject| E
    D -->|Pure Function| B
```

 
# 👨‍🏫 The Answer (short)

**First file to open:** **`package.json`** — to see which auth / http / token / JWT libraries are present.
Why first? because it tells you what external pieces the app expects (e.g. `@auth0`, `angular-oauth2-oidc`, `jwt-decode`, or simply `google-charts`, etc.). That orients you before diving into code.

But — once you’ve scanned `package.json`, the single most *actionable* file to open next for auth behaviour is: **`app.module.ts` (or `main.ts` for standalone apps)** — because that’s where interceptors, providers, Guards and root imports are registered.

 

# 🧭 Quick reverse-engineer route (what to open, in order)

1. **`package.json`** — check for relevant libs (`jwt-decode`, `@auth0/angular-jwt`, `angular-oauth2-oidc`, etc.).
2. **`app.module.ts` / `main.ts`** — look for `providers: [{ provide: HTTP_INTERCEPTORS, useClass: ..., multi: true }]`, guard providers, `provideHttpClient()` or `HttpClientModule`.
3. **`app-routing.module.ts`** — check guards on routes (`canActivate: [AuthGuard]`) and redirect rules for `/login` or `/dashboard`.
4. **`auth.service.ts`** — login(), logout(), getToken(), isAuthenticated() — where tokens are read/stored (localStorage/sessionStorage).
5. **`auth.interceptor.ts`** (or similarly named) — intercepts outgoing requests, attaches Authorization header; might also intercept responses to capture token.
6. **`login.component.ts`** — what it calls on submit (calls `authService.login()`), and how it handles responses/errors.
7. **`dashboard.component.ts`** — check how it checks authentication on initial load (maybe relies on token presence).
8. **`assets` / `server` / README / env** — backend URL and sample credentials (you mentioned sham/seed).
9. **Browser devtools** — Network tab to inspect request/response and Authorization header, plus Storage tab to check stored token.

 

# 🛠️ Why `app.module.ts` is crucial (after package.json)

`app.module.ts` is the registry. If an interceptor exists it’s registered there. If the app uses a guard or a provider for token handling, it’s declared there. So after you know *what* libs are available (package.json), opening `app.module.ts` tells you *how* the app wires them together.

 

# 🔁 Typical flow to look for (auth + interceptor + route)

1. `loginComponent` calls `authService.login(credentials)` → `POST /auth/login`.
2. Server returns `{ token: 'JWT...' }`.
3. `authService` stores token (e.g. `localStorage.setItem('token', token)`).
4. `AuthInterceptor` reads token from storage and adds header: `Authorization: Bearer <token>`.
5. `AuthGuard` checks `authService.isAuthenticated()` before allowing route to `/dashboard`.
6. `logout()` clears token (remove from localStorage) and navigates to `/login`.

 

# 🧩 Minimal, clean interceptor + auth service (mentor-style, copy-paste ready)

**auth.service.ts**

```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private api = 'http://localhost:8000/auth'; // adjust

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.api}/login`, { username, password })
      .pipe(
        tap(res => {
          if (res?.token) {
            localStorage.setItem('auth_token', res.token);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    const t = this.getToken();
    // optionally decode and check expiry
    return !!t;
  }
}
```

**auth.interceptor.ts**

```ts
import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private auth = inject(AuthService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if (!token) return next.handle(req);

    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(cloned);
  }
}
```

**Registration (app.module.ts or provider array for standalone)**

```ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]
```

**Auth Guard (simple)**

```ts
import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private auth = inject(AuthService);
  private router = inject(Router);

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
```

 

# ⚠️ A few practical tips (mentor voice)

* **Do not store sensitive user data in localStorage** unless you accept the XSS risk. For JWTs it’s common, but consider HttpOnly cookies for extra safety.
* **Check token expiry** (decode and compare `exp`) and refresh if needed.
* **Use `setOnLoadCallback()` style for third-party libs** (as we discussed earlier) — but for auth flow you’ll rely on HTTP flows and interceptors instead.
* **Check Network tab**: if your login returns a token but it’s not appearing in localStorage, inspect the subscription in `loginComponent` — maybe the component is ignoring the body.
* **If login shows “invalid credentials”**: check that the backend server (TFL store) is running, and that endpoint path and payload match what server expects. Also check console/server logs for errors.

 

# ✅ Wrap-up (what to do now)

1. Open `package.json` — confirm auth libraries.
2. Open `app.module.ts` / `main.ts` — look for interceptor registration and providers.
3. Open `auth.service.ts` — find login() and getToken().
4. Open `auth.interceptor.ts` — verify Authorization header behavior.
5. Check `app-routing.module.ts` — guards for dashboard.
6. Use browser DevTools > Network & Storage to trace token and headers.

 

# inject()` inside Angular 17 Interceptors

## **Why do we use `inject()` inside Angular 17 Interceptors?**

*(And how your Login → Dashboard app really works behind the scenes)*

---

### 👨‍🏫 **Imagine you and I are walking together inside your Angular application.**

We are not debugging.
We are *reverse-engineering*.
We want to see how this "simple" Auth App magically logs in, stores a JWT token, opens the dashboard, and logs out.

So I tell the class:

> “Developers, don’t read code. **Walk through code like an engineer**.
> Observe the folder. Observe the flow. Observe the intention.”



# 🔍 **1. Start with the Folder Structure — It speaks first.**

You open the `src/app/` folder.

You immediately see:

* **login component**
* **dashboard component**
* **auth.service.ts**
* **auth.api.ts**
* **jwt-interceptor.ts**
* **app.config.ts**

Before reading a single line, just the folder tells you:

> “There is a login page.
> There is a dashboard page.
> There is a backend call for login.
> There is a service for managing token.
> And there is an interceptor controlling HTTP traffic.”

This is how engineers think.



# 🎬 **2. Run the App — Observe First, Debug Later**

You run:

```
ng serve
```

Browser opens → you see **Login Page**.

You type:

```
username: sham
password: seed
```

First attempt: ❌ *Invalid credentials*
Why?
Because your **TFL store Node.js backend wasn’t running**.

Class laughs.
This is real development. 😄

You start Node backend:

```
node server.js
```

Now login again → ✔️ Dashboard appears.

Great.


# 🔎 **3. Now Inspect the Application Tab (Browser DevTools)**

This is where the magic becomes visible.

After login → open **Application → Local Storage**:

You suddenly see:

```
JWToken : eyJhbGciOiJIUzI1NiIsInR...
```

The class gets excited:

> “Sir, but where did this come from?
> I don’t see any code in login component storing the token!”

Exactly.
This is the teaching moment.


# 🧠 **4. The Mystery: Login Component DID NOT store the token**

Look at `login.component.ts`:

* It gets username/password.
* It calls `this.authApi.login()`.
* If success → it routes to dashboard.
* If failure → shows invalid credentials.

**But no token storage.**
**No localStorage code.**
**No parsing response.**

So how did the token enter Local Storage?


# 🕵️ **5. The Answer: Interceptor did it.**

Your interceptor is the real hero.

Inside the `jwt-interceptor.ts` function:

```ts
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  const token = auth.getToken();
  ...
  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.body?.token) {
        auth.setToken(event.body.token);
      }
    })
  );
};
```

### 💡 But wait…

Your class asks:

> “Sir… how did we call `AuthService` inside a function?
> There is no constructor. This is not a class!”

Exactly!
And this is the **heart of Angular 17’s new system**.

---

# 🌱 **6. Old Angular = Class Interceptors**

Earlier we wrote:

```ts
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}
}
```

Classic Constructor Injection.


# 🌱 **7. New Angular 17 = Function Interceptors**

A function has no constructor.
A function can’t inject dependencies.

So Angular gave us:

## **`inject()` — Method level Dependency Injection**

This is what you teach students:

> **Constructor DI → for classes**
> **Method DI → for functions**
> **Property DI → for setters/getters**

Interceptors in Angular 17 are simply functions.
So we use **method DI** via `inject()`.


# 🔗 **8. Auth Flow Broken into 3 Clean Layers**

This is the most important architecture lesson.

### **Layer 1: `auth.api.ts` — Talking to REST API**

Only job:

* Send username + password
* Receive response
* Return Observable

No token logic.

### **Layer 2: `auth.service.ts` — Token Manager**

Only job:

* Set token
* Get token
* Remove token
* isLoggedIn()

This service does NOT call HTTP.

### **Layer 3: `jwt-interceptor.ts` — Glue**

Only job:

* Add token to outgoing requests
* Extract token from incoming responses
* Call AuthService to store/remove/check token

This is **Separation of Concerns** done right.


# 🧩 **9. Where did we register the interceptor?**

Look at `app.config.ts`:

```ts
providers: [
   provideHttpClient(withInterceptors([jwtInterceptor]))
]
```

This single line tells Angular:

> “Any HTTP request that leaves this app
> must pass through jwtInterceptor.”

This is the control room.



# 🛣️ **10. The Full Story in One Line**

> **Login Component calls Auth API →
> REST API returns JWT →
> Interceptor captures it →
> AuthService stores it →
> Dashboard uses it →
> Logout removes it.**

This is how modern Angular authentication is built.



## **Understanding Responsibilities, SOLID Principles & Evolution of Frontend Engineering**

 

## 🎯 **1. So what concept are we really using here?**

We are using the **Single Responsibility Principle (SRP)** — the **first** principle of SOLID.

I ask the class:

> “Who is responsible for what?”

Immediately you can break responsibilities:

### **Responsibility #1 — Interceptor**

* Add JWT token to every outgoing HTTP request.
* Remove token if unauthorized.
* Extract and store token if the backend sends it.

**The interceptor’s only job:**
👉 *“Responsibility for modifying the request/response pipeline.”*

 
### **Responsibility #2 — AuthService**

* Store token in Local Storage
* Retrieve token
* Remove token
* Check login state

**The AuthService’s only job:**
👉 *“Responsibility for managing token state.”*

 

### **Responsibility #3 — Auth API Service (auth.api.ts)**

* Call REST API
* Send username/password
* Return response observable

**Its job:**
👉 *“Responsibility for talking to backend REST API.”*

---

🎉 Now you see?
Even though you are a front-end developer, you are thinking like a **Solution Architect**.

 

# 🧠 **2. What does an interceptor respond to?**

Interceptors “intercept” two things:

### ✔️ **Outgoing requests → Modify request headers**

Add JWT token to header:
`Authorization: Bearer <JWT>`

### ✔️ **Incoming responses → Observe response**

If the server returns `{ token: ... }`, the interceptor catches it and stores the token.

So:

👉 *Interceptors respond to request/response transformation.*

 

# 🧠 **3. What does an API service respond to?**

The **API Service** (`auth.api.ts`) only calls the backend.

It does NOT:

* Store token
* Add token to headers
* Manage login state

Thus:

👉 *Its responsibility is strictly: “Call REST API and return Observable.”*

 

# 🧠 **4. What does AuthService respond to?**

AuthService deals with **Local Storage**, nothing else.

👉 *“Its responsibility is token persistence.”*

 

# 🌱 **5. Why are responsibilities separated?**

Because this is exactly what **SOLID design** teaches us.

And that’s why Angular feels like a **mirror image of backend architecture**.

Today, frontend development is not “HTML + CSS + event binding” anymore.

 
# 🕰️ **6. Quick Timeline — Evolution of Frontend Engineers**

### **2000 – 2008**

Frontend developers only did:

* Event binding
* Data binding
* DOM manipulation
* Routing
* Calling REST APIs
  Mostly with jQuery.

No architecture.
Messy code.
DOM everywhere.

 

### **2008 – 2014**

Came **MVC to the browser**:

* Knockout.js
* Backbone.js
* Ember.js
* AngularJS (1.x)

For the first time, frontend got:

* Controllers
* Models
* Views
* Dependency Injection
* Routing
* Interceptors (via $q)

This was a revolution.

 

### **2016 – Today: Angular, React, Vue**

Frontend =
**Engineering discipline.**

Angular brought:

* Modules
* Components
* Services
* Dependency Injection
* Pipes
* Guards
* Interceptors
* Observables
* SOLID
* DRY
* KISS
* YAGNI
* Hollywood Principle (Don't call us, we’ll call you)
* IoC container
* Reactive programming
* Clean code patterns

This is why a frontend developer today feels like a **Solution Architect**.

 

# 🧱 **7. Hollywood Principle in Angular**

> **“Don’t call us, we will call you.”**

This is exactly how Angular works.

You never do:

```ts
new AuthService()
```

You write:

```ts
@Injectable()
export class AuthService {}
```

And Angular will **create, inject, and destroy** the object when needed.

That’s **IoC (Inversion of Control)**.

Same as Spring Boot, .NET Core, NestJS.

 

# 🚀 **8. Why front-end is equally important now?**

Because **frontend changes more often than backend**.

Ask any company:

* Backend changes once in 2–3 years
* Frontend changes every 6–12 months

Reasons:

* Customer tastes change
* UX expectations evolve
* New devices enter market
* New interaction models (Touch, Voice, Wearables, AR/VR)
* Branding refresh
* Performance improvements

Which layer needs to be most flexible?

👉 **Frontend UI & UX**

Which role becomes most critical?

👉 **Frontend Engineer**
👉 **Full Stack Developer**
👉 **Solution Provider**

 

# 👑 **9. Why companies want multi-skilled developers?**

Because the future is:

> “One person, multiple hats.”

Companies need someone who can:

* Write frontend
* Write backend
* Handle databases
* Deploy code
* Write tests
* Understand architecture
* Deliver end-to-end solutions

That person becomes:

### **Solution Provider → Solution Architect → CTO-level thinker**

This is the real growth path.

 

# 🎮 **10. Your practice mindset**

> “Don’t treat your project as an assignment.
> Treat it like a game with levels.”

Level 1 → simple UI
Level 2 → interceptors
Level 3 → local storage
Level 4 → guards
Level 5 → charts
Level 6 → NgRx
Level 7 → unit tests
Level 8 → integration
Level 9 → deployment

The more you play, the more you master.
 

# 🏁 **11. Summary of Today’s Lesson**

### ✔️ Single Responsibility Principle

* API service: call backend
* AuthService: manage token
* Interceptor: modify request/response
* Component: only UI

### ✔️ Modern frontend follows backend-grade architecture

### ✔️ Frontend engineering evolved dramatically since jQuery days

### ✔️ Angular integrates SOLID, DRY, KISS, YAGNI, Hollywood Principle, IoC

### ✔️ You are not becoming a “frontend developer”

You are becoming a **Solution Provider**

 

