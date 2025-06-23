# 🦸 The Superhero List

This project is a code challenge solution built with React + TypeScript.  
It displays a list of superheroes and allows the user to search, sort, select an item to view in showcase format, and simulate CRUD operations.  
The goal is to demonstrate my technical skills in frontend architecture, UI/UX, and clean code.

---

## ✅ Requirements Checklist

- ✅ Use a public API or mock your own with JSON Server  
- ✅ React client that consumes the API  
- ✅ Display a list of items  
- ✅ Show item detail in a "showcase" format 
- ✅ Delete items 
- ✅ Use a State Manager (Zustand)  
- ✅ Use TypeScript  
- ✅ Use a CSS framework or build your own  
- ✅ Clean and scalable code  
- ✅ Responsive UI  
- ✅ Sort items
- ✅ Optimizing rendering (useMemo, useRef...)
- ✅ Filter items
- ✅ Create items
- ✅ Update items  
- ✅ Use asynchronous views (loading, error, etc.)  

---

## 🛠️ How to Run the Project

### Local development

```bash
npm install
npm run dev
```

### Test on mobile (local network)

```bash
npm run host
```

> This will start the app using your local IP so you can access it from your mobile device on the same network.

---

## 📦 Dependencies & Why I Chose Them

```bash
npm install -D prettier
npm install -D eslint-config-prettier
npm install -D eslint-plugin-prettier
```

These are used to enforce consistent code style automatically.

```bash
npm install -D @types/node
```

Provides TypeScript types for Node.js, useful for TS-aware tooling and avoiding type errors.

```bash
npm install -D tailwindcss @tailwindcss/vite
```

Tailwind is used as the main styling framework for rapid, consistent, and responsive design.

```bash
npm install class-variance-authority
```

Helps manage conditional Tailwind class variants with clean logic.

```bash
npm install lucide-react
```

A clean, modern icon library used to enhance the UI.

```bash
npm install @headlessui/react
```

Provides accessible UI components. Used for primary components like Drawer.

```bash
npm install zustand
```

Lightweight state management for managing shared state (like the Drawer states) across components.

---

## 📂 Project Structure (simplified)

```
src/
│
├── components/     # UI components (Table, Drawer, etc.)
├── store/          # Zustand store for state management
├── types/          # TypeScript types (e.g. superhero.types.ts)
├── utils/          # Utility functions
└── styles/         # Tailwind config & custom styles
```
---

## 📝 Notes & Key Design Decisions

1. **Data limited to 100 superheroes**  
   I’ve intentionally limited the dataset to 100 randomly selected superheroes on each page load. This helps focus the challenge on core features like search, sorting, creation, and selection, while avoiding unnecessary complexity (pagination, performance issues, etc.). Randomization adds variety each time the app is refreshed.

2. **UI strategy: Headless UI for drawer, self-built Tailwind components for the rest**  
   The drawer component uses `@headlessui/react` to speed up development and ensure accessibility. All other components (such as the table) were built manually with Tailwind CSS, following Tailwind UI aesthetics. This demonstrates my ability to structure and style UI elements from scratch.

3. **Performance optimizations with useMemo**  
   `useMemo` is used in key parts of the app (like filtering and sorting) to avoid unnecessary recalculations and re-renders, keeping performance smooth and efficient even as data changes.

4. **Responsive design**  
   The app is fully responsive and can be tested comfortably on a mobile device. Special care has been taken to ensure a good mobile experience.

5. **CRUD and filters: simplified but scalable**  
   Some features like creation and editing have been implemented in a minimal form (e.g., editing/creating only the name field). This is intentional to show functionality while managing time efficiently. The system is built to scale—adding more fields or filters would be straightforward given the current structure.

6. **Room for improvement: custom hooks and logic extraction**  
   Some logic inside `App.tsx` could have been abstracted into a custom hook to improve separation of concerns. Due to time constraints, this was left as-is, but I acknowledge it as a refactor opportunity. Also, deletion, edition and creation confirmation dialogs addition.

---

## 👨‍💻 Author

**Albert Granados**  
Frontend Developer · Barcelona, Spain  
[LinkedIn](https://www.linkedin.com/in/albertgranados) · [GitHub](https://github.com/albertgranados)

---

## 📄 License

This project is for assessment purposes only and not intended for production use.
