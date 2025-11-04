### **Angular Routing Single Page Application (SPA)**

## 🎯 Session objective (short)

* **Single Page App (SPA)**: one HTML shell — Angular updates view by swapping components, not reloading the page.
* **Router outlet**: the placeholder (`<router-outlet>`) where routed components render.
* **routerLink**: anchor that updates URL without full reload.
* **Route parameters**: pass IDs (like `details/12`) so the detail component knows which product to show.
* **Child routes**: nested routes for dashboards and its charts.
* **localStorage**: simple persistence for “logged in” state used to personalize the UI.
* **Guards (optional)**: protect routes such as Dashboard (only for logged-in users).

# 🧭 **Understanding Web Application Architectures – MPA vs SPA**

Imagine you're standing at the entrance of two different cities.

* One is an **old, traditional city**—lots of streets, lanes, small shops, every turn leads you somewhere new.
  📍 *This is a Multi-Page Application (MPA).*

* The other is a **modern smart city**—one big building like a shopping mall where everything changes inside smoothly without stepping outside.
  📍 *That’s a Single-Page Application (SPA).*

Today, let’s walk through the **traditional city – MPA** first.

## 📖 **What is an MPA (Multi-Page Application)?**

Think of old-fashioned newspaper websites like **The New York Times** or platforms like **Amazon, Wikipedia, or eBay**.

* Every time you click on something—**the page reloads**.
* New HTML is requested from the server.
* Like going from one street to another in the old city—you must step outside, walk, and enter another door.

So, an MPA is made up of **many individual HTML pages**, each served by the server.

## 🎯 **Why MPAs Still Matter?**

Let me tell you a story.

A student once asked me,
*"Sir, why do companies still use MPAs when SPAs seem cool and modern?"*

I smiled and replied,
*"My boy, old doesn’t mean useless. Temples are old, yet powerful. MPAs are the same."*

Here’s why MPAs are still alive and strong:

### ✅ **Advantages – The Strengths of MPAs**

✔ **1. Great for SEO (Search Engine Optimization)**
Each page has its own **unique URL**, title, and keywords.
Google loves this! It can easily index content page-by-page.
- 📌 *Perfect for blogs, news portals, and product catalog websites.*


✔ **2. Naturally More Secure**
Every page request goes through the **server**, where authentication and authorization checks can happen easily.
- 📌 *Less risk of exposing sensitive APIs directly to the browser.*


✔ **3. Faster Initial Page Load**
The first page opens quickly because it only loads what's required—no extra JavaScript bundles.
- 📌 *Especially useful for slow internet or older devices.*

✔ **4. Works Well on Old Browsers and Legacy Systems**
No need for fancy JavaScript frameworks like React or Angular.
- 📌 *Even a 10-year-old browser can handle it!*

### ⚠️ **Disadvantages – The Challenges of MPAs**

Just like in the old city:

❌ **1. Every Click Reloads the Page**
You click something → Page flashes → Reloads entirely.
- It feels slow compared to modern apps like Gmail or YouTube.

❌ **2. More Development Effort**
Each page is a separate file with its own backend logic.
- More pages = more complexity.

❌ **3. More Load on the Server**
Every click means a **fresh request to the server**.
- With thousands of users, this can increase **bandwidth usage and server cost**.

## 🥊 **MPA vs SPA – Which One Should You Choose?**

Imagine you’re advising a startup team. You ask them a few questions:

| Decision Factor                     | SPA (Single Page App) 🏙️ | MPA (Multi Page App) 🏘️ |
| ----------------------------------- | ------------------------- | ------------------------ |
| Complex features? (like Gmail)      | ✅ Yes                     | ❌ Not ideal              |
| Lots of content? (like news, blogs) | ❌ Not necessary           | ✅ Perfect fit            |
| SEO very important?                 | Needs extra effort        | ✅ Naturally good         |
| Faster to build?                    | ✅ Yes, once setup is done | ❌ No, more time needed   |
| Works on old browsers/devices?      | ❌ Not always              | ✅ Yes                    |
| Real-time updates & smooth UI?      | ✅ SPA wins                | ❌ MPA feels slower       |

## 🧠 **Mentor’s Wisdom – Final Thought**

> *“Choosing between SPA and MPA is not about popularity.
> It’s about suitability.”*

* If your app needs **real-time updates, dashboards, or smooth user experience** → Go with **SPA**.
* If your app deals with **search engine traffic, lots of content, or simpler workflows** → **MPA is a wise choice**.

Both are tools. Great engineers know **when to use which tool**.

Great! Let’s continue the journey — this time into the world of **Single Page Applications (SPAs)**, but still in the same **mentor-style storytelling format** 🌟


# 🧭 **Understanding SPAs (Single Page Applications)**

we walked through the old traditional city – the world of **MPAs**.
Now, I’ll take you to the **modern smart city** — where things feel faster, smoother, and more interactive.

## 🏢 **What is a Single Page Application (SPA)?**

Imagine walking into a **big shopping mall** 🏬:

* You enter once.
* After that, you go to clothing, electronics, food court — **without stepping out**.
* The outside door never reloads — **only the inside content changes**.

That’s exactly how a **SPA works**.

* You load the web application only **once**.
* After that, everything changes **dynamically using JavaScript**.
* Frameworks like **React, Angular, Vue** behave like the mall’s internal escalators — moving you around smoothly.

Examples?
✅ Gmail, YouTube, Facebook, Instagram, Trello.

## ⚡ **How Does an SPA Actually Work?**

Think of it like this:

1. You visit the site → Browser downloads one **HTML file + CSS + JavaScript**.
2. JavaScript takes over and controls the screen.
3. When you click something:

   * It does **not reload the entire page**.
   * It only fetches **data from APIs** (often in JSON format).
   * Updates the screen **intelligently**.

No page refresh = **No blinking screen**. A silky smooth experience.

## ✅ **Advantages of SPA – Why Developers Love It**

✔ **1. Lightning-Fast Experience (After Initial Load)**
Once loaded, switching between pages feels instant.
No page reload = smoother user interaction.

✔ **2. Perfect for Real-Time Apps**
Chat apps, live dashboards, trading platforms — all work better as SPAs.
Why? They can refresh data **without reloading the entire page**.


✔ **3. Less Server Load**
Only **data travels back and forth**, not full HTML pages.
This reduces server stress.


✔ **4. Great User Experience (UX)**
Animations, transitions, modals — everything feels like a desktop/mobile app inside a browser.


✔ **5. Reusable Components**
Frameworks allow building UI blocks (like buttons, cards, forms) once and reuse them everywhere.

## ⚠️ **Disadvantages of SPA – The Other Side of the Coin**

Even a Ferrari has maintenance needs, right? 😄

❌ **1. Slow First-Time Load**
Because a lot of JavaScript needs to be loaded at once.
Until then — a blank screen or loader.

❌ **2. SEO Challenges (Search Engine Optimization)**
Google needs HTML to read content.
SPA loads content using JavaScript → **Google may miss it.**
**Solution?** Use SSR (Server-Side Rendering) or Pre-rendering.

❌ **3. More Security Concerns**
Since everything loads in the browser, improper coding can expose **API calls or tokens**.


❌ **4. Browser Dependency**
If JavaScript fails or is disabled → The app won’t work.

## 🥊 **SPA vs MPA – Quick Mentor Comparison**

| Feature                | SPA (Smart City 🏙️) | MPA (Traditional City 🏘️) |
| ---------------------- | -------------------- | -------------------------- |
| Page Reload on Click   | ❌ No                 | ✅ Yes                      |
| Initial Load Time      | ⏳ Slower             | ⚡ Faster                   |
| After-Load Speed       | ⚡ Very Fast          | ⏳ Slower                   |
| SEO Friendly           | ❌ Needs work         | ✅ Yes                      |
| Server Load            | ✅ Lower              | ❌ Higher                   |
| Real-Time Features     | ✅ Better             | ❌ Harder                   |
| Works Without JS       | ❌ No                 | ✅ Yes                      |
| Development Complexity | ✅ Modern Tools       | ❌ Simpler, but large code  |


## 💡 **Mentor’s Final Words**

> *“SPA is like living inside one big futuristic building with moving walkways.
> MPA is like moving between different houses on the street.”*

* If your app needs **dashboards, chats, dynamic UI, or feels like a mobile app → choose SPA.**
* If your app is **content-heavy, SEO-focused, or simpler in interaction → choose MPA.**

# 🌍 **The Adventure of Angular Routing**

Imagine you and I are entering a beautiful city called **“Angular City”**.

At the entrance, there is only **one big gate (index.html)**.

But inside this city, there are many beautiful places:

- 🏠 Home
- 📞 Contacts
- ℹ️ About
- 📄 Contact Details (with ID)

Yet — here’s the magic...

- 👉 You never leave the city.
- 👉 You never reload the page.
- 👉 Walls don’t refresh — only the **inside content changes smoothly**.

This magical travel inside Angular City is called **Routing**.


## 🛣️ **What is Routing? – In Simple Words**

Routing in Angular is like having many rooms inside one house.
You don’t go outside every time — you just walk from one room to another.

* No **full-page refresh**
* Only the **content inside main area changes**
* It makes apps look like **real desktop/mobile apps**

**Technically:**
Routing maps a **URL path → Component**.

Example:
`/home` → HomeComponent
`/contacts` → ContactListComponent

## 🎯 **Why Routing Is Important?**

| Benefit                  | Story Explanation                                                     |
| ------------------------ | --------------------------------------------------------------------- |
| ✅ Fast page transitions  | No full reload = quick movement like sliding doors inside a mall      |
| ✅ Better User Experience | Feels smooth, app-like, without blinking screens                      |
| ✅ Modular & Maintainable | Each page = a separate component = easy to manage                     |
| ✅ Dynamic Data           | You can show data based on URLs like `/products/101`                  |
| ✅ Route Guards           | You can stop people from entering restricted rooms without permission |

## 🧭 **Core Players in Angular Routing**

Let me introduce you to the heroes of routing…

| Hero             | Role                                                    |
| ---------------- | ------------------------------------------------------- |
| **Routes**       | The map – defines which URL links to which component    |
| **Router**       | The guide – listens to URL changes and loads components |
| **RouterOutlet** | The stage – where the new component will be displayed   |
| **RouterLink**   | The doorbell – tells Angular to navigate when clicked   |
| **Route Params** | Passes data inside the URL (`/users/10`)                |
| **Route Guards** | Security guards – allow or block entry                  |

## 🖼️ **Router Outlet – The Main Stage**

In your main HTML (usually `app.component.html`), you write:

```html
<router-outlet></router-outlet>
```

This is like saying:

> "Whatever route the user selects, place the component right here."

## 🗺️ **Defining Routes – Creating the Map**

Inside `app-routing.module.ts`:

```ts
const routes: Routes = [
  { path: '', component: HomeComponent }, // default route
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: '**', component: PageNotFoundComponent } // wildcard for wrong URLs
];
```

Then you load this map:

```ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## 🚪 **Navigating with RouterLink – Clicking Without Reload**

Instead of using `<a href="">` like in old HTML, Angular gives us:

```html
<a routerLink="/contacts">Contacts</a>
```

Or with parameters:

```html
<a [routerLink]="['/contacts', contact.id]">View Details</a>
```

## 🎒 **Route Parameters – Passing Data in URL**

Example path:

```ts
{ path: 'contacts/:id', component: ContactDetailComponent }
```

To receive the `id` inside the component:

```ts
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('Contact ID:', id);
}
```

## 🛡️ **Route Guards – The Security Checkers**

You know how some rooms in a mansion are private?
Angular lets us create guards to check if a user can enter or not.

Example:

```ts
import { CanActivate } from '@angular/router';

export class AuthGuard implements CanActivate {
  canActivate() {
    return true; // or return false to block
  }
}
```

Apply it to a route:

```ts
{ path: 'contacts/:id', component: ContactDetailComponent, canActivate: [AuthGuard] }
```
## 🏁 **Summary – What Did We Learn Today?**

- ✔ Routing = Navigation inside SPA without reloading
- ✔ RouterOutlet = Display area
- ✔ Routes = URL-to-component mapping
- ✔ RouterLink = Click to navigate
- ✔ Route Params = `/something/:id` dynamic values
- ✔ Route Guards = Protect pages
- ✔ Wildcard Route (`**`) = Page not found handling

## 💬 **Mentor's Final Thought**

> “Routing is like designing a house — rooms are your components,
> the map of doors is your routes, and `<router-outlet>` is the main hall
> where every door leads you into a new room without ever leaving the house.”


# 🎙️ Understanding SPA, Routing & Why Angular Exists

Let me take you back to **Friday’s session**.
We started styling our Angular application using **Bootstrap** — not to make it “fancy”, but to make it **feel like a real web application**: responsive buttons, clean layouts, proper spacing, and visually meaningful components.

Now, when you click on **Products**, you come back to the full product list.
When you click **Details**, it only loads that product’s information.
No page refresh. No flicker. Yet it feels like you’re moving from page to page.
**That experience** — of moving between pages **without actually having multiple pages** — is what we are exploring today.

## 🌐 So, what kind of application are we building?

We are building a **web application**, but not an ordinary one.
It is built using **Angular**, which acts as our **front-end UI framework**.

And such an application is called a **Single Page Application (SPA)** — or as I keep saying, **SPA — Modern Single Page Application**.

## ❓ Why are companies using Angular, React, or Vue instead of server pages?

Because the industry changed.

Earlier:

* Business logic + UI were tightly coupled.
* Technologies like **ASP.NET, JSP, PHP, MVC** generated a new web page for every request.
* This was called **MPA — Multi Page Application**.

Now:

* The logic lives in the **cloud** as **REST APIs / Web APIs**.
* Front-end frameworks like Angular/React **consume these APIs**.
* They render the UI on the browser dynamically.
* This UI doesn’t reload an entire page — it only swaps components.

## 🆚 MPA vs SPA (Simple Analogy)

| Feature       | MPA (Multi Page App)                                | SPA (Single Page App)                              |
| ------------- | --------------------------------------------------- | -------------------------------------------------- |
| Technology    | ASP.NET, JSP, PHP, MVC                              | Angular, React, Vue                                |
| Interaction   | Every click → Server returns a new .html/.aspx page | Only one `index.html`, components inside it change |
| Page Refresh  | Full page reload each time                          | No full reload — only component changes            |
| URL Behaviour | Different physical pages                            | Same page, different virtual routes                |
| Experience    | Slow, clunky on mobiles                             | Smooth, app-like                                   |


## 🧠 The Illusion of "Multiple Pages"

When you:

* Click **Home**
* Navigate to **Services**
* Open **Products**
* Or view **Product Details**

**It looks like pages are changing**, but technically:

* The URL updates (`/products`, `/about`, `/products/12`)
* Angular sees the URL → decides **which component** to display
* Inside **one master file — `index.html`**, Angular only replaces child components inside the `<router-outlet>`

No new page is loaded from the server.

This is **component swapping**, not page reloading.

## 🏗️ How Angular App is Actually Built

Every Angular application has:

✅ **Components** – UI building blocks
✅ **Services** – Business logic & data handling
✅ **Directives** – Modify DOM behavior
✅ **Pipes** – Transform data in HTML
✅ **Forms** – Template or reactive-based
✅ **Modules** – Group features
✅ **Routing** – **The missing powerful part** we are now focusing on

## 🔁 Why Routing is So Important?

Because users expect:

* Navigation like old websites
* URL changes for bookmarking and sharing
* Browser buttons (Back/Forward) to work
* Mobile-friendly smooth transitions

And routing gives exactly that — **multiple views, one page**.


## 📱 Mobile Revolution → Birth of SPA

Back in early 2000s:

* We would open laptops/PCs to shop online.
* Pages used to load one by one.
* Then came **iPhone, Android, HTC, Nokia**.
* Mobile screens were small — loading full pages every time was slow.

So designers thought:

> “What if we load everything once, and only **change the inner content** when needed?”

That idea became **Single Page Applications**.

## 🧭 Today’s Session Focus

By now, your mind should be asking:
✅ How does routing work inside Angular?
✅ How does URL decide which component to display?
✅ Why is everything loading still inside `localhost:4200`?
✅ How does Angular swap these components smoothly?

And that, my friends, is what we are about to build:
👉 **Angular UI Routing — the heart of every SPA.**

### 🚗 **Why it matters? — Routing Happens on Client Side**

*“Angular, React, Vue—they all follow the same philosophy.”*

Only for **data**, not for page reloads, the browser contacts the server—using REST APIs or AJAX calls.

UI is handled completely on the **client-side**.

### 🛠 **Now What? — Today’s Mission**

“So, today we focus on building this system in Angular.”

✔ Setting up **Routing Module**
✔ Creating **components (home, product, details...)**
✔ Understanding **routerLink, router-outlet**
✔ Visualizing the **application skeleton in your mind before writing code**

### 🌱 **Final Mentor Thought**

“Friends, frameworks like Angular are not just about coding components—they are about designing experiences. And trust me, once you understand routing, your app stops being a collection of pages and becomes a *living application*.”

### 🎓 **Understanding Angular Routing**

Sahasransu sat forward on his screen, curiosity shining in his voice.

**Sahasransu (17:20):**
*“Sir, I'm pumped up today! I have a question. When the list is loading for the first time, that’s when the entire index.html page is loaded from the server, right?”*

**Ravi Sir (smiling):**
“Hmm… hold on. Let the question complete, then I’ll explain.”

**Sahasransu:**
*“Okay… so when we click on ‘Details’, it goes to the details component, right? But in that moment, the entire web page doesn't reload, correct?”*

**Ravi Sir:**
“Absolutely correct! The full page is not reloading. It's just like updating a small `div` on the page, not the whole website.”


### 🌐 **First Load vs. Navigation – The Magic of SPA**

**Sahasransu:**
*“So that first time, all the content comes from the server? The whole HTML file?”*

**Ravi Sir:**
“Exactly. Let me make it clearer.

Imagine you open a new browser tab. It’s empty.
You type `http://localhost:4200` and press Enter.

✅ **That first request goes to the server.**
✅ Server sends back `index.html` + bundle files like `main.js`, `styles.css`, `polyfills.js`.
✅ The browser loads it—this is the *first and only full page load*.”


### 🔄 **After That? Only Components Change—Not the Page**

**Ravi Sir continues:**

“Now, after this first load, if you click on *About*, *Services*, or *Details*:

* No new HTML page is fetched from the server.
* Only a part of the screen changes.
* Angular simply loads a new **component inside `<router-outlet>`**.

This is called **Client-side Routing.**
No more full-page refreshes.”

### ✅ **Student’s Realization**

**Sahasransu:**
*“Ohh… so it only loads the section component, not the whole page?”*

**Ravi Sir:**
“Exactly! Only partial content changes. Not a complete reload.”


### ⚙️ **Why is This Better?**

**Ravi Sir (guiding him deeper):**
“Now tell me, what’s the advantage of this approach?”

**Sahasransu:**
*“No need for repeated server requests, so server load decreases?”*

**Ravi Sir:**
“Perfect! And…”

* ✅ Less bandwidth usage
* ✅ Faster page navigation
* ✅ Smooth user experience
* ✅ Reduced server round-trips

“All the heavy files (`main.js`, `polyfills.js`, CSS) were already downloaded during the first load.”


### 💻 **Verification – Developer Tools**

**Ravi Sir:**
“If you open Developer Tools → Network → Sources, you’ll see those bundled files already present:

* `main.js`
* `polyfills.js`
* `styles.css`

After that, Angular handles everything inside the browser itself. No more `index.html` requests.”


### 📡 **Future Communication with Backend**

“In future pages like *Products*, only data (not HTML) will be fetched from the server—using REST API or AJAX. UI changes stay on the frontend.

This is how **Single Page Applications (SPA)** like Angular, React, Vue work.”


### 🙌 **End of the Doubt**

**Ravi Sir:**
“So, shall we continue with implementing Routing now?”

**Sahasransu (smiling):**
*“Yes sir, got full clarity!”*

### 🔔 **Beautiful Summary for Students**

| Concept              | Explanation                                                    |
| -------------------- | -------------------------------------------------------------- |
| First Page Load      | Browser loads index.html + Angular bundles from the server.    |
| Navigation Afterward | Only components change (client-side), no full page reload.     |
| Technology Used      | Router-outlet, Angular Routing.                                |
| Benefits             | Low server load, faster navigation, less bandwidth, better UX. |
| Backend Calls        | Only for API data (REST/AJAX), not full HTML pages.            |

## 🧑‍🍳 **Scene: The MasterChef Kitchen of Angular**

Welcome back to the kitchen, dear chefs!

We've already prepared a delicious Angular dish — the basics are working:
✅ Home Page
✅ Services
✅ About Us
✅ Contact
✅ Dashboard
✅ Product List & Details
✅ Shopping Cart (ready to integrate)

Everything is smooth… just like flipping through pages of a website — except they are **not full pages**, but **components loaded inside a single HTML file (index.html)** — THIS is the beauty of **Single Page Application (SPA)**.

### 🎯 **But today we’re adding a special spice — SECURITY!**

We now have a new menu item on the navbar called **“Protected”**.

🟢 When a user is **logged in**, and clicks **Protected**, it loads confidential data.
🔴 But if the user **logs out**, and then clicks "Protected" — they see **nothing**. The content is blocked.

This behavior — where only authorized users get access to certain views — is called:

> ✅ **Secure Routing** or **Route Guarding**
> ✅ Or in enterprise terms — **Security Trimming**

Just like a security guard at the company gate checks whether you have:

* ✅ Proper ID card,
* ✅ Right access level (Admin/User),
* ✅ Valid login session…

…Angular also appoints a **Route Guard** before loading a component.

## 💡 **Why Do We Need Route Guards?**

Imagine this scenario:

| Situation             | What Should Happen?                                             |
| --------------------- | --------------------------------------------------------------- |
| User is logged in     | ✅ Can access Protected routes (dashboard, orders, profile etc.) |
| User is not logged in | ❌ Should NOT access secured routes — redirect to Login          |
| User is Admin         | ✅ Can see admin-only components (like product management)       |
| User is Customer      | ❌ Cannot see admin pages                                        |

So Angular needs a **security bouncer** — a **Route Guard** — to decide:
**“Allow this component or block it?”**

## 🧭 **The Chef’s Roadmap to Build Secure Routing**

Let me open the notepad on the kitchen table and list our plan:

### 🍲 **1. Ingredients (Angular Concepts Required)**

| Ingredient                  | Why Needed?                              |
| --------------------------- | ---------------------------------------- |
| `RouterModule`              | Enables navigation & SPA routing         |
| `FormsModule`               | For login & register forms               |
| `CommonModule`              | For directives like *ngIf, *ngFor        |
| `AuthService`               | To check login status                    |
| `Route Guard (CanActivate)` | To allow/block component loading         |
| `RouterLink`                | For navigation in menu                   |
| `RouterOutlet`              | Acts as a placeholder for all components |

### 📜 **2. Recipe — Steps to Cook Secure Routing**

1. ✅ Create Login, Logout, Protected components
2. ✅ Create `AuthService` to hold `isLoggedIn()` logic
3. ✅ Add `Login()` and `Logout()` methods to update login status
4. ✅ Create a guard file using CLI:

   ```
   ng g guard auth
   ```
5. ✅ Inside `canActivate()`, check if user is logged in

   * If **yes → allow component to load**
   * If **no → redirect to login page**
6. ✅ Apply guard in `app-routing.module.ts`

   ```ts
   { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }
   ```
7. ✅ Test:

   * Login → Access protected → ✅ Works
   * Logout → Access protected → ❌ Not allowed


*"Look, my friends… Routing in Angular works like hotel rooms connected by doors. The main door (index.html) opens only once. After that, when you click Home, About, Products — you are not leaving the hotel — you're just moving between rooms."*

*"Now imagine one room is the Manager’s Office (Protected Component). Can anyone just walk in? No! A guard first checks — Are you an employee? Do you have the badge? If not, you're sent back to Reception (Login Page)."*

*"That guard in Angular is called a **Route Guard (CanActivate)**. If he says ‘yes’, the ProtectedComponent is displayed. If he says ‘no’, access is denied."*


## ✅ **What Happens Next?**

Once this security is set, we’ll move to:

* ✅ Role-Based Access (Admin vs User)
* ✅ Add to Cart Integration
* ✅ REST API + Backend Authentication


# Implementing Routing for an eStore App

Imagine your eStore is a mall. The **app shell** (AppComponent) is the mall building. `router-outlet` is the central atrium where each shop (component) appears when a customer follows a corridor (URL). Some shops require a membership card (AuthGuard). Others want product data handed to them at the door (Resolvers). Services are the staff (ProductService, AuthService) that fetch products and check membership.

We’ll implement routes for:

* SignIn (public)
* Register (public)
* Product List (public)
* Product Details (public, uses route param `:id`)
* Product Update (protected by AuthGuard + optional CanDeactivate)
* Product Remove (protected)
* Shopping Cart (protected)

We’ll also Learn:

* Router configuration (`RouterModule.forRoot`)
* `router-outlet` usage in `AppComponent`
* `routerLink` and programmatic navigation
* `AuthService`, `ProductService` skeletons
* `AuthGuard` and `CanDeactivate` sample
* Route Resolver example to prefetch product details


## Step 1 — App Shell (AppComponent) and router-outlet

Story: The mall has one big hall where shops appear.

**app.component.html**

```html
<nav class="navbar">
  <a routerLink="/">Home</a>
  <a routerLink="/products">Products</a>
  <a routerLink="/cart">Cart</a>
  <a routerLink="/signin" *ngIf="!auth.isLoggedIn()">Sign In</a>
  <a (click)="logout()" *ngIf="auth.isLoggedIn()">Logout</a>
</nav>

<main>
  <router-outlet></router-outlet>
</main>
```

**app.component.ts**

```ts
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/signin']);
  }
}
```


## Step 2 — Define Route Map (App Routing)

Story: Draw a city map so the mall knows which corridor leads where.

**app-routing.module.ts**

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin.component';
import { RegisterComponent } from './auth/register.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductEditComponent } from './products/product-edit.component';
import { ProductRemoveComponent } from './products/product-remove.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './services/auth.guard';
import { ProductResolver } from './services/product.resolver';
import { CanDeactivateGuard } from './services/can-deactivate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    resolve: { product: ProductResolver } // prefetch product
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
    resolve: { product: ProductResolver }
  },
  {
    path: 'products/:id/remove',
    component: ProductRemoveComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

**Story tip:** `resolve` ensures the details page already has product data — smoother UX.


## Step 3 — AuthService (simple skeleton)

Story: The security desk checks membership cards.

**services/auth.service.ts**

```ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _tokenKey = 'auth_token';

  constructor(private router: Router) {}

  login(email: string, password: string): Promise<boolean> {
    // Replace with real HTTP call
    return new Promise(res => {
      const ok = email === 'user@example.com' && password === 'p@ss';
      if (ok) localStorage.setItem(this._tokenKey, 'fake-jwt-token');
      res(ok);
    });
  }

  logout() {
    localStorage.removeItem(this._tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this._tokenKey);
  }
}
```

## Step 4 — AuthGuard (protect routes)

Story: Guard at the door checks token; if not allowed, redirect to SignIn.

**services/auth.guard.ts**

```ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isLoggedIn()) return true;
    // Save intended URL and redirect to signin
    this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
```

In the SigninComponent, after successful login, read `returnUrl` and navigate back.

 

## Step 5 — ProductService (data provider)

Story: Product staff fetch product lists and single product details from the warehouse (API).

**services/product.service.ts**

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product { id: number; name: string; price: number; description?: string; }

@Injectable({ providedIn: 'root' })
export class ProductService {
  private base = '/api/products';
  constructor(private http: HttpClient) {}

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);
  }
  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.base}/${id}`);
  }
  update(product: Product) {
    return this.http.put(`${this.base}/${product.id}`, product);
  }
  remove(id: number) {
    return this.http.delete(`${this.base}/${id}`);
  }
}
```

 

## Step 6 — Route Resolver (prefetch product)

Story: The concierge brings product data to the door so the user doesn’t wait.

**services/product.resolver.ts**

```ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService, Product } from './product.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<Product> {
  constructor(private ps: ProductService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    const id = +route.paramMap.get('id')!;
    return this.ps.get(id);
  }
}
```

In the details/edit components, read `route.data['product']`.

 

## Step 7 — CanDeactivate Guard (prevent accidental leave)

Story: If the user is editing product data and tries to leave, ask “Are you sure?”

**services/can-deactivate.guard.ts**

```ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
```

**product-edit.component.ts**

```ts
export class ProductEditComponent implements CanComponentDeactivate {
  formDirty = false;
  canDeactivate() {
    if (this.formDirty) {
      return confirm('You have unsaved changes. Leave?');
    }
    return true;
  }
}
```

 

## Step 8 — Components: small usage examples

**ProductListComponent (navigate to details)**

```ts
// list template
<div *ngFor="let p of products">
  <a [routerLink]="['/products', p.id]">{{p.name}}</a>
  <button (click)="edit(p.id)">Edit</button>
</div>

// class
edit(id: number) { this.router.navigate(['/products', id, 'edit']); }
```

**ProductDetailsComponent (use resolver data)**

```ts
constructor(private route: ActivatedRoute) {}
ngOnInit() {
  const product = this.route.snapshot.data['product'];
}
```

**SigninComponent (navigate back to returnUrl)**

```ts
login() {
  this.auth.login(this.email, this.password).then(ok => {
    if (ok) {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(returnUrl);
    } else {
      this.error = 'Invalid credentials';
    }
  });
}
```
 

## Step 9 — AppModule wiring

Story: Register the staff and guards in the mall directory.

**app.module.ts (important parts)**

```ts
@NgModule({
  declarations: [ /* components */ ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // contains RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard, ProductService, ProductResolver, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

 

## Step 10 — Test the flow (play the customer)

Story: Walk the mall like a user and verify each doorway.

1. Start app and open `/products`. List should load (ProductService.list).
2. Click product → `/products/5`: resolver prefetches, details shown (no spinner gap).
3. Try `/cart` when not logged in → routed to `/signin?returnUrl=/cart`.
4. Sign in with valid credentials → redirect back to cart.
5. Go to edit `/products/5/edit` → AuthGuard allows, CanDeactivate prompts on dirty form.
6. Try invalid URL → wildcard sends back to `/products`.

 

## Extra tips & best practices (mentor notes)

* **Lazy load** large feature modules: `loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)` — good for big apps.
* **Use route-level modules** for features (ProductsModule, AuthModule, CartModule).
* **Secure backend APIs** — client guards are UX; backend must validate auth/roles too.
* **Use JWT + interceptor** to attach tokens to HTTP requests.
* **Display loading indicators** during resolver/network fetches; or use `router.events` to show a spinner.
* **Use `BehaviorSubject` in AuthService** for reactive login state instead of localStorage polling.
 

## Quick mapping cheat-sheet (copy-paste)

* `router-outlet` = display area
* `RouterModule.forRoot(routes)` = main router map
* `routerLink` / `navigate` = navigation
* `:id` param = dynamic route param
* `resolve` = prefetch data
* `canActivate` = protect route entry
* `canDeactivate` = prevent accidental leave
* `wildcard '**'` = 404/fallback

 

