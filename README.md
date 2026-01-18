## How to Run the Project

This project has two parts: a **Backend (Express API)** and a **Frontend (React app)**. Please follow the steps below to run both locally.

### Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- Git (to clone the repository)

### 1. Clone This Repository


```bash
git clone <your-repo-url>
cd swe-interview-test/StarterCode
```

---

### 2. Start the Backend

1. Open a terminal and navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies (only needed the first time):

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm run dev
   ```

4. You should see a log similar to:

   ```bash
   Server is running on port 5000
   ```


> Keep this terminal window open while the backend is running.

---

### 3. Start the Frontend

1. Open a **new** terminal window or tab.
2. Navigate to the frontend folder:

   ```bash
   cd swe-interview-test/StarterCode/frontend
   ```

3. Install dependencies (only needed the first time):

   ```bash
   npm install
   ```

4. Start the React development server:

   ```bash
   npm start
   ```

5. After it compiles successfully, the app will open automatically in your browser at:

   - [`http://localhost:3000`](http://localhost:3000)

   If it does not open automatically, you can manually visit that URL.

---

### 4. Usage

- The **frontend** fetches the product list from the **backend** at `http://localhost:5000/api/products`.
- Clicking the delete icon on a card will:
  - Immediately remove the card from the UI (optimistic update).
  - Send a `DELETE` request to the backend to remove the product from the in-memory list.
- If you restart the backend server, the product list will reset to its initial hardcoded values in `backend/index.js`.

---

### 5. Stopping the Servers


  ```text
  Ctrl + C
  ```


