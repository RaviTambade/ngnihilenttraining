## ⚠️ Global State Management — concept in plain language

Think of a **store** as a global safe place where app-wide data lives:

* Instead of each component calling the auth service and duplicating logic, components **select** slices of state from the store.
* Store updates happen through **actions** → handled by **reducers** (pure functions) → optionally trigger side effects via **effects** (e.g., HTTP calls).
* Components subscribe to **selectors** to get the pieces of state they need.

Real-world mapping:

* `LoginComponent` dispatches `login` action.
* An effect talks to the auth API, returns success/failure.
* Reducer updates `auth` slice in store.
* `HeaderComponent`, `ProfileComponent`, `Guard` subscribe to `auth` selector and react immediately.


## 🧠 Why I call state management a *sensitive* topic

* If used **appropriately**, NgRx brings clarity, testability, and predictable data flow across a large app.
* If used **everywhere unnecessarily**, it becomes boilerplate, slows performance, and increases complexity.
* My advice (and what I always teach): **learn Angular thoroughly first**. Use services + DI for small/medium needs. Adopt NgRx when:

  * Your app has complex shared state across many unrelated components, **or**
  * You need time-travel debugging / very explicit state transitions, **or**
  * Your app is large and multiple teams work on different features that depend on the same state.

## 🛠️ Practical picture — Auth example (simple architecture)

* Old way: `LoginComponent` and `RegisterComponent` both inject `AuthService` → directly call HTTP.
* NgRx way:

  * Components dispatch `Auth/Login` or `Auth/Register` actions.
  * `AuthEffects` makes the HTTP calls and dispatches `Auth/LoginSuccess` or `Auth/LoginFailure`.
  * `authReducer` updates store (token, user).
  * Components use `store.select(authSelector)` to read current user/ token.
  * Guards, header, and other components automatically react to store changes.

So instead of injecting `AuthService` everywhere, components talk to the **store** — cleaner and central.


## 🔁 Store internals — quick vocabulary

* **Action**: "User clicked login" (plain object with type + payload).
* **Reducer**: Pure function that takes current state + action → returns new state.
* **Selector**: Function to derive a piece of state (e.g., `selectAuthUser`).
* **Effect**: Side-effect handler (listen for actions, call APIs, dispatch follow-ups).
* **Facade (recommended)**: A thin service wrapping store operations to simplify component code and reduce coupling.



## ✅ Best practices I always teach

* Start with services and DI. Only introduce NgRx when needed.
* Keep reducers pure and small.
* Use effects for side-effects (HTTP, storage).
* Use selectors for performance (memoized selectors).
* Consider a **facade** layer to simplify component-store interaction.
* Keep the store shape simple and normalized where helpful.
