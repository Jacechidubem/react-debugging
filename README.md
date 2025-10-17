# React Debugging Documentation

## Project Overview
This project is a simple **React Counter App** built with **Vite**.  
It was designed to demonstrate debugging practices using:
- React Developer Tools  
- Browser Console  
- VS Code Debugger  

---

## Tools Used for Debugging

| Tool | Purpose | Description |
|------|----------|--------------|
|  **React Developer Tools** | Inspect Components | Check props, state, and re-render behavior |
| **Browser Console** | Runtime Logs | Displays warnings and errors in real time |
|  **VS Code Debugger** | Step Execution | Allows breakpoints and code inspection |


---

##  Components Overview
The app is made up of two key components:
1. **App Component** – manages state and defines the main logic for the counter.
2. **Counter Component** – receives props from the App and displays the current count with a button to increase it.

---

## Bug Description

| Type | Description |
|------|--------------|
| **ReferenceError** | Variable name mismatch caused the app to break. |
| **Symptom** | Console showed `Uncaught ReferenceError: count is not defined`. |
| **Effect** | The counter value didn’t render properly in the user interface. |

---

##  Debugging Process

### 1️⃣ Inspect with React Developer Tools
- Opened the **Components tab**.
- Selected the `<Counter>` component.
- Verified that props like `value` and `onIncrease` were passed correctly.  
 **Observation:** The issue wasn’t with props — it was within the component itself.

---

### 2️⃣ Check Console Logs
- Opened the **Console tab** in the browser developer tools.
- The console displayed a `ReferenceError`.
- This confirmed that a variable (`count`) was being used without definition.

---

### 3️⃣ Set Breakpoints in VS Code
- Added breakpoints in the **Counter component**.
- Inspected runtime variables and realized `value` existed but `count` did not.

---

### 4️⃣ Apply the Fix
- Updated the variable name to correctly match the one passed as a prop.
- Ensured all references inside the component were consistent.

---

### 5️⃣ Verify the Fix
After saving and refreshing:
- The app rendered correctly.
- The counter displayed the correct value.
- Clicking the button increased the count as expected. 

---
## initial project structure
![Debugging Screenshot](./assets/initialinterface.png)
- Here you can see the count is not  working properly and also not displaying the correct value




##  Final Project Structure

![Debugging Screenshot](./assets/fixedinterface.png)
- Here you can see the count is working properly and also displaying the correct value