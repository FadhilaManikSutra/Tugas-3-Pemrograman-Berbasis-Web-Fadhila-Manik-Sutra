# SITTA UT - Vue Component Application

SITTA UT (Universitas Terbuka Teaching Material Inventory and Transaction System) is a web-based application built with Vue.js for managing teaching material inventory and tracking Delivery Orders (DO).

This project was developed as part of the Mobile-Based Programming Practicum course assignment, implementing core Vue.js concepts such as Components, Props, Computed Properties, Watchers, Lifecycle Hooks, Event Handling, and Custom Filters.

---

## Features

### Inventory Management
- Add new inventory items
- Update existing inventory data
- Delete inventory items with confirmation modal
- Automatic stock status monitoring
- Filter inventory by regional office (UPBJJ)
- Filter inventory by category
- Display low-stock (reorder) items
- Sort inventory by title, stock quantity, and price

### Delivery Order Tracking
- Create new Delivery Orders (DO)
- View package details
- Track shipment progress
- Add delivery status updates
- Search Delivery Orders by DO number or student ID (NIM)

### Stock Status Monitoring
- Safe Stock
- Low Stock
- Out of Stock

### Confirmation Modal
- Prevents accidental data deletion

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Vue.js 2

---

## Project Structure

```text
project/
│
├── index.html
│
├── assets/
│   └── css/
│       └── style.css
│
├── js/
│   ├── app.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   └── components/
│       ├── status-badge.js
│       ├── app-modal.js
│       ├── stock-table.js
│       └── do-tracking.js
│
└── templates/
    ├── status-badge.html
    ├── app-modal.html
    ├── stock-table.html
    └── do-tracking.html
```

---

## Vue.js Concepts Implemented

### Components
- Status Badge Component
- Modal Component
- Stock Table Component
- Delivery Order Tracking Component

### Props
Used to pass data from parent components to child components.

### Computed Properties
Used for:
- Inventory filtering
- Inventory sorting
- Package price calculation
- Delivery tracking search

### Watchers
Used to:
- Monitor filter changes
- Reset category filters dynamically

### Lifecycle Hooks
The application uses:

```javascript
mounted()
```

to load initial data from the API service.

### Event Handling
Communication between child and parent components is implemented using:

```javascript
this.$emit()
```

### Custom Filters

```javascript
rupiah
satuan
tanggalIndonesia
```

for currency formatting, quantity formatting, and Indonesian date formatting.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/sitta-ut-vue-component.git
```

### Navigate to the Project Folder

```bash
cd sitta-ut-vue-component
```

### Run the Application

Open the project using:

- VS Code Live Server
- VS Code Live Preview
- Any local web server

Then access:

```text
http://localhost:3000
```

---

## Learning Objectives

This project demonstrates the implementation of:

- Vue.js Components
- Component Communication
- Props and Events
- Computed Properties
- Watchers
- Lifecycle Hooks
- Form Handling
- Dynamic Rendering
- Inventory Management Logic
- Delivery Tracking System

---

## Author

**Fadhila Manik Sutra**

Mobile-Based Programming Practicum

Universitas Terbuka

2026
