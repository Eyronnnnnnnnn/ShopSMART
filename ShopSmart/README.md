ShopSmart

A mini online store built with React. Browse products, search and filter them, save favorites, and manage a cart that survives a page refresh.

Built as a Phase 2 project to practice React hooks and performance patterns on a real-world style app.

Status: 🚧 In progress

Live demo: [ADD LINK HERE]

Screenshot

[ADD SCREENSHOT HERE]

Features
 Product grid with image, name, price, and rating
 Search that queries the API, with debounce
 Category filter
 Favorite button on every product
 Cart with add, remove, and quantity controls
 Cart total calculated from the cart state
 Cart and favorites saved in localStorage
 Loading, error, and empty states
Tech Stack
React (Vite)
Tailwind CSS
DummyJSON products API
What I Practiced
Concept	Where it is used
useFetch (custom hook)	Fetches products and refetches when the search or category URL changes
useDebounce (custom hook)	Waits until the user stops typing before calling the API
useLocalStorage (custom hook)	Keeps the cart and favorites after a refresh
useEffect	Data fetching, debounce timer with cleanup
useCallback	Stable add-to-cart and favorite handlers
React.memo	Product cards skip re-rendering while typing in the search box
useState	Search text, category, cart, favorites
Lifting state up	Shared state lives in App, children receive props
Conditional rendering	Loading, error, and empty states
Lists and key	Product grid and cart items
Getting Started
Clone the repo
Install dependencies with npm install
Start the dev server with npm run dev

No API key is needed.

Project Structure
src/
  components/   UI pieces such as ProductCard and Cart
  hooks/        useFetch, useDebounce, useLocalStorage
  App.jsx
  main.jsx
What I Learned

[WRITE THIS AFTER YOU FINISH THE PROJECT: what was hard, what bug taught you the most, what you would improve]

Author

[YOUR NAME] · [GITHUB LINK]