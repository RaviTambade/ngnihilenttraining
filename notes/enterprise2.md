# 🎬 ** Sarthak Learns the Importance of Component Communication in Angular**

Sarthak was sitting in the lab, notebook open, ready to absorb today’s session.
I (the mentor) walked in smiling and said:

## 🌟 **“Today’s agenda is VERY interesting.”**

Before we jump into the hard-core Angular stuff, I asked Sarthak:

> “Do you remember yesterday when we spoke about design patterns?”

Sarthak nodded.

> “Good. Because what we are learning today is not *just Angular*.
> It is pure *design pattern* in action.”

Then I continued.

# 🧩 **Observer Pattern → RXJS → Angular Communication**

I explained:

> “Sarthak, when you learn `async-await` in .NET or Java, you learn **asynchronous thinking**.
> In Angular, the same mindset is achieved through **RxJS**.”

And then I wrote three big keywords on the board:

```
Observer
Subject
Subscribe
```

Sarthak said:

> “Sir, I’ve seen `.subscribe()` so many times… but never understood the ‘why’.”

I smiled:

> “Perfect. Today you will understand it emotionally, not technically.”

# 📌 **Before Going Deep: A Good Resource**

I told him:

> “By the way, Sarthak, bookmark this:
> **Refactoring Guru – Design Patterns**
> It is the Harvard of design patterns.
> When you read it, your thinking as an engineer will transform.”

Then I closed the tab on purpose.

> “But now back to our story.”

# 🎯 **Today’s Real Agenda:

Understanding Component Communication Using RxJS (Observer Pattern)**

I said:

> “We want to simulate a real enterprise scenario.”

So I drew two boxes:

```
MASTER component        SLAVE component
```

Then I emphasized:

> “These components are **NOT nested**.
> No parent → child relationship.
> No @Input, no @Output, no emit.”

Sarthak’s eyes widened.

# 🛠️ **Flashback – Catalog Module**

I reminded him:

> “You already know nested communication.
> List Component → Details Component → Counter Component”

He remembered:

* Parent → Child through `@Input()`
* Child → Parent through `@Output() + emit()`
* Grandchild → Parent using event delegation

And he smiled:

> “Yes sir, I remember the counter example!”

# 🚫 **But today’s challenge is different**

I said:

> “Imagine this…
> You are building a dashboard.”

Then I drew this on the board:

```
--------------------------------------------------------
| Orders List             |    Order Details           |
| (left side)             |    (right side)            |
--------------------------------------------------------
```

Both components are siblings.
They live on the **same page**, at the **same level**.

There is **no parent-child** between them.

I told Sarthak:

> “In a dashboard, routing is not useful.
> Because both components are already present on screen.”

He nodded.


# 🎬 **Real Scenario: A Sales Dashboard**

On the left side: **Order List**

```
OrderId   Customer   Date
101       Kajal       01-Oct
102       Sachin     03-Oct
103       Ramesh     05-Oct
```

On the right side: **Order Details**

Initially empty.

Then I said:

> “Now imagine…
> When you click ‘Kajal’, the details must appear *instantly* on the right.”

```
Customer: Kajal Tambade
Order ID: 101
Status: Shipped
Total Amount: ₹4000

Items:
- Jasmine      Qty: 20    Price: ₹3000
- Rose         Qty: 10    Price: ₹1000
```

Sarthak interrupted:

> “Sir, routing can’t help here.
> @Input cannot help because they are not nested.
> @Output cannot help because they are not parent-child.”

I said:

> “Correct.
> Then who will help?”

And I wrote on the board:

```
RXJS SUBJECT = Communication Bridge
```

Sarthak said:

> “Sir… observer pattern?”

I smiled:

> “NOW you see it!
> Angular uses Observer Pattern through **RxJS** to connect sibling components.”

# 🧠 **Provider & Consumer Analogy**

I continued:

> “Think like this:

* Order List → **Provider**
  (It provides events like `orderSelected`)

* Order Details → **Consumer**
  (It listens and reacts)

And the bridge between them is **RXJS Subject**.

```
Provider (OrderList) --> Subject --> Consumer (OrderDetails)
```

Just like:

* Publisher → Event Bus → Subscriber
* Radio Station → Radio Signal → Radio Listener
* WhatsApp User → Server → Another User

Sarthak said:

> “Sir, this is beautiful.
> So RxJS Subject = Event Bus?”

I said:

> “Exactly.”

I summarized:

1. Dashboards require **real-time UI updates**
2. Components are **siblings**, not nested
3. Need a **centralized event communication system**
4. Observer pattern fits naturally
5. RxJS Subject is built exactly for this

Sarthak said:

> “Sir, now I understand why Angular and RxJS go together.”
