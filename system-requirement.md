# System Requirements & Project Setup

## 1. Prerequisites

- **Node.js**: Version 16 or higher is recommended. [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js. Alternatively, you can use `yarn`, `pnpm`, or `bun` as a package manager.

---

## 2. Installation

Open your terminal and navigate to the project directory:

```bash
cd "C:\Users\Quame\Desktop\Projects\All About Cursor\Vihep-Group\vihep-group"
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

## 3. Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 4. Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

To start the production server after building:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

---

## 5. Linting

To check for code quality and errors:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

---

## 6. Environment Variables

If your project requires environment variables, create a `.env.local` file in the root directory and add your variables there.

---

## 7. Project Structure

- **Pages**: Located in `src/app/` (e.g., homepage: `src/app/page.tsx`, careers: `src/app/careers/page.tsx`)
- **Components**: Reusable UI components in `src/components/`
- **Styles**: Global styles in `src/app/globals.css` (Tailwind CSS is used)

---

## 8. Further Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Summary:**
1. Install Node.js
2. Run `npm install`
3. Run `npm run dev`
4. Visit [http://localhost:3000](http://localhost:3000) 