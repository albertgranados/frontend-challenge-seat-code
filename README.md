# 🦸 Superheroes DataTable App

This project is a code challenge solution built with React + TypeScript.  
It displays a list of Marvel Comics superheroes and allows the user to search, sort, select an item to view in showcase format, and simulate CRUD operations.  
The goal is to demonstrate my technical skills in frontend architecture, UI/UX, and clean code.

---

## ✅ Requirements Checklist

- [x] Use a public API or mock your own with JSON Server  
- [x] React client that consumes the API  
- [x] Display a list of items  
- [x] Show item detail in a "showcase" format 
- [x] Delete items 
- [x] Use a State Manager (Zustand)  
- [x] Use TypeScript  
- [x] Use a CSS framework or build your own  
- [x] Clean and scalable code  
- [x] Responsive UI  
- [X] Sort items
- [X] Optimizing rendering (useMemo, useRef...)
- [ ] Filter items
- [ ] Create items
- [ ] Update items  
- [ ] Use asynchronous views (loading, error, etc.)  

- [ ] Unit Testing (optional)  

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

## 👨‍💻 Author

**Albert Granados**  
Frontend Developer · Barcelona, Spain  
[LinkedIn](https://www.linkedin.com/in/albertgranados) · [GitHub](https://github.com/albertgranados)

---

## 📄 License

This project is for assessment purposes only and not intended for production use.
