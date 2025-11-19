# 📘 **Angular 17 Assignment: Extend Catalog, ShoppingCart & Membership Modules with External REST API Integration**

## **📝 Problem Statement**

Your team is working on an **e-commerce web application** built using **Angular 17**. The core modules—**Catalog**, **ShoppingCart**, and **Membership**—were initially implemented using **local JSON data**. As the product prepares for real-world deployment, you are assigned to **integrate all three modules with external REST API services**.

You must upgrade the application to fetch, create, update, and delete data through RESTful endpoints provided by a backend system built in **Node.js + Express** (or any other available API server).

Your task is to **extend these modules to work fully with remote REST APIs**, ensuring reliability, proper error-handling, and seamless user experience.


# 🎯 **Objectives**

1. Replace all local in-memory/JSON data with **external REST API calls**.
2. Implement **Angular 17 HttpClient** for all network operations.
3. Apply **services**, **observables**, and **async pipe** correctly.
4. Introduce **loading indicators**, **global error handler**, and **toastr messages**.
5. Ensure **module-wise separation** and reusable components.
6. Add **form validations** for create/update screens.
7. Maintain a clean folder structure following Angular standards.

# 🧩 **Modules to Extend**

## ## **1️⃣ Catalog Module (Products)**

### **Current State**

* Displays static list of products from a JSON file.
* Basic product component and product detail screen.

### **Required Enhancements**

* Replace static JSON with API endpoints:

  ```
  GET    /api/products
  GET    /api/products/:id
  POST   /api/products
  PUT    /api/products/:id
  DELETE /api/products/:id
  ```

### **Tasks**

* Create `ProductService` using HttpClient.
* Implement `getAllProducts()`, `getProductById()`, `createProduct()`, `updateProduct()`, `deleteProduct()`.
* Use Observables + async pipe in UI.
* Add product **add/edit forms** with validation.
* Add **search & filter** on catalog page.
* Show **spinner** while loading.
* If API fails → show **error toast**.

## ## **2️⃣ Shopping Cart Module**

### **Current State**

* Cart items stored locally (array in service or localStorage).

### **Required Enhancements**

* Integrate with REST backend:

  ```
  GET    /api/cart?userid={id}
  POST   /api/cart/add
  DELETE /api/cart/remove/:itemid
  DELETE /api/cart/clear/:userid
  ```

### **Tasks**

* Create `CartService`.
* Store cart items on server, not locally.
* Update UI to reflect real-time changes from API.
* Add quantity updates with PATCH/PUT request.
* Show **total price** dynamically using RxJS.
* Implement **empty cart** feature with confirmation dialog.

## ## **3️⃣ Membership Module (User Accounts)**

### **Current State**

* Membership form and login with hardcoded JSON credentials.

### **Required Enhancements**

Replace local JSON with authentication REST APIs:

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile/:userid
PUT  /api/auth/profile/:userid
```

### **Tasks**

* Create `AuthService`.
* Implement:

  * Registration form
  * Login form
  * Profile retrieval
  * JWT-based authentication (optional bonus)
* Store JWT token in localStorage securely.
* Apply **AuthGuard** for protected routes.
* Use **Interceptors** to attach token in HTTP headers.

# ⚙️ **Technical Requirements**

### **Frontend**

* Angular 17
* Standalone components OR traditional modules (your choice)
* HttpClientModule
* Routing
* RxJS (map, switchMap, tap, catchError)
* Angular reactive forms
* Toastr or Material SnackBar for notifications

### **Backend API (Provided or to be created)**

You may use:

* Node.js + Express REST backend
* JSON Server
* Mock API platform (MockAPI.io)


# 📂 **Expected Folder Structure**

```
src/app/
    catalog/
        components/
        services/
        models/
    cart/
        components/
        services/
    membership/
        components/
        services/
        guards/
        interceptors/
    shared/
        components/
        models/
        utilities/
```


# 🧪 **Testing Requirements**

* Test API requests using Postman before integrating into Angular.
* Console errors should be eliminated.
* All forms must be validated (required, minlength, email, etc.).
* Verify routing + guards + token handling.


# 🎁 **Bonus Tasks (Optional)**

* Implement **lazy loading** for all three modules.
* Use **Angular Signals** for application state.
* Add **pagination** for product list.
* Add **address management** in Membership module.
* Add **wishlist** using separate API.

# 📌 **Final Deliverables**

1. Complete Angular 17 project with:

   * Catalog module connected to REST API
   * Cart module synced with backend
   * Membership module with login/registration/profile
2. API documentation using Swagger (optional)
3. Screenshots of:

   * Product list
   * Add/edit forms
   * Cart operations
   * Login/registration
4. GitHub repository with README.md

 