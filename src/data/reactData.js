export const reactData = {
  title: "⚛️ React.js Interview Questions",
  questions: [
    {
      id: 1,
      title: "JSX in React",
      type: "text-with-code",
      description:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript. It's not HTML but gets transformed into JavaScript function calls.",
      code: `// JSX syntax
const element = <h1>Hello, World!</h1>;

// Transforms to
const element = React.createElement('h1', null, 'Hello, World!');

// JSX with expressions
const name = "John";
const element = <h1>Hello, {name}!</h1>;

// JSX with attributes
const element = <div className="container" data-testid="test">Content</div>;

// JSX with children
const element = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);`,
    },
    {
      id: 2,
      title: "State vs Props in React",
      type: "comparison-table",
      description:
        "State and props are fundamental concepts in React that determine how data flows through components. Understanding their differences is crucial for building React applications.",
      content: {
        headers: ["Feature", "State", "Props"],
        rows: [
          ["Mutability", "Mutable (can be changed)", "Immutable (read-only)"],
          ["Ownership", "Component owns its state", "Passed from parent"],
          ["Updates", "Triggers re-render", "Triggers re-render"],
          ["Access", "Internal to component", "External to component"],
          [
            "Initialization",
            "useState() or constructor",
            "Passed as attributes",
          ],
        ],
      },
    },
    {
      id: 3,
      title: "Detailed Comparison: Class vs Functional Components",
      type: "comparison-table",
      description:
        "Understanding the detailed differences between class and functional components helps choose the right approach and understand React's evolution from classes to hooks.",
      content: {
        headers: ["Feature", "Class Components", "Functional Components"],
        rows: [
          [
            "Syntax",
            "ES6 classes extending React.Component",
            "JavaScript functions",
          ],
          [
            "State Management",
            "this.state and this.setState()",
            "useState hook",
          ],
          [
            "Lifecycle Methods",
            "componentDidMount, componentDidUpdate, etc.",
            "useEffect hook",
          ],
          ["Constructor", "Required for state initialization", "Not needed"],
          ["this keyword", "Used extensively", "Not used"],
          ["Performance", "Slightly more overhead", "More optimized"],
          ["Code Reuse", "HOCs and render props", "Custom hooks"],
          ["Learning Curve", "More complex", "Simpler"],
          ["Future of React", "Legacy approach", "Recommended approach"],
          [
            "Error Boundaries",
            "Can be error boundaries",
            "Cannot be error boundaries",
          ],
        ],
      },
    },
    {
      id: 3.1,
      title: "React Lifecycle Methods (Class vs Functional Components)",
      type: "comparison-table",
      description:
        "React components progress through three main phases: Mounting, Updating, and Unmounting. Class components use dedicated lifecycle methods for each phase, while functional components achieve similar behavior using hooks such as `useEffect`. Understanding lifecycle methods is crucial for managing state, side effects, and optimizing performance.",
      extraInfo: {
        phases: {
          Mounting:
            "The initial phase where the component is created and inserted into the DOM.",
          Updating:
            "Occurs when the component's state or props change, causing a re-render.",
          Unmounting:
            "The final phase where the component is removed from the DOM.",
        },
        lifecycleMethods: {
          classComponents: {
            Mounting: [
              "constructor(): Initializes the component, sets up initial state, and binds event handlers.",
              "static getDerivedStateFromProps(props, state): Updates state based on props changes (rarely used).",
              "render(): Returns JSX for the UI.",
              "componentDidMount(): Runs after component mounts, often used for data fetching or subscriptions.",
            ],
            Updating: [
              "static getDerivedStateFromProps(props, state): Can also run during updates.",
              "shouldComponentUpdate(nextProps, nextState): Decides if component should re-render (performance optimization).",
              "render(): Updates UI with new state/props.",
              "getSnapshotBeforeUpdate(prevProps, prevState): Captures DOM info before changes (e.g., scroll position).",
              "componentDidUpdate(prevProps, prevState, snapshot): Runs after updates to handle DOM changes or side effects.",
            ],
            Unmounting: [
              "componentWillUnmount(): Cleans up before unmounting (remove listeners, cancel requests, etc.).",
            ],
            ErrorHandling: [
              "static getDerivedStateFromError(error): Sets state when a child throws an error.",
              "componentDidCatch(error, info): Logs errors and renders fallback UI.",
            ],
          },
          functionalComponents: {
            useEffect:
              "Runs after render and can mimic multiple lifecycle methods depending on dependency array usage. " +
              "With `[]` → behaves like `componentDidMount()`. " +
              "With dependencies → behaves like `componentDidUpdate()`. " +
              "With cleanup function → behaves like `componentWillUnmount()`.",
          },
          deprecatedMethods: [
            "componentWillMount()",
            "componentWillReceiveProps()",
            "componentWillUpdate()",
            "These are deprecated due to async rendering issues. Use safer alternatives like `getDerivedStateFromProps()` and `getSnapshotBeforeUpdate()`, or prefer hooks in functional components.",
          ],
        },
      },
      content: {
        headers: [
          "Phase",
          "Class Component Methods",
          "Functional Component (Hooks)",
        ],
        rows: [
          [
            "Mounting",
            "constructor(), static getDerivedStateFromProps(), render(), componentDidMount()",
            "useEffect(() => { /* mount logic */ }, [])",
          ],
          [
            "Updating",
            "static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()",
            "useEffect(() => { /* update logic */ }, [dependencies])",
          ],
          [
            "Unmounting",
            "componentWillUnmount()",
            "useEffect(() => { return () => { /* cleanup */ } }, [])",
          ],
          [
            "Error Handling",
            "static getDerivedStateFromError(), componentDidCatch()",
            "No direct equivalent, use Error Boundaries",
          ],
        ],
      },
    },
    {
      id: 4,
      title: "React Lifecycle Methods: Class vs Functional Components",
      type: "text-with-code",
      description:
        "Lifecycle methods control when components mount, update, and unmount. Understanding how to handle lifecycle in both class and functional components is crucial for React development.",
      code: `// CLASS COMPONENT LIFECYCLE

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Mounting Phase
  componentDidMount() {
    console.log('Component mounted');
    // API calls, subscriptions
  }

  // Updating Phase
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count updated');
    }
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log('Component will unmount');
    // Cleanup: remove event listeners, cancel subscriptions
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

// FUNCTIONAL COMPONENT LIFECYCLE (using hooks)

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  // componentDidMount equivalent
  useEffect(() => {
    console.log('Component mounted');
    // API calls, subscriptions
    
    // componentWillUnmount equivalent (cleanup function)
    return () => {
      console.log('Component will unmount');
      // Cleanup: remove event listeners, cancel subscriptions
    };
  }, []); // Empty dependency array = run only on mount

  // componentDidUpdate equivalent
  useEffect(() => {
    console.log('Count updated');
  }, [count]); // Run when count changes

  // componentDidMount + componentDidUpdate equivalent
  useEffect(() => {
    console.log('Component mounted or updated');
  }); // No dependency array = run on every render

  return <div>{count}</div>;
}

// Additional lifecycle patterns with hooks

function AdvancedFunctionalComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update document title when data changes
  useEffect(() => {
    if (data) {
      document.title = \`Data: \${data.title}\`;
    }
  }, [data]);

  // Cleanup on unmount
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval running');
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>{data?.title}</div>;
}`,
    },
    {
      id: 5,
      title: "Functional vs Class Components",
      type: "comparison-table",
      description:
        "Understanding the differences between functional and class components is fundamental to modern React development and helps choose the right approach for different scenarios.",
      content: {
        headers: ["Feature", "Functional Components", "Class Components"],
        rows: [
          ["Syntax", "JavaScript functions", "ES6 classes"],
          ["State Management", "useState Hook", "this.state & setState()"],
          ["Lifecycle", "useEffect Hook", "componentDidMount, etc."],
          ["Performance", "More optimized", "Class overhead"],
        ],
      },
    },
    {
      id: 6,
      title: "Virtual DOM and Performance",
      type: "text-with-list",
      description:
        "The Virtual DOM is a lightweight representation of the actual DOM that React uses to optimize updates. Understanding this concept is crucial for React performance optimization.",
      list: [
        "React creates Virtual DOM tree",
        "When changes occur, new Virtual DOM is created",
        "React compares old and new Virtual DOM (diffing)",
        "Only necessary parts are updated in real DOM",
      ],
    },
    {
      id: 7,
      title: "React Hooks",
      type: "text-with-code",
      description:
        "Hooks are functions that allow you to use state and other React features in functional components. They provide a more direct API to React concepts without classes.",
      code: `// useState
const [count, setCount] = useState(0);

// useEffect
useEffect(() => {
  console.log("Component mounted");
  return () => console.log("Cleanup");
}, []);

// useContext
const theme = useContext(ThemeContext);`,
    },
    {
      id: 8,
      title: "Controlled vs Uncontrolled Components",
      type: "text-with-code",
      description:
        "Controlled components have their state managed by React, while uncontrolled components manage their own state internally. Understanding when to use each is important for form handling.",
      code: `// Controlled Component
const [value, setValue] = useState("");
<input 
  type="text" 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>

// Uncontrolled Component
const inputRef = useRef();
<input type="text" ref={inputRef} />`,
    },
    {
      id: 9,
      title: "Context API",
      type: "text-with-code",
      description:
        "Context API allows data to be passed through the component tree without manually passing props at every level. It's useful for sharing global state like themes, user data, or language preferences.",
      code: `const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}`,
    },
    {
      id: 10,
      title: "React.memo for Performance",
      type: "text-with-code",
      description:
        "React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders when props haven't changed. It's a performance optimization technique.",
      code: `const MemoizedComponent = React.memo(MyComponent);
// Only re-renders when props change`,
    },
    {
      id: 11,
      title: "useCallback and useMemo",
      type: "text-with-code",
      description:
        "useCallback and useMemo are hooks that help optimize performance by memoizing functions and values respectively. They prevent unnecessary re-renders and expensive recalculations.",
      code: `// useCallback - memoizes functions
const memoizedFunction = useCallback(() => {
  doSomething();
}, [dependency]);

// useMemo - memoizes values
const memoizedValue = useMemo(() => {
  return computeExpensiveValue();
}, [dependency]);`,
    },
    {
      id: 12,
      title: "Error Boundaries",
      type: "text-with-code",
      description:
        "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of the component tree that crashed.",
      code: `class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`,
    },
    {
      id: 13,
      title: "React Reconciliation Process",
      type: "text-with-code",
      description:
        "Reconciliation is the algorithm React uses to determine what parts of the UI need to be updated. It compares the new Virtual DOM with the previous one to make efficient updates.",
      code: `// React's reconciliation algorithm
// 1. Different root elements - complete re-render
<div>
  <Counter />
</div>
// vs
<span>
  <Counter />
</span>

// 2. Same element types - update props
<div className="before" />
// vs
<div className="after" />

// 3. Different element types - re-create
<div>
  <Counter />
</div>
// vs
<span>
  <Counter />
</span>

// 4. Keys for list items
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`,
    },
    {
      id: 14,
      title: "React Hooks: useState, useEffect, useContext",
      type: "text-with-code",
      description:
        "Hooks are functions that allow you to use state and other React features in functional components. They provide a more direct API to React concepts without classes.",
      code: `// useState - for state management
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', email: '' });

// useEffect - for side effects
useEffect(() => {
  console.log("Component mounted");
  return () => console.log("Cleanup");
}, []);

useEffect(() => {
  fetchData();
}, [dependency]);

// useContext - for consuming context
const theme = useContext(ThemeContext);
const user = useContext(UserContext);`,
    },
    {
      id: 15,
      title: "useRef and useMemo Hooks",
      type: "text-with-code",
      description:
        "useRef provides a way to access DOM elements and persist values between renders, while useMemo memoizes expensive calculations to optimize performance.",
      code: `// useRef - accessing DOM elements
const inputRef = useRef();

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;

// useRef - persisting values
const previousValue = useRef();

useEffect(() => {
  previousValue.current = value;
}, [value]);

// useMemo - memoizing expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// useMemo vs useCallback
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
const memoizedFunction = useCallback(() => computeValue(a, b), [a, b]);`,
    },
    {
      id: 16,
      title: "Higher-Order Components (HOC)",
      type: "text-with-code",
      description:
        "Higher-Order Components are functions that take a component and return a new component with additional props or behavior. They're useful for code reuse and cross-cutting concerns.",
      code: `// HOC pattern
function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// Usage
const UserListWithLoading = withLoading(UserList);

// HOC with additional props
function withUser(WrappedComponent) {
  return function WithUserComponent(props) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
      fetchUser().then(setUser);
    }, []);
    
    return <WrappedComponent {...props} user={user} />;
  };
}

// Multiple HOCs
const EnhancedComponent = withUser(withLoading(UserProfile));`,
    },
    {
      id: 17,
      title: "Lifting State Up",
      type: "text-with-code",
      description:
        "Lifting state up is a pattern where you move state to the closest common ancestor of components that need to share that state. This ensures data flows down through props.",
      code: `// Before: State in child components
function TemperatureInput({ scale }) {
  const [temperature, setTemperature] = useState('');
  // ...
}

// After: State lifted to parent
function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');
  
  return (
    <div>
      <TemperatureInput 
        scale="c"
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <TemperatureInput 
        scale="f"
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
    </div>
  );
}`,
    },
    {
      id: 18,
      title: "Prop Drilling and How to Avoid It",
      type: "text-with-code",
      description:
        "Prop drilling occurs when you pass data through multiple levels of components. It can be avoided using Context API, composition, or state management libraries.",
      code: `// Prop drilling - BAD
function App() {
  const [user, setUser] = useState(null);
  return <Header user={user} />;
}

function Header({ user }) {
  return <Navigation user={user} />;
}

function Navigation({ user }) {
  return <UserMenu user={user} />;
}

// Using Context API - GOOD
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function UserMenu() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
}

// Using composition - ALSO GOOD
function App() {
  const [user, setUser] = useState(null);
  return <Header userMenu={<UserMenu user={user} />} />;
}`,
    },
    {
      id: 19,
      title: "Suspense and React Lazy",
      type: "text-with-code",
      description:
        "React Suspense allows you to wrap components that might not be ready to render and show a fallback. React.lazy enables code splitting and lazy loading of components.",
      code: `// React.lazy for code splitting
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Suspense for lazy loading
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Multiple lazy components
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent1 />
      <LazyComponent2 />
    </Suspense>
  );
}

// Nested Suspense
function App() {
  return (
    <Suspense fallback={<div>Loading app...</div>}>
      <Header />
      <Suspense fallback={<div>Loading content...</div>}>
        <LazyContent />
      </Suspense>
    </Suspense>
  );
}`,
    },
    {
      id: 20,
      title: "Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)",
      type: "comparison-table",
      description:
        "SSR and CSR are different approaches to rendering React applications. Understanding their differences helps choose the right approach for your application.",
      content: {
        headers: ["Aspect", "SSR", "CSR"],
        rows: [
          ["Initial Load", "Faster (pre-rendered HTML)", "Slower (JS bundle)"],
          ["SEO", "Better (crawlable content)", "Poorer (JS-dependent)"],
          ["Interactivity", "Hydration required", "Immediate"],
          ["Complexity", "More complex setup", "Simpler setup"],
          ["Use Cases", "Content-heavy sites", "SPAs, dashboards"],
        ],
      },
    },
    {
      id: 21,
      title: "Performance Optimization in Large React Apps",
      type: "text-with-list",
      description:
        "Optimizing performance in large React applications requires understanding various techniques and tools. This is crucial for maintaining good user experience as applications scale.",
      list: [
        "Use React.memo for expensive components",
        "Implement useCallback and useMemo appropriately",
        "Code splitting with React.lazy and Suspense",
        "Virtualization for large lists (react-window)",
        "Optimize bundle size with tree shaking",
        "Use production builds and enable compression",
        "Implement proper error boundaries",
        "Monitor performance with React DevTools Profiler",
      ],
    },
    {
      id: 22,
      title: "Next.js Benefits over Create React App",
      type: "text-with-list",
      description:
        "Next.js provides additional features and optimizations over Create React App, making it a popular choice for production React applications.",
      list: [
        "Built-in SSR and SSG support",
        "Automatic code splitting and optimization",
        "File-based routing system",
        "API routes for backend functionality",
        "Built-in image optimization",
        "Automatic polyfills and transpilation",
        "Zero configuration for most use cases",
        "Better SEO capabilities out of the box",
        "Built-in TypeScript support",
        "Automatic static optimization",
      ],
    },
  ],
};
