export const systemDesignData = {
  title: "🏗️ System Design Questions & Answers",
  questions: [
    {
      id: 1,
      title:
        "How would you design a scalable frontend architecture for a large React application?",
      type: "text-with-list",
      description:
        "Designing a scalable frontend architecture requires careful consideration of multiple factors to ensure maintainability, performance, and team collaboration.",
      list: [
        "Component-Based Architecture → Split UI into reusable, modular components",
        "State Management → Use React Context, Redux, Zustand, or Recoil depending on complexity",
        "Lazy Loading & Code Splitting → Optimize performance using React.lazy & Suspense",
        "API Layer → Centralize API calls in a services layer (Axios, React Query, RTK Query)",
        "Folder Structure → Follow a scalable project structure",
        "Error Handling & Logging → Use Sentry, LogRocket, or a global error boundary",
        "Authentication & Authorization → JWT-based auth, OAuth, or Firebase",
      ],
    },
    {
      id: 2,
      title: "Scalable Folder Structure Example",
      type: "code-only",
      code: `src/
│── components/         # Reusable UI Components
│── pages/              # Page-level Components (Lazy-loaded)
│── hooks/              # Custom Hooks
│── store/              # Redux/Context/Zustand State Management
│── services/           # API Calls & Utility Functions
│── assets/             # Images, Icons, Fonts
│── utils/              # Helper functions
│── routes/             # App Routing (React Router)
│── styles/             # CSS-in-JS, Tailwind, or Styled Components
│── __tests__/          # Unit & Integration Tests`,
    },
    {
      id: 3,
      title: "How would you optimize the performance of a React app?",
      type: "text-with-list",
      description:
        "Performance optimization in React applications involves multiple strategies to reduce bundle size, minimize re-renders, and improve user experience.",
      list: [
        "Reduce Unnecessary Renders → Use React.memo, useCallback & useMemo",
        "Lazy Loading & Code Splitting → Load components only when needed",
        "Efficient State Management → Use Context API, Redux, or React Query",
        "Optimize Images & Assets → Use next-gen formats (WebP, AVIF)",
        "Virtualization for Large Lists → Use React Virtualized or React Window",
      ],
    },
    {
      id: 4,
      title: "Performance Optimization Code Examples",
      type: "code-only",
      code: `// Lazy Loading
const Dashboard = React.lazy(() => import("./Dashboard"));

// React.memo for components
const MemoizedComponent = React.memo(MyComponent);

// useCallback & useMemo
const memoizedFunction = useCallback(() => {
  doSomething();
}, [dependency]);

const memoizedValue = useMemo(() => {
  return computeExpensiveValue();
}, [dependency]);

// Lazy loading images
<img loading="lazy" src="image.webp" alt="Lazy loaded image" />

// Virtualization for large lists
import { FixedSizeList as List } from "react-window";`,
    },
    {
      id: 5,
      title: "How would you handle real-time updates in a React application?",
      type: "text-with-list",
      description:
        "Real-time updates can be implemented using various approaches depending on the use case and requirements.",
      list: [
        "WebSockets (Socket.IO) → Best for real-time chat, live notifications",
        "Polling → Set intervals for fetching data from APIs",
        "React Query or SWR → Automatic revalidation and caching",
      ],
    },
    {
      id: 6,
      title: "Real-time Implementation Examples",
      type: "code-only",
      code: `// WebSockets with Socket.IO
import io from "socket.io-client";
const socket = io("https://server-url");
socket.on("newMessage", (data) => console.log(data));

// Polling with useEffect
useEffect(() => {
  const interval = setInterval(() => fetchData(), 5000);
  return () => clearInterval(interval);
}, []);

// React Query for automatic revalidation
import { useQuery } from "react-query";
const { data } = useQuery("messages", fetchMessages, {
  refetchInterval: 5000,
});`,
    },
    {
      id: 7,
      title: "How would you handle authentication in a React app?",
      type: "text-with-list",
      description:
        "Authentication implementation requires careful consideration of security, user experience, and state management.",
      list: [
        "JWT (JSON Web Token) Authentication → Store in HTTP-only cookies",
        "OAuth (Google, Facebook, GitHub) → Use Firebase or Auth0",
        "Role-Based Access Control (RBAC) → Restrict access based on roles",
      ],
    },
    {
      id: 8,
      title: "Authentication Implementation",
      type: "code-only",
      code: `// JWT Storage
localStorage.setItem("token", user.token);

// Protected Route Component
function ProtectedRoute({ children, role }) {
  return user.role === role ? children : <Navigate to="/unauthorized" />;
}

// Auth Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = (credentials) => {
    // Login logic
  };
  
  const logout = () => {
    // Logout logic
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`,
    },
    {
      id: 9,
      title: "How would you design a multi-language (i18n) React application?",
      type: "text-with-code",
      description:
        "Internationalization (i18n) allows applications to support multiple languages and locales.",
      code: `// Install react-i18next
npm install i18next react-i18next

// translations/en.json
{
  "welcome": "Welcome to our website!",
  "buttons": {
    "submit": "Submit",
    "cancel": "Cancel"
  }
}

// Use in Components
import { useTranslation } from "react-i18next";
const { t } = useTranslation();
return <h1>{t("welcome")}</h1>;`,
    },
    {
      id: 10,
      title: "Real-World Project Scenarios",
      type: "text-with-list",
      description:
        "Understanding how to approach real-world projects helps in system design interviews and practical development.",
      list: [
        "E-Commerce Web App → React.js, Redux, Tailwind CSS, Firebase/Auth0, Stripe",
        "Real-Time Chat Application → React.js, Socket.IO, Redux, Node.js, MongoDB",
        "Dashboard for Analytics & Reporting → React.js, Next.js, React Query, Chart.js, Tailwind",
      ],
    },
    {
      id: 11,
      title: "E-Commerce Web App Features",
      type: "text-with-list",
      description:
        "Key features and considerations for building a scalable e-commerce application.",
      list: [
        "Product Listing (Pagination, Filters, Sorting)",
        "Cart & Checkout (Redux for State Management)",
        "Authentication (JWT/Firebase)",
        "Payment Integration (Stripe API)",
        "Optimized Performance (Lazy Loading, Code Splitting)",
      ],
    },
    {
      id: 12,
      title: "Real-Time Chat Application Features",
      type: "text-with-list",
      description:
        "Essential features for building a real-time chat application with modern web technologies.",
      list: [
        "WebSocket-based Real-time Chat",
        "Online/Offline User Status",
        "Typing Indicators & Read Receipts",
        "Message Encryption (AES)",
      ],
    },
    {
      id: 13,
      title: "Analytics Dashboard Features",
      type: "text-with-list",
      description:
        "Key components for building a comprehensive analytics and reporting dashboard.",
      list: [
        "Data Visualization (Pie Charts, Bar Graphs, Line Charts)",
        "User Management (Role-based access control)",
        "Real-time Data Fetching (React Query & WebSockets)",
      ],
    },
    {
      id: 14,
      title: "Interview Preparation Tips",
      type: "text-with-list",
      description:
        "How to prepare effectively for system design interviews in frontend development.",
      list: [
        "Review System Design Concepts (State Management, Component Architecture, Performance)",
        "Practice Real-world Scenarios (E-commerce, Dashboards, Real-time apps)",
        "Do Live Coding Challenges (Leetcode, CodeSignal)",
        "Prepare Logical Problem Solving (Sorting, Recursion, API handling)",
      ],
    },
  ],
};
