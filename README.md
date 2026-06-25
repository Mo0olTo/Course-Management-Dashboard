# Course Management — Electropi

A modern, responsive **Course Management** single-page application built with **Angular 21**, **Tailwind CSS 4**, and **PrimeNG**. It lets users browse, create, edit, view, and delete courses through a clean and intuitive interface backed by a lightweight `json-server` mock REST API.

---

## 📖 Short Description

**Course Management — Electropi** is a CRUD application for managing a course catalog. Users can create, view, edit, delete, search, and filter courses. The application follows a feature-based Angular architecture and uses Angular Signals for reactive state management.

The project is designed to demonstrate modern Angular development practices, including standalone components, reactive forms, reusable UI components, route-based navigation, and a mock REST API.

---

## 🛠 Technologies Used

* Angular 21
* TypeScript
* RxJS
* Angular Signals
* Reactive Forms
* Angular Router
* Tailwind CSS 4
* PrimeNG
* PrimeIcons
* JSON Server (Mock API)
* Angular HttpClient
* npm

---

## ✨ Features Implemented

### Course Management

* View all courses
* View course details
* Create new courses
* Edit existing courses
* Delete courses with confirmation modal

### Search & Filtering

* Search by:

  * Course Name
  * Instructor Name
  * Category
  * Status

* Filter courses by status:

  * Active
  * Draft
  * Archived

### User Experience

* Responsive UI for desktop, tablet, and mobile
* Loading skeleton during API requests
* Toast notifications for CRUD operations
* Empty-state and error-state handling

### Architecture

* Feature-based folder structure
* Facade pattern for state management
* Reusable table component
* Reusable form controls
* Angular Signals for reactive state

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── core/
│   ├── features/
│   │   └── courses/
│   │       ├── components/
│   │       ├── facade/
│   │       ├── models/
│   │       ├── pages/
│   │       └── services/
│   ├── shared/
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
│
├── environments/
├── styles.scss
├── db.json
└── ...
```

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone "https://github.com/Mo0olTo/Course-Management-Dashboard"
cd Course-Management-Dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Mock API

```bash
npm run start-api
```

### 4. Start the Angular Application

```bash
npm start
```

or

```bash
ng serve
```

### 5. Open the Application

```text
http://localhost:4200
```

---

## 🗃 Mock API Explanation

The project uses **JSON Server** as a mock REST API.

### Base URL

```text
https://6a3d25fcd8e212699e238312.mockapi.io/api/v1/courses
```

### Courses Endpoint

```text
https://6a3d25fcd8e212699e238312.mockapi.io/api/v1/courses
```

### Supported Operations

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | /courses     | Get all courses     |
| GET    | /courses/:id | Get a single course |
| POST   | /courses     | Create a course     |
| PUT    | /courses/:id | Update a course     |
| DELETE | /courses/:id | Delete a course     |

### Data Source

All data is stored in mockAPI:

```text
sources.ts
```

The mock server reads and writes directly to this file.

---

## Assumptions

* The application assumes that the mock API is running on `https://6a3d25fcd8e212699e238312.mockapi.io/api/v1/courses`.
* Course IDs are generated and managed by JSON Server.
* Description is an optional field.
* Only predefined course categories and statuses are supported.
* The application is intended for demonstration and assessment purposes.

---

## Bonus Features

* Reusable Table Component
* Reusable Form Components
* Loading Skeleton
* Toast Notifications
* Feature-Based Architecture
* Angular Signals State Management
* Typed Reactive Forms
* Responsive UI Design on (Desktop , Mobile)

---

## 📸 Screenshots

### Courses List

![Courses List](/public/screenshots/course-list.webp)

### Course Details

![Course Details](/public/screenshots/course-details.webp)

### Create Course

![Create Course](/public/screenshots/add-new-course.webp)

### Edit Course

![Edit Course](/public/screenshots/update-course.webp)


### Confirmation Message

![EConfirmation Message](/public/screenshots/confirmation-message.webp)


### Deploy Link
https://course-management-dashboard-v9cv.vercel.app/courses

## License

This project was created as part of a technical assessment for Electropi.
