 # ** Understanding Why We Need Software Testing**

*Imagine you and your students are sitting in a classroom, and I begin the session like a story…*


## 🎬 **Scene 1 — The Birth of a Product**

When a software product is being developed, there is only *one* expectation from the customer:

👉 **“Give me something that works… always.”**

No runtime errors.
No crashes.
No surprises.

Just a **0-defect product**.

And trust me, no company wants their customers to become their testers.
So, how do we ensure this?

By treating **quality** not as a final step but as a **culture** inside the team.

This is where **Software Testing** comes in.

## 🌱 **Scene 2 — SDLC vs STLC (Two Lifecycles Running in Parallel)**

You already know the **Software Development Lifecycle (SDLC)** — requirement gathering, design, development, testing, deployment.

But do you know something?

There is another cycle running *parallel* to SDLC…

### 💡 **Software Testing Life Cycle (STLC)**

And here's the twist:

👉 **Testing doesn't start after development.
Testing starts the day discussions begin.**

When the business analyst is gathering requirements, the QA person is sitting right there asking:

* “How will this feature behave?”
* “What happens if the user enters wrong data?”
* “What should not happen?”

In simple words:

- 📌 **SDLC decides WHAT to build.**
- 📌 **STLC decides HOW to verify what we build.**

## 🏛️ **Scene 3 — Waterfall Days: Use Cases & Test Cases**

In traditional Waterfall projects, everything was document-heavy.

The Solution Architect or SME used to write **Use Cases**:

* Actors
* Pre-conditions
* Post-conditions
* Main flows
* Alternate flows

Now the QA team picked these use cases and created **Test Cases**.

For example:

* **Use Case:** Add to Cart
* **Test Case:** Check if clicking “Add to Cart” increases item count by one
* **Test Case:** Check adding a product without login
* **Test Case:** Check cart persists on page refresh

Everything was planned upfront.

## 🚀 **Scene 4 — The Agile Revolution: User Stories Replace Use Cases**

Then came Agile.

Customer demands change frequently.
Requirements evolve every sprint.
We can’t freeze documentation for months.

And so…

- Use Cases were replaced by User Stories
- Documentation became lighter
- Testing became continuous

A typical user story looks like:

> **As a customer, I want to add products to my cart so that I can purchase them later.**

For each story, the QA team writes:

* **Acceptance Criteria**
* **Positive test cases**
* **Negative test cases**
* **Edge cases**

These test cases are then reviewed by QA leads, automation testers, and developers.

## 🧩 **Scene 5 — Levels of Testing (Where You Fit In)**

Once test cases are refined, they are categorized into:

1. **Unit Tests** (developer responsibility)
2. **Integration Tests**
3. **System Tests**
4. **User Acceptance Tests (UAT)**

Now comes your question:

> *“If I am working individually as a front-end application developer, should I also do testing?”*

And the mentor smiles and answers…

## 🎓 **Scene 6 — Developer’s Responsibility (Especially Front-End)**

YES.

If you’re a front-end developer, your duty includes:

### ✅ **Unit Testing**

Using Jasmine + Karma in Angular
(or Jest / Vitest in other frameworks)

You test:

* Components
* Services
* Pipes
* Directives
* Forms

### ✅ **Integration Testing**

* Component + Service working together
* API call integration with UI

### ✅ **End-to-End (E2E) Testing**

Playwright or Cypress simulates the real user:

* Searching product
* Adding product to cart
* Checkout
* Payment
* Order tracking

This ensures **zero defects** reach production.


## 🌟 **Scene 7 — Why Testing Matters (The Heart of the Story)**

A product shipped without testing is like:

* Releasing a car without brakes
* Flying a plane without instruments
* Selling a house without a foundation

Testing is not a task…

👉 **It is your promise to the end user.**
👉 **It is your shield against customer complaints.**
👉 **It is your reputation as a developer.**

And in modern engineering:

- 📌 Developers test.
- 📌 QA tests.
- 📌 Automation tests.
- 📌 and CI/CD ensures tests always run before deployment.

Testing is teamwork.
Testing is culture.
Testing is responsibility.



## **Final Mentor Message**

> “A developer who doesn’t test is like a writer who never reads their own story.
> Testing is not about finding bugs; it is about **preventing embarrassment** in front of your customer.
>
> The more you test, the fewer surprises you get in production.
>
> And that is how we deliver a **0-defect product**, together.”

 

# 🌟 **Understanding package.json, Angular Build System & Testing**

*“Beta, sit down… today we are going to open a small magic box in Angular — the `package.json` file.
This file looks simple, but it controls the entire destiny of your Angular application.”*


## 🎁 **1. The Magic Box: package.json**

Imagine you created a new Angular project using:

```
ng new my-app
```

Inside this project, you open a file: **package.json**.

### Mentor Speaks:

> *"Whenever I open `package.json`, I feel like I am reading the list of ingredients a chef needs to cook a great dish."*

Inside this file you will always find two big shelves:

## 📦 **2. Shelf 1: Dependencies (What the App Uses to Run)**

These are the libraries your actual application needs **at runtime**.

Mentor example:

> “If your Angular app is running in the browser, these are the exact libraries helping it breathe.”

For example:

* `@angular/core`
* `@angular/common`
* `@angular/router`
* `rxjs`

These are **mandatory for the running application**.


## 🛠️ **3. Shelf 2: DevDependencies (What You Need to Build & Test)**

These are tools needed only during development — not when your app runs in production.

Mentor example:

> “Beta, think of these like the carpenter’s tools. They help build the furniture but don’t go with the customer.”

Inside devDependencies you will see:

* `typescript` — TypeScript compiler
* `@angular-devkit/build-angular` — defines bundling, minification, and build pipeline
* `@angular/cli` — powers `ng new`, `ng serve`, `ng generate`, `ng add`

### 🧠 Why do we need them?

Because Angular is written in **TypeScript**, but the browser understands only **JavaScript**.
So:

```
ts file ---> TS Compiler ---> js files ---> bundle ---> minified js
```

This entire journey is handled by devDependencies.


# 🎨 **4. The Build Pipeline Story (Bundling, Minification, Uglify)**

Mentor says:

> “When you write 200 files, will you send 200 files to the browser? No! You pack them like a lunchbox.”

So Angular does:

- ✔ Bundling : Merges many JS files into 1 or few bundles.
- ✔ Minification: Removes unnecessary spaces and comments.

### ✔ Uglification

Renames long variables into 1–2 character names (`username` → `u`).

All this is orchestrated by:

```
@angular-devkit/build-angular
```

This devkit is like the **build engineer of your project**.

# 🔧 **5. Angular CLI – The Command Magician**

You noticed that nowadays we use:

```
ng add
ng generate
ng serve
ng build
ng new
```

All these commands exist because of:

```
@angular/cli
```

Mentor example:

> “CLI is your friend who does all the hard work for you — creating files, scaffolding folders, running builds.”

So `npm install` is not used directly now; instead we use:

* `ng add` to install Angular libraries
* `ng generate` to create components, services, pipes
* `ng serve` to start the app

# 🧪 **6. Zero Defect Product – Why Testing Matters**

Software engineering has a dream:

> **Deliver a 0-defect product to your customer.**

Meaning:

* No runtime errors
* No unexpected crashes
* No broken UI behavior

To achieve that, we follow **Software Testing Lifecycle (STLC)**.

In earlier days (Waterfall model), we used:

* **Use Cases**
* Test cases written by QA team

In Agile methodology:

* **User Stories** (Product Backlog Items)
* Test cases correspond to each user story
* Continuous development & continuous testing

# 📘 **7. Types of Tests in Angular Projects**

Under STLC, test cases are divided into:

1. **Unit Tests** (developer responsibility)
2. **Integration Tests**
3. **System Tests**
4. **User Acceptance Tests (UAT)**

Angular automatically prepares you for **Unit testing** the moment you create a project.


# 🧩 **8. Why Does Angular Generate .spec.ts Files?**

When you run:

```
ng generate component chart
```

Angular creates:

```
chart.component.ts          // component logic
chart.component.html        // template
chart.component.css         // style
chart.component.spec.ts     // unit test
```

The `.spec.ts` file is where **Jasmine** runs your unit test for that component.

# 🔬 **9. Jasmine & Karma — Your Testing Toolkit**

Inside `devDependencies` you’ll find:

* `jasmine-core`
* `karma`
* `karma-jasmine`
* `karma-chrome-launcher`
* `karma-coverage`

Mentor says:

> “These are the heroes of Angular testing.
> Jasmine writes the test.
> Karma runs the test in Chrome browser.”

That’s why every Angular project created with `ng new` has a ready-made testing setup.


# 🎓 **Final Mentor Message**

> *“Beta, as an Angular developer, you are not just writing code…
> You are creating software meant to run for thousands of users without a single error.
> `package.json` is your project’s heartbeat.
> DevDependencies are your tools.
> Jasmine & Karma are your quality guards.
> And Angular CLI is your magic wand.
>
> Master them… and you can build any enterprise-grade front-end with confidence.”*



# 🎭 **The Kingdom of Angular and the Guardians Jasmine & Karma**

*“Beta, imagine Angular as a big royal kingdom.
Every component, every service, every pipe is a citizen in that kingdom.
Now, the King (developer) wants to ensure that each citizen behaves properly — always, without fail.”*

So the king appoints *two guardians*:

# 🧚‍♀️ **1. Jasmine — The Wise Judge**

Jasmine is the **judge** of the Angular kingdom.

She listens to every story (test case) and declares:

-  ✔ **Pass** → “Yes, this citizen behaves correctly.”
- ❌ **Fail** → “No, this citizen must be punished (fixed)!”

### Jasmine’s courtroom language:

-  **describe()** → Courtroom session
-  **it()** → Individual case to judge
-  **expect()** → Jasmine’s question: “Do you expect this result?”

Example in Jasmine language:

```ts
describe('CalculatorComponent', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

Mentor’s voice:

> *“Whenever you write `expect()`, you are telling Jasmine what *should* happen.”*


# ⚔️ **2. Karma — The Brave Warrior**

Jasmine can judge, but she needs someone to:

* Bring her witnesses
* Run around the browser
* Execute tests
* Show results live

That’s **Karma**.

### Karma is the **Test Runner**

He launches a real browser (like Chrome), takes Jasmine’s test cases, and says:

> “Jasmine ji, I executed these tests on actual Angular code.
> Here are the results.”

Karma uses:

* ✔ ChromeLauncher – to open Chrome
* ✔ Jasmine HTML reporter – to display results
* ✔ Coverage reporter – to show which code was tested

So Jasmine is the brain 🧠
Karma is the muscle 💪

# 🏗️ **3. The Birth of a New Citizen (.spec.ts)**

Every time you create:

```
ng generate component student
```

You get:

* `student.component.ts` → actual citizen
* `student.component.spec.ts` → test file (the guardian's file)

This `.spec.ts` file is Jasmine’s **courtroom**, where it will judge that component.

# 🔮 **4. How a Test Case Lives (The Cycle)**

Let’s follow a single test case from birth to execution.

## Step 1 — Developer writes test

Inside `.spec.ts`:

```ts
describe('StudentComponent', () => {
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
```

## Step 2 — Jasmine reads it

Jasmine says:

> “I expect this component to be created successfully.”

## Step 3 — Karma runs the test

Karma opens Chrome → loads Angular → loads Jasmine → executes tests

## Step 4 — Browser shows results

You see a green ✔ or red ❌ in the browser console.

Mentor says:

> “Green means your citizen behaves.
> Red means your citizen needs discipline.”

# 🧪 **5. Types of Jasmine Tests in Angular**

### 1️⃣ **Component Tests**

Checks:

* Data binding
* Methods
* UI state changes

### 2️⃣ **Service Tests**

Checks:

* Business logic
* API calls (using HttpTestingController)

### 3️⃣ **Pipe Tests**

Checks:

* Transform() results

### 4️⃣ **Directive Tests**

Checks:

* DOM behavior

# 📊 **6. Karma Coverage — The King’s Report Card**

At the end, Karma gives the king a report:

* How many lines of code tested?
* How many branches tested?
* How many components tested?

More coverage = more confidence.

Mentor simple line:

> “If you want a *zero-defect* product, your test coverage must climb as high as possible.”

# 🏰 **7. Why Jasmine + Karma Is a Perfect Pair**

Mentor analogy:

### Jasmine = the Judge

* Understands what to test
* Defines expectations
* Evaluates results

### Karma = the Messenger & Warrior

* Runs the tests
* Opens browsers
* Shows results
* Generates coverage reports

Together they build your **testing kingdom**.


# 🎓 **Final Mentor Message**

> *“Beta, remember this: no matter how good you think your code is,
> a component that isn’t tested is like a citizen who never went through training.
>
> Jasmine trains them.
> Karma tests them in the battlefield (browser).
>
> When both approve…
> only then your Angular kingdom becomes a true **zero-defect empire**.”*

# ✅ **StudentComponent — 10 Test Cases (student.component.spec.ts)**


Clean, practical, classroom-friendly `.spec.ts` file** containing **10 test cases** for a sample Angular component called `StudentComponent`.

This is the *exact kind* of file students should study to understand real-world unit testing with **Jasmine + Karma**.

### *(Copy–paste friendly, production-style tests)*

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1️⃣ Component should be created
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // 2️⃣ Default student count should be zero
  it('should have 0 students initially', () => {
    expect(component.students.length).toBe(0);
  });

  // 3️⃣ Should add a student
  it('should add a student', () => {
    component.studentName = 'Ravi';
    component.addStudent();
    expect(component.students.length).toBe(1);
    expect(component.students[0]).toBe('Ravi');
  });

  // 4️⃣ Should not add an empty student name
  it('should not add an empty student name', () => {
    component.studentName = '';
    component.addStudent();
    expect(component.students.length).toBe(0);
  });

  // 5️⃣ Should clear the student name after adding
  it('should clear input after adding student', () => {
    component.studentName = 'Ketaki';
    component.addStudent();
    expect(component.studentName).toBe('');
  });

  // 6️⃣ Should remove a student by index
  it('should remove a student', () => {
    component.students = ['Ravi', 'Amit', 'Sonal'];
    component.removeStudent(1);
    expect(component.students).toEqual(['Ravi', 'Sonal']);
  });

  // 7️⃣ Should not fail if removing a student with invalid index
  it('should not remove if index is invalid', () => {
    component.students = ['A', 'B'];
    component.removeStudent(5);
    expect(component.students.length).toBe(2);
  });

  // 8️⃣ Should display student count correctly
  it('should return correct student count', () => {
    component.students = ['A', 'B', 'C'];
    expect(component.totalStudents()).toBe(3);
  });

  // 9️⃣ Should update title dynamically
  it('should update the title when set', () => {
    component.title = 'Student Manager';
    expect(component.title).toContain('Student');
  });

  // 🔟 Should emit event when student is selected
  it('should emit selected student event', () => {
    spyOn(component.studentSelected, 'emit');
    component.onSelect('Ravi');
    expect(component.studentSelected.emit).toHaveBeenCalledWith('Ravi');
  });
});
```

# 🎓 **Bonus: StudentComponent (Reference Implementation)**

*(To make the tests meaningful, here is the matching component code.)*

```ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  template: `
    <h3>{{ title }}</h3>
    <input [(ngModel)]="studentName" placeholder="Enter name">
    <button (click)="addStudent()">Add</button>

    <ul>
      <li *ngFor="let s of students; index as i" (click)="onSelect(s)">
        {{ s }} <button (click)="removeStudent(i)">x</button>
      </li>
    </ul>
  `
})
export class StudentComponent {
  title = 'Student List';
  studentName = '';
  students: string[] = [];

  @Output() studentSelected = new EventEmitter<string>();

  addStudent() {
    if (this.studentName.trim().length === 0) return;
    this.students.push(this.studentName);
    this.studentName = '';
  }

  removeStudent(index: number) {
    if (index >= 0 && index < this.students.length) {
      this.students.splice(index, 1);
    }
  }

  totalStudents() {
    return this.students.length;
  }

  onSelect(student: string) {
    this.studentSelected.emit(student);
  }
}
```

# 🌟 **Your 10 Test Cases Cover:**

| #  | Category           | Test Case               |
| -- | ------------------ | ----------------------- |
| 1  | Component Creation | Should create component |
| 2  | Initialization     | List starts empty       |
| 3  | Functionality      | Add student             |
| 4  | Validation         | Reject empty name       |
| 5  | UI/State           | Clear input             |
| 6  | Functionality      | Remove student          |
| 7  | Error Handling     | Invalid index removal   |
| 8  | Logic              | Count students          |
| 9  | Property Binding   | Title update            |
| 10 | Event Handling     | Emit selected event     |



# 🎓 Mentor Line

> *“Unit tests are the smallest promises your component must fulfill.
> These 10 tests make your component brave enough to enter any production battlefield.”*


# 🧪 **Service Under Test: StudentService**

- ✔ CRUD operations
- ✔ Error handling
- ✔ Query params
- ✔ POST/PUT/DELETE

### ✔ Mocking HttpClient


# ✅ **10 Test Cases — student.service.spec.ts**

```ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentService } from './student.service';
import { Student } from './student.model';

describe('StudentService', () => {

  let service: StudentService;
  let httpMock: HttpTestingController;

  const mockStudents: Student[] = [
    { id: 1, name: 'Ravi', age: 21 },
    { id: 2, name: 'Amit', age: 22 }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentService]
    });

    service = TestBed.inject(StudentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // 1️⃣ Should retrieve all students
  it('should fetch all students', () => {
    service.getStudents().subscribe(students => {
      expect(students.length).toBe(2);
      expect(students).toEqual(mockStudents);
    });

    const req = httpMock.expectOne('http://localhost:3000/students');
    expect(req.request.method).toBe('GET');
    req.flush(mockStudents);
  });

  // 2️⃣ Should retrieve a student by id
  it('should fetch student by ID', () => {
    service.getStudent(1).subscribe(student => {
      expect(student).toEqual(mockStudents[0]);
    });

    const req = httpMock.expectOne('http://localhost:3000/students/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockStudents[0]);
  });

  // 3️⃣ Should create a student
  it('should create a student', () => {
    const newStudent: Student = { id: 3, name: 'Ketaki', age: 23 };

    service.addStudent(newStudent).subscribe(student => {
      expect(student).toEqual(newStudent);
    });

    const req = httpMock.expectOne('http://localhost:3000/students');
    expect(req.request.method).toBe('POST');
    req.flush(newStudent);
  });

  // 4️⃣ Should update a student
  it('should update a student', () => {
    const updatedStudent: Student = { id: 1, name: 'Ravi Updated', age: 21 };

    service.updateStudent(updatedStudent).subscribe(student => {
      expect(student.name).toBe('Ravi Updated');
    });

    const req = httpMock.expectOne('http://localhost:3000/students/1');
    expect(req.request.method).toBe('PUT');
    req.flush(updatedStudent);
  });

  // 5️⃣ Should delete a student
  it('should delete a student', () => {
    service.deleteStudent(1).subscribe(response => {
      expect(response).toEqual({});
    });

    const req = httpMock.expectOne('http://localhost:3000/students/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  // 6️⃣ Should handle error when fetching students
  it('should handle error on getStudents', () => {
    service.getStudents().subscribe({
      next: () => fail('should have failed with 500 error'),
      error: error => {
        expect(error.status).toBe(500);
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/students');
    req.flush('Server Error', { status: 500, statusText: 'Internal Server Error' });
  });

  // 7️⃣ Should fetch students with a query param
  it('should fetch students by age using params', () => {
    service.getStudentsByAge(21).subscribe(students => {
      expect(students.length).toBe(1);
      expect(students[0].id).toBe(1);
    });

    const req = httpMock.expectOne('http://localhost:3000/students?age=21');
    expect(req.request.method).toBe('GET');
    req.flush([mockStudents[0]]);
  });

  // 8️⃣ Should return empty list if server returns empty
  it('should return empty array if no students found', () => {
    service.getStudents().subscribe(students => {
      expect(students.length).toBe(0);
    });

    const req = httpMock.expectOne('http://localhost:3000/students');
    req.flush([]);
  });

  // 9️⃣ Should search student by name
  it('should search students by name', () => {
    service.searchStudents('Ravi').subscribe(result => {
      expect(result.length).toBe(1);
      expect(result[0].name).toBe('Ravi');
    });

    const req = httpMock.expectOne('http://localhost:3000/students?name=Ravi');
    expect(req.request.method).toBe('GET');
    req.flush([mockStudents[0]]);
  });

  // 🔟 Should ensure correct headers are sent
  it('should send headers in POST request', () => {
    const newStudent: Student = { id: 4, name: 'Sonal', age: 20 };

    service.addStudent(newStudent).subscribe();

    const req = httpMock.expectOne('http://localhost:3000/students');
    expect(req.request.headers.get('Content-Type')).toBe('application/json');
    req.flush(newStudent);
  });
});
```


# 🎯 **What These 10 Test Cases Teach Students**

| #  | Focus Area     | Skill                      |
| -- | -------------- | -------------------------- |
| 1  | GET            | Reading list               |
| 2  | GET by ID      | API param handling         |
| 3  | POST           | Creating records           |
| 4  | PUT            | Updating records           |
| 5  | DELETE         | Removing records           |
| 6  | Error Handling | Fail path testing          |
| 7  | Query Params   | GET with filters           |
| 8  | Empty Response | Edge case                  |
| 9  | Searching      | API filtering              |
| 10 | Headers        | Verifying request metadata |

Your students learn **full-service testing** in one file.


# 📘 **StudentService (Reference Implementation)**

*(Included only for clarity—remove in real exam use)*

```ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}/${id}`);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.url}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getStudentsByAge(age: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}?age=${age}`);
  }

  searchStudents(name: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}?name=${name}`);
  }
}
```

# 🎓 Mentor Closing Line

> *“Services are the brain of your Angular app.
> Unit tests are the MRI scans that show whether this brain is functioning correctly.”*


# ✅ **10 Angular Pipe Test Cases (.spec.ts)**

Assume we have multiple example pipes.
Each test case is **independent**, so you can copy/paste into a single file or separate files.


# 🧪 **1. CapitalizePipe**

Turns `"hello world"` → `"Hello world"`

### **capitalize.pipe.spec.ts**

```ts
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();

  it('should capitalize the first letter', () => {
    expect(pipe.transform('hello world')).toBe('Hello world');
  });

  it('should return empty string if input is null', () => {
    expect(pipe.transform(null as any)).toBe('');
  });
});
```

# 🧪 **2. TrimPipe**

Removes whitespace

### **trim.pipe.spec.ts**

```ts
import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  const pipe = new TrimPipe();

  it('should trim leading and trailing spaces', () => {
    expect(pipe.transform('   Hi Angular   ')).toBe('Hi Angular');
  });

  it('should return empty string for undefined', () => {
    expect(pipe.transform(undefined as any)).toBe('');
  });
});
```

# 🧪 **3. ReversePipe**

Reverses strings

### **reverse.pipe.spec.ts**

```ts
import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  const pipe = new ReversePipe();

  it('should reverse a string', () => {
    expect(pipe.transform('abcd')).toBe('dcba');
  });

  it('should return empty string if input is empty', () => {
    expect(pipe.transform('')).toBe('');
  });
});
```

# 🧪 **4. ArrayLengthPipe**

Returns length of array

### **array-length.pipe.spec.ts**

```ts
import { ArrayLengthPipe } from './array-length.pipe';

describe('ArrayLengthPipe', () => {
  const pipe = new ArrayLengthPipe();

  it('should return array length', () => {
    expect(pipe.transform([1, 2, 3])).toBe(3);
  });

  it('should return 0 when array is null', () => {
    expect(pipe.transform(null as any)).toBe(0);
  });
});
```

# 🧪 **5. SortPipe**

Sorts an array

### **sort.pipe.spec.ts**

```ts
import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  const pipe = new SortPipe();

  it('should sort numbers ascending', () => {
    expect(pipe.transform([3, 1, 2])).toEqual([1, 2, 3]);
  });

  it('should return same array if invalid input', () => {
    expect(pipe.transform('abc' as any)).toBe('abc' as any);
  });
});
```

# 🧪 **6. CurrencyFormatPipe**

Formats number → `"₹1,500.00"`

### **currency-format.pipe.spec.ts**

```ts
import { CurrencyFormatPipe } from './currency-format.pipe';

describe('CurrencyFormatPipe', () => {
  const pipe = new CurrencyFormatPipe();

  it('should format number with rupee symbol', () => {
    expect(pipe.transform(1500)).toBe('₹1,500.00');
  });

  it('should handle null gracefully', () => {
    expect(pipe.transform(null as any)).toBe('₹0.00');
  });
});
```


# 🧪 **7. MaskEmailPipe**

`"john.doe@gmail.com"` → `"j***@gmail.com"`

### **mask-email.pipe.spec.ts**

```ts
import { MaskEmailPipe } from './mask-email.pipe';

describe('MaskEmailPipe', () => {
  const pipe = new MaskEmailPipe();

  it('should mask email correctly', () => {
    expect(pipe.transform('john@gmail.com')).toBe('j***@gmail.com');
  });

  it('should return empty string for invalid email', () => {
    expect(pipe.transform('notAnEmail')).toBe('');
  });
});
```


# 🧪 **8. FilterPipe**

Filters array based on search text

### **filter.pipe.spec.ts**

```ts
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('should filter list based on matching text', () => {
    const result = pipe.transform(['Apple', 'Banana', 'Apricot'], 'Ap');
    expect(result).toEqual(['Apple', 'Apricot']);
  });

  it('should return full array if search is empty', () => {
    expect(pipe.transform(['A'], '')).toEqual(['A']);
  });
});
```


# 🧪 **9. SafeHtmlPipe**

Uses `DomSanitizer.bypassSecurityTrustHtml`

### **safe-html.pipe.spec.ts**

```ts
import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafeHtmlPipe(sanitizer);
  });

  it('should sanitize html content', () => {
    const result = pipe.transform('<b>Hello</b>');
    expect(result).toBeTruthy();
  });

  it('should return null if input is null', () => {
    expect(pipe.transform(null as any)).toBeNull();
  });
});
```


# 🧪 **10. DateAgoPipe**

`(5 minutes ago, 2 hours ago, etc.)`

### **date-ago.pipe.spec.ts**

```ts
import { DateAgoPipe } from './date-ago.pipe';

describe('DateAgoPipe', () => {
  const pipe = new DateAgoPipe();

  it('should display "just now" for current time', () => {
    expect(pipe.transform(new Date())).toBe('just now');
  });

  it('should return "1 day ago"', () => {
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
    expect(pipe.transform(yesterday)).toBe('1 day ago');
  });
});
```


# ✅ **Summary — 10 Pipe Test Cases Covered**

| Pipe                  | Behaviour Tested                   |
| --------------------- | ---------------------------------- |
| 1. CapitalizePipe     | first-letter capitalization + null |
| 2. TrimPipe           | whitespace removal                 |
| 3. ReversePipe        | string reversal                    |
| 4. ArrayLengthPipe    | array length + null                |
| 5. SortPipe           | array sort + wrong input           |
| 6. CurrencyFormatPipe | numeric formatting                 |
| 7. MaskEmailPipe      | masking + invalid email            |
| 8. FilterPipe         | filtering logic                    |
| 9. SafeHtmlPipe       | sanitizer integration              |
| 10. DateAgoPipe       | time durations                     |

This covers **string pipes**, **array pipes**, **sanitizer pipes**, **date pipes**, **error-handling**, and **edge cases**.



 # High-quality Angular directive test cases** using **Jasmine + Karma**.

Each test case is **unique**, covers **different directive behaviors**, and uses **TestHostComponent** patterns (the recommended way).


- ✅ 10 different directives
- ✅ 2 test cases each (total 20 tests)
 

# 🎯 **1. HighlightDirective**

Changes background color on hover

### **highlight.directive.spec.ts**

```ts
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<p appHighlight="yellow">Test Text</p>`
})
class TestHostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestHostComponent]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should apply yellow background on mouseenter', () => {
    const el = fixture.debugElement.query(By.css('p'));
    el.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(el.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should remove background on mouseleave', () => {
    const el = fixture.debugElement.query(By.css('p'));
    el.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(el.nativeElement.style.backgroundColor).toBe('');
  });
});
```

 

# 🎯 **2. UppercaseDirective**

Automatically converts input to uppercase

### **uppercase.directive.spec.ts**

```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UppercaseDirective } from './uppercase.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input type="text" appUppercase />`
})
class TestHost {}

describe('UppercaseDirective', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UppercaseDirective, TestHost]
    });

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should convert input to uppercase on keyup', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'test';
    input.dispatchEvent(new Event('keyup'));
    expect(input.value).toBe('TEST');
  });

  it('should keep empty string unchanged', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = '';
    input.dispatchEvent(new Event('keyup'));
    expect(input.value).toBe('');
  });
});
```

# 🎯 **3. DisableButtonDirective**

Disables button based on boolean input

### **disable-button.directive.spec.ts**

```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DisableButtonDirective } from './disable-button.directive';

@Component({
  template: `<button [appDisableButton]="true">Submit</button>`
})
class TestHost {}

describe('DisableButtonDirective', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisableButtonDirective, TestHost]
    });

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should disable the button', () => {
    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(btn.disabled).toBeTrue();
  });

  it('should enable the button when false', () => {
    fixture.componentInstance['isDisabled'] = false;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(btn.disabled).toBeFalse();
  });
});
```
# 🎯 **4. AutofocusDirective**

Focuses input automatically

### **autofocus.directive.spec.ts**

```ts
import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input appAutofocus />`
})
class TestHost {}

describe('AutofocusDirective', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutofocusDirective, TestHost]
    });

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should set focus', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    spyOn(input, 'focus'); // we mock the focus method
    fixture.detectChanges();

    expect(input.focus).toHaveBeenCalled();
  });

  it('should not throw error if element has no focus method', () => {
    const directive = new AutofocusDirective({ nativeElement: {} } as ElementRef);
    expect(() => directive.ngAfterViewInit()).not.toThrow();
  });
});
```

# 🎯 **5. CopyToClipboardDirective**

Copies text to clipboard on click

### **copy.directive.spec.ts**

```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CopyDirective } from './copy.directive';

@Component({
  template: `<button appCopy="Hello">Copy</button>`
})
class TestHost {}

describe('CopyDirective', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyDirective, TestHost]
    });

    navigator.clipboard = { writeText: jasmine.createSpy() } as any;

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should copy text to clipboard on click', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', {});
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Hello');
  });

  it('should not throw error when clipboard API unavailable', () => {
    navigator.clipboard = null as any;
    const btn = fixture.debugElement.query(By.css('button'));
    expect(() => btn.triggerEventHandler('click', {})).not.toThrow();
  });
});
```

# 🎯 **6. OnlyNumbersDirective**

Allows only numeric input

### **only-numbers.directive.spec.ts**

```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input appOnlyNumbers />`
})
class Host {}

describe('OnlyNumbersDirective', () => {
  let fixture: ComponentFixture<Host>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyNumbersDirective, Host]
    });

    fixture = TestBed.createComponent(Host);
    fixture.detectChanges();
  });

  it('should block alphabetic characters', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const event = new KeyboardEvent('keypress', { key: 'a' });

    spyOn(event, 'preventDefault');

    input.dispatchEvent(event);

    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should allow numbers', () => {
    const event = new KeyboardEvent('keypress', { key: '5' });
    spyOn(event, 'preventDefault');
    fixture.debugElement.query(By.css('input')).nativeElement.dispatchEvent(event);

    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
```

# 🎯 **7. ShowIfDirective**

Shows element based on boolean

### **show-if.directive.spec.ts**

```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowIfDirective } from './show-if.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<p *appShowIf="true">Visible</p>`
})
class Host {}

describe('ShowIfDirective', () => {
  let fixture: ComponentFixture<Host>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowIfDirective, Host]
    });

    fixture = TestBed.createComponent(Host);
    fixture.detectChanges();
  });

  it('should show element when true', () => {
    const p = fixture.debugElement.query(By.css('p'));
    expect(p).not.toBeNull();
  });

  it('should hide element when false', () => {
    fixture.componentInstance['condition'] = false;
    fixture.detectChanges();
    const p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeNull();
  });
});
```

# 🎯 **8. ClickOutsideDirective**

Triggers event when clicked outside

### **click-outside.directive.spec.ts**

```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  template: `<div appClickOutside (outside)="handle()">Inside</div>`
})
class Host {
  called = false;
  handle() { this.called = true; }
}

describe('ClickOutsideDirective', () => {
  let fixture: ComponentFixture<Host>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickOutsideDirective, Host]
    });

    fixture = TestBed.createComponent(Host);
    fixture.detectChanges();
  });

  it('should trigger outside event on document click', () => {
    document.dispatchEvent(new Event('click'));
    expect(fixture.componentInstance.called).toBeTrue();
  });

  it('should not fire when clicked inside', () => {
    fixture.componentInstance.called = false;
    fixture.debugElement.nativeElement.querySelector('div')
      .dispatchEvent(new Event('click', { bubbles: true }));
    expect(fixture.componentInstance.called).toBeFalse();
  });
});
```

# 🎯 **9. TooltipDirective**

Displays tooltip on hover

### **tooltip.directive.spec.ts**

```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipDirective } from './tooltip.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<span appTooltip="Hello Tooltip">Hover</span>`
})
class Host {}

describe('TooltipDirective', () => {
  let fixture: ComponentFixture<Host>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDirective, Host]
    });

    fixture = TestBed.createComponent(Host);
    fixture.detectChanges();
  });

  it('should create tooltip on mouseenter', () => {
    const el = fixture.debugElement.query(By.css('span'));
    el.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    const tooltip = document.querySelector('.tooltip');
    expect(tooltip).not.toBeNull();
  });

  it('should remove tooltip on mouseleave', () => {
    const el = fixture.debugElement.query(By.css('span'));
    el.triggerEventHandler('mouseenter', {});
    el.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();

    const tooltip = document.querySelector('.tooltip');
    expect(tooltip).toBeNull();
  });
});
```

# 🎯 **10. DragDropDirective**

Enables drag & drop

### **drag-drop.directive.spec.ts**

```ts
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropDirective } from './drag-drop.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div appDragDrop></div>`
})
class Host {}

describe('DragDropDirective', () => {
  let fixture: ComponentFixture<Host>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropDirective, Host]
    });

    fixture = TestBed.createComponent(Host);
    fixture.detectChanges();
  });

  it('should prevent default on dragover', () => {
    const div = fixture.debugElement.query(By.css('div'));
    const event = new Event('dragover');
    spyOn(event, 'preventDefault');

    div.triggerEventHandler('dragover', event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should emit dropped data', () => {
    const div = fixture.debugElement.query(By.css('div'));
    const dropEvent = new DragEvent('drop', { dataTransfer: new DataTransfer() });
    dropEvent.dataTransfer?.setData('text/plain', 'Hello');

    spyOn(fixture.componentInstance as any, 'onDrop');

    expect(() => div.triggerEventHandler('drop', dropEvent)).not.toThrow();
  });
});
```

# ✅ **Summary of all 10 directive tests**

| #  | Directive              | What it tests                  |
| -- | ---------------------- | ------------------------------ |
| 1  | HighlightDirective     | mouseenter + mouseleave        |
| 2  | UppercaseDirective     | input manipulation             |
| 3  | DisableButtonDirective | property binding               |
| 4  | AutofocusDirective     | focusing behavior              |
| 5  | CopyDirective          | clipboard API                  |
| 6  | OnlyNumbersDirective   | keyboard filtering             |
| 7  | ShowIfDirective        | structural directive rendering |
| 8  | ClickOutsideDirective  | document-level event           |
| 9  | TooltipDirective       | DOM creation + removal         |
| 10 | DragDropDirective      | drag events + data             |



# 10 high-quality Angular Reactive Form testing examples** using **Jasmine + Karma**.

## ⭐ **1. LoginForm – Required + MinLength Validation**

### **login-form.spec.ts**

```ts
import { FormBuilder, Validators } from "@angular/forms";

describe('Login Form', () => {
  let fb: FormBuilder;

  beforeEach(() => {
    fb = new FormBuilder();
  });

  it('should be invalid when email and password are empty', () => {
    const form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    expect(form.valid).toBeFalse();
  });

  it('should be valid when correct values are entered', () => {
    const form = fb.group({
      email: ['user@test.com', Validators.required],
      password: ['secret123', Validators.minLength(6)]
    });

    expect(form.valid).toBeTrue();
  });
});
```

 

## ⭐ **2. RegistrationForm – Confirm Password Validator**

### **register-form.spec.ts**

```ts
import { FormBuilder, Validators, ValidationErrors, AbstractControl } from "@angular/forms";

function confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
  return control.get('password')?.value === control.get('confirmPassword')?.value
    ? null
    : { mismatch: true };
}

describe('Register Form', () => {
  let fb = new FormBuilder();

  it('should fail when passwords do not match', () => {
    const form = fb.group({
      password: ['abc123'],
      confirmPassword: ['xyz789']
    }, { validators: confirmPasswordValidator });

    expect(form.errors?.['mismatch']).toBeTrue();
  });

  it('should pass when passwords match', () => {
    const form = fb.group({
      password: ['abc123'],
      confirmPassword: ['abc123']
    }, { validators: confirmPasswordValidator });

    expect(form.valid).toBeTrue();
  });
});
```

 

## ⭐ **3. Profile Form – Testing patchValue()**

### **profile-form.spec.ts**

```ts
import { FormBuilder } from "@angular/forms";

describe('Profile Form', () => {
  let fb = new FormBuilder();

  it('should update only provided fields when patchValue is used', () => {
    const form = fb.group({
      fname: [''],
      lname: ['']
    });

    form.patchValue({ fname: 'Ravi' });

    expect(form.value).toEqual({ fname: 'Ravi', lname: '' });
  });

  it('should keep form valid after patchValue', () => {
    const form = fb.group({
      fname: ['John'],
      lname: ['Doe']
    });

    form.patchValue({ lname: 'Smith' });

    expect(form.valid).toBeTrue();
  });
});
```

 

## ⭐ **4. Address Form – Nested FormGroup**

### **address-form.spec.ts**

```ts
import { FormBuilder, Validators } from "@angular/forms";

describe('Address Form', () => {
  let fb = new FormBuilder();

  const form = fb.group({
    street: ['', Validators.required],
    zip: [''],
    location: fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required]
    })
  });

  it('should mark nested group invalid when empty', () => {
    expect(form.get('location')?.valid).toBeFalse();
  });

  it('should become valid when nested fields are filled', () => {
    form.get('location.city')?.setValue('Pune');
    form.get('location.state')?.setValue('MH');
    expect(form.get('location')?.valid).toBeTrue();
  });
});
```
 
## ⭐ **5. Skills Form – FormArray Testing**

### **skills-form.spec.ts**

```ts
import { FormArray, FormBuilder, Validators } from "@angular/forms";

describe('Skills Form', () => {
  let fb = new FormBuilder();

  it('should start with empty FormArray', () => {
    const form = fb.group({
      skills: fb.array([])
    });

    expect((form.get('skills') as FormArray).length).toBe(0);
  });

  it('should add a new skill to FormArray', () => {
    const form = fb.group({
      skills: fb.array([])
    });

    (form.get('skills') as FormArray).push(fb.control('Angular'));

    expect((form.get('skills') as FormArray).length).toBe(1);
  });
});
```

 

## ⭐ **6. Async Email Validator – Mocking Async Behavior**

### **async-email.spec.ts**

```ts
import { FormBuilder, AbstractControl, ValidationErrors } from "@angular/forms";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

function emailCheck(control: AbstractControl) {
  const forbidden = (control.value === 'taken@mail.com');
  return of(forbidden ? { emailTaken: true } : null).pipe(delay(10));
}

describe('Async Email Validator', () => {
  let fb = new FormBuilder();

  it('should mark email as taken', (done) => {
    const control = fb.control('', [], [emailCheck]);
    control.setValue('taken@mail.com');

    setTimeout(() => {
      expect(control.errors?.['emailTaken']).toBeTrue();
      done();
    }, 20);
  });

  it('should pass when email is free', (done) => {
    const control = fb.control('', [], [emailCheck]);
    control.setValue('free@mail.com');

    setTimeout(() => {
      expect(control.errors).toBeNull();
      done();
    }, 20);
  });
});
```
 

## ⭐ **7. Contact Form – setValue() Strict Check**

### **contact-form.spec.ts**

```ts
import { FormBuilder } from "@angular/forms";

describe('Contact Form', () => {
  let fb = new FormBuilder();

  it('should throw error if setValue missing fields', () => {
    const form = fb.group({
      phone: [''],
      altPhone: ['']
    });

    expect(() => form.setValue({ phone: '12345' })).toThrow();
  });

  it('should work when all fields provided', () => {
    const form = fb.group({
      phone: [''],
      altPhone: ['']
    });

    form.setValue({ phone: '111', altPhone: '222' });

    expect(form.value.phone).toBe('111');
  });
});
```

 

## ⭐ **8. Order Form – ValueChanges Event Testing**

### **order-form.spec.ts**

```ts
import { FormBuilder } from "@angular/forms";

describe('Order Form', () => {
  let fb = new FormBuilder();

  it('should trigger valueChanges when quantity changes', () => {
    const form = fb.group({
      qty: [1],
      price: [100]
    });

    let updated = false;
    form.get('qty')?.valueChanges.subscribe(() => updated = true);

    form.get('qty')?.setValue(5);

    expect(updated).toBeTrue();
  });

  it('should calculate total dynamically', () => {
    const form = fb.group({
      qty: [1],
      price: [100],
      total: [{ value: 0, disabled: true }]
    });

    form.valueChanges.subscribe(val => {
      form.get('total')?.setValue(val.qty * val.price);
    });

    form.get('qty')?.setValue(3);

    expect(form.get('total')?.value).toBe(300);
  });
});
```


## ⭐ **9. Search Form – DebounceTime Testing (Async)**

### **search-form.spec.ts**

```ts
import { FormBuilder } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { fakeAsync, tick } from "@angular/core/testing";

describe('Search Form', () => {
  let fb = new FormBuilder();

  it('should emit search term after debounce', fakeAsync(() => {
    const form = fb.group({
      term: ['']
    });

    let result = '';
    form.get('term')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(val => result = val);

    form.get('term')?.setValue('An');
    tick(100);
    expect(result).toBe('');

    tick(200);
    expect(result).toBe('An');
  }));

  it('should emit latest value only once', fakeAsync(() => {
    const form = fb.group({ term: [''] });
    let count = 0;

    form.get('term')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(() => count++);

    form.get('term')?.setValue('A');
    form.get('term')?.setValue('An');
    form.get('term')?.setValue('Ang');
    tick(300);

    expect(count).toBe(1);
  }));
});
```

 

## ⭐ **10. Checkout Form – Custom RequiredIf Validator**

### **checkout-form.spec.ts**

```ts
import { FormBuilder, AbstractControl } from "@angular/forms";

function requiredIf(delivery: string) {
  return (control: AbstractControl) => {
    return delivery === 'home' && !control.value ? { required: true } : null;
  };
}

describe('Checkout Form', () => {
  let fb = new FormBuilder();

  it('should require address when delivery is home', () => {
    const form = fb.group({
      deliveryType: ['home'],
      address: ['', requiredIf('home')]
    });

    expect(form.get('address')?.errors?.['required']).toBeTrue();
  });

  it('should not require address for pickup delivery', () => {
    const form = fb.group({
      deliveryType: ['pickup'],
      address: ['', requiredIf('pickup')]
    });

    expect(form.get('address')?.valid).toBeTrue();
  });
});
```
 