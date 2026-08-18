# Copilot instructions

## Commands

- Install deps: `npm install`
- Start dev server: `npm start` or `npm run dev`
- Build for production: `npm run build`
- Preview the production build: `npm run preview`

There is no dedicated lint or test script in `package.json` yet.

## Architecture

- This is a small React component library built with Vite and React 18.
- `index.jsx` is the app entry point used for local library/demo rendering.
- Components live in `components/` rather than `src/`.
- `Button`, `Badge`, `Menu`, and `Toggle` are the main reusable primitives; `Star` is a composed example.
- `Menu` and `Toggle` use compound-component APIs by attaching subcomponents on the default export (`Menu.Button`, `Menu.Dropdown`, `Menu.Item`, `Toggle.Button`, `Toggle.On`, `Toggle.Off`).
- `Toggle` owns shared open/closed state through React context and is the state container for both `Toggle` and `Menu`.
- Styling is centralized in `style.css`; component classes are built from BEM-like names such as `button-success`, `badge-pill`, and `menu-dropdown`.

## Conventions

- Prefer function components with default exports.
- Use `classnames` to combine variant/size classes with any incoming `className`.
- Most components forward remaining props with `{...rest}` so native HTML attributes still work.
- Variant props are usually optional and fall back to a default class when omitted (`badge-gray`, `badge-square`, etc.).
- Keep compound-component wiring in the local `index.js` for each component family.
- Import paths are relative and usually point directly at the concrete file, not a barrel file.
