# React Router DOM — step-by-step setup (Vite + React)

This guide matches a **Vite** app with `src/main.jsx` and `src/App.jsx`. It assumes **React Router v6+ / v7** (`react-router-dom`).

Your project already lists `react-router-dom` in `package.json`. If you ever need to install or reinstall it:

```bash
npm install react-router-dom
```

---

## 1. Wrap the app with `BrowserRouter`

The router must wrap every component that uses routing hooks or `<Link>`.

**File:** `src/main.jsx`

- Import `BrowserRouter` from `react-router-dom`.
- Wrap `<App />` with `<BrowserRouter>…</BrowserRouter>` (inside `<StrictMode>` is fine).

Conceptually:

```jsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

---

## 2. Define routes in `App` (or a dedicated router file)

**File:** `src/App.jsx` (or create `src/routes.jsx` and import it from `App`)

- Import `Routes`, `Route` from `react-router-dom`.
- Replace a single static page with a `<Routes>` block containing one `<Route>` per URL.

Minimal example:

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
```

Create simple page components under `src/pages/` (e.g. `Home.jsx`, `About.jsx`) that export a default component.

---

## 3. Add navigation with `Link` or `NavLink`

In any component:

- Import `Link` or `NavLink` from `react-router-dom`.
- Use `<Link to="/about">About</Link>` instead of `<a href="...">` for **internal** routes (avoids full page reload).

`NavLink` adds active styling via `className` or `style` callbacks when the link matches the current path.

---

## 4. (Optional) A “404” route

Inside the same `<Routes>`, add a catch-all **last**:

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 5. (Optional) Nested routes and a layout

If you want a shared header/sidebar:

1. Create a layout component that renders `<Outlet />` from `react-router-dom` where child page content should appear.
2. Use a parent `<Route>` with `element={<Layout />}` and **nested** `<Route>` children (no leading `/` on child paths if they’re relative to the parent).

Example pattern:

```jsx
<Route element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>
```

---

## 6. (Optional) Programmatic navigation

Use the `useNavigate()` hook from `react-router-dom` inside a component:

```jsx
const navigate = useNavigate()
navigate('/about')
```

---

## 7. Deploying under a subpath (e.g. `example.com/app/`)

If the app is not served from the domain root, set `basename` on `BrowserRouter`:

```jsx
<BrowserRouter basename="/app">
```

Match this to your Vite `base` in `vite.config.js` if you use a non-root `base`.

---

## 8. Verify

1. Run `npm run dev`.
2. Open `/`, `/about`, etc., and confirm the correct component renders.
3. Click `<Link>` navigation and confirm the URL changes **without** a full reload.

---

## Quick checklist

| Step | Action |
|------|--------|
| 1 | `BrowserRouter` in `main.jsx` |
| 2 | `Routes` + `Route` in `App.jsx` (or router module) |
| 3 | Page components + `path` / `element` |
| 4 | `Link` / `NavLink` for internal navigation |
| 5 | Optional: `*` route, nested routes, `Outlet`, `useNavigate`, `basename` |

---

## References

- [React Router documentation](https://reactrouter.com/)
