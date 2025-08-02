export const reduxData = {
  title: "🔄 Redux & Redux-Saga Interview Questions",
  questions: [
    {
      id: 1,
      title: "What is Redux and why do we use it?",
      type: "text-with-code",
      description:
        "Redux is a predictable state container for JavaScript applications. It helps manage application state in a predictable way, making it easier to debug and test applications.",
      extraInfo: {
        Purpose:
          "Redux provides a single source of truth for application state, making state changes predictable and traceable.",
        Benefits: [
          "Predictable state updates",
          "Centralized state management",
          "Easy debugging with Redux DevTools",
          "Testable state logic",
          "Works well with React and other frameworks",
        ],
        WhenToUse:
          "Use Redux for complex applications with shared state, when you need predictable state management, or when debugging state changes is important.",
      },
      code: `// Basic Redux setup
import { createStore } from 'redux';

// Action
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: { text, completed: false }
});

// Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

// Store
const store = createStore(todoReducer);

// Usage
store.dispatch(addTodo('Learn Redux'));
console.log(store.getState()); // [{ text: 'Learn Redux', completed: false }]`,
    },
    {
      id: 2,
      title: "Redux Data Flow (Action → Reducer → Store → View)",
      type: "text-with-code",
      description:
        "Redux follows a unidirectional data flow where state changes are predictable and traceable. Understanding this flow is crucial for building Redux applications.",
      extraInfo: {
        Flow: "1. User interacts with View → 2. View dispatches Action → 3. Reducer processes Action → 4. Store updates State → 5. View re-renders with new State",
        Unidirectional:
          "Data flows in one direction, making the application predictable and easier to debug.",
        Immutability:
          "State is never mutated directly; new state objects are created instead.",
      },
      code: `// 1. Action (describes what happened)
const incrementAction = () => ({
  type: 'INCREMENT',
  payload: 1
});

// 2. Reducer (determines how state changes)
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload; // New state, not mutated
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
};

// 3. Store (holds the state)
const store = createStore(counterReducer);

// 4. View (React component)
function Counter() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(incrementAction())}>
        Increment
      </button>
    </div>
  );
}

// Complete flow example
store.dispatch(incrementAction()); // Action dispatched
// → Reducer processes action
// → Store updates state
// → Component re-renders with new state`,
    },
    {
      id: 3,
      title: "Middleware in Redux",
      type: "text-with-code",
      description:
        "Middleware in Redux is a function that sits between dispatching an action and the moment it reaches the reducer. It's used for logging, async operations, and other side effects.",
      extraInfo: {
        Purpose:
          "Middleware allows you to intercept actions before they reach the reducer, enabling side effects like API calls, logging, and async operations.",
        CommonUses: [
          "Logging actions and state changes",
          "Handling async operations (Redux Thunk, Redux Saga)",
          "Transforming actions before they reach reducers",
          "Adding timestamps or other metadata to actions",
        ],
      },
      code: `// Custom logging middleware
const loggingMiddleware = store => next => action => {
  console.log('Previous State:', store.getState());
  console.log('Action:', action);
  
  const result = next(action);
  
  console.log('Next State:', store.getState());
  return result;
};

// Async middleware (simplified Redux Thunk)
const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

// Store with middleware
const store = createStore(
  rootReducer,
  applyMiddleware(loggingMiddleware, asyncMiddleware)
);

// Usage with async action
const fetchUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_USER_START' });
  
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const user = await response.json();
    dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_ERROR', payload: error.message });
  }
};

// Dispatch async action
store.dispatch(fetchUser(123));`,
    },
    {
      id: 4,
      title: "Redux Core Concepts",
      type: "text-with-code",
      description:
        "Redux is a predictable state container for JavaScript apps. Understanding its core concepts (actions, reducers, store, view) is fundamental to using Redux effectively.",
      extraInfo: {
        Action:
          "An action is a plain JavaScript object that describes an event in the application. It must have a `type` property and can include additional data (payload). Actions are dispatched to the store to trigger state changes.",
        Reducer:
          "A reducer is a pure function that takes the current state and an action, and returns a new state. It determines how the state changes based on the action's type.",
        Store:
          "The store holds the application state and provides methods to access the state, dispatch actions, and subscribe to changes. There is typically only one store in a Redux application.",
        View: "The view (usually a React component) reads data from the store via `mapStateToProps` or React-Redux hooks like `useSelector`. It dispatches actions using `dispatch` or hooks like `useDispatch` to trigger state updates.",
      },
      code: `// Action
const INCREMENT = "INCREMENT";
const incrementAction = () => ({ type: INCREMENT });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);
store.dispatch(incrementAction());`,
    },
    {
      id: 5,
      title: "Redux Toolkit Benefits",
      type: "list-only",
      description:
        "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies common Redux use cases and provides good defaults.",
      extraInfo: {
        Why: "Redux Toolkit is designed to solve common Redux pain points such as too much boilerplate, complex store setup, and manual action/reducer wiring.",
        Features: [
          "Simplifies Redux setup",
          "Built-in Immer.js support for immutable updates",
          "Includes redux-thunk middleware for async logic",
          "Reduces boilerplate code significantly",
          "Encourages best practices",
        ],
      },
      list: [
        "Simplifies Redux setup",
        "Built-in Immer.js support",
        "Includes redux-thunk middleware",
        "Reduces boilerplate code",
      ],
    },
    {
      id: 6,
      title: "Redux Saga vs Redux Thunk",
      type: "comparison-table",
      description:
        "Redux Saga and Redux Thunk are middleware libraries for handling side effects in Redux. Understanding their differences helps choose the right approach for complex async operations.",
      extraInfo: {
        ReduxThunk:
          "A middleware that allows writing action creators that return a function instead of an action object. Good for simple async logic like API calls.",
        ReduxSaga:
          "A middleware that uses ES6 generator functions to handle complex asynchronous flows and side effects in a more declarative way.",
        WhenToUse:
          "Use Thunk for basic async logic. Use Saga when dealing with complex workflows, retries, cancellation, or background tasks.",
      },
      content: {
        headers: ["Feature", "Redux Thunk", "Redux Saga"],
        rows: [
          ["Syntax", "Functions in actions", "Generator functions"],
          ["Complexity", "Simple", "More complex"],
          ["Testing", "Easy to test", "More testable"],
          ["Use Case", "Simple async operations", "Complex side effects"],
        ],
      },
    },
    {
      id: 7,
      title: "Redux Toolkit vs Manual Reducer/Action Creation",
      type: "comparison-table",
      description:
        "Redux Toolkit's createSlice automatically generates actions and reducers, reducing boilerplate compared to manual creation. Understanding the difference helps choose the right approach.",
      extraInfo: {
        createSlice:
          "Automatically generates action creators and action types based on reducer functions you provide. Uses Immer for immutable updates.",
        Manual:
          "Requires manually writing action types, action creators, and reducers. More verbose but gives you complete control.",
      },
      content: {
        headers: ["Aspect", "Redux Toolkit (createSlice)", "Manual Creation"],
        rows: [
          ["Boilerplate", "Minimal", "Verbose"],
          ["Action Types", "Auto-generated", "Manual definition"],
          ["Action Creators", "Auto-generated", "Manual creation"],
          [
            "Immutable Updates",
            "Immer.js (mutable syntax)",
            "Manual spread/object creation",
          ],
          ["Learning Curve", "Easier", "More complex"],
          ["Control", "Less control", "Complete control"],
        ],
      },
    },
    {
      id: 8,
      title: "Redux Saga Effects",
      type: "text-with-code",
      description:
        "Redux Saga effects are declarative instructions for the saga middleware. They provide a way to describe side effects in a testable and manageable way.",
      extraInfo: {
        call: "Invokes a function and returns its result. Used for async calls like API requests.",
        put: "Dispatches an action to the Redux store.",
        takeEvery:
          "Listens for every occurrence of a specific action and runs the given saga.",
        takeLatest:
          "Listens for the latest occurrence of a specific action, cancelling previous ongoing ones.",
      },
      code: `import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchDataSaga() {
  try {
    const data = yield call(api.fetchData);
    yield put({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', payload: error });
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCH_DATA', fetchDataSaga);
}`,
    },
    {
      id: 9,
      title: "Scaling Redux in Large Enterprise Apps",
      type: "text-with-list",
      description:
        "Scaling Redux in large enterprise applications requires careful planning of state structure, code organization, and performance optimization strategies.",
      extraInfo: {
        Challenges: [
          "Managing large state trees",
          "Performance with frequent updates",
          "Code organization and maintainability",
          "Team collaboration on state management",
        ],
        Solutions: [
          "Use Redux Toolkit for reduced boilerplate",
          "Implement proper state normalization",
          "Use selectors for derived state",
          "Split reducers and actions by feature",
        ],
      },
      list: [
        "Use Redux Toolkit to reduce boilerplate and enforce best practices",
        "Implement state normalization to avoid nested data structures",
        "Use selectors (reselect) for computed/derived state",
        "Split reducers and actions by feature/domain",
        "Implement proper error handling and loading states",
        "Use middleware for cross-cutting concerns (logging, analytics)",
        "Optimize performance with React.memo and useMemo",
        "Implement proper testing strategies for actions, reducers, and sagas",
        "Use TypeScript for better type safety and developer experience",
        "Consider using Redux Toolkit Query for API state management",
      ],
    },
    {
      id: 10,
      title: "Redux Toolkit createSlice Example",
      type: "text-with-code",
      description:
        "createSlice is a function from Redux Toolkit that automatically generates action creators and action types based on reducer functions you provide.",
      extraInfo: {
        Benefits: [
          "Reduces boilerplate code",
          "Uses Immer for immutable updates",
          "Auto-generates action creators",
          "Encourages best practices",
        ],
      },
      code: `import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false,
    error: null
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer allows "mutating" syntax
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// Auto-generated action creators
export const { increment, decrement, incrementByAmount, setLoading, setError } = counterSlice.actions;

// Auto-generated reducer
export default counterSlice.reducer;

// Usage in component
function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}`,
    },
    {
      id: 11,
      title: "Redux State Normalization",
      type: "text-with-code",
      description:
        "State normalization is a technique for organizing Redux state to avoid nested data structures and improve performance and maintainability.",
      extraInfo: {
        Benefits: [
          "Faster lookups by ID",
          "Easier updates and deletions",
          "Consistent data structure",
          "Better performance with large datasets",
        ],
      },
      code: `// Before normalization (nested structure)
const state = {
  users: [
    {
      id: 1,
      name: 'John',
      posts: [
        { id: 1, title: 'Post 1', comments: [...] },
        { id: 2, title: 'Post 2', comments: [...] }
      ]
    }
  ]
};

// After normalization (flat structure)
const normalizedState = {
  users: {
    byId: {
      1: { id: 1, name: 'John' }
    },
    allIds: [1]
  },
  posts: {
    byId: {
      1: { id: 1, title: 'Post 1', authorId: 1 },
      2: { id: 2, title: 'Post 2', authorId: 1 }
    },
    allIds: [1, 2]
  },
  comments: {
    byId: {
      // comment data
    },
    allIds: []
  }
};

// Selectors for normalized state
const selectUserById = (state, userId) => state.users.byId[userId];
const selectPostsByUserId = (state, userId) => 
  state.posts.allIds
    .map(id => state.posts.byId[id])
    .filter(post => post.authorId === userId);

// Reducer for normalized state
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    byId: {},
    allIds: []
  },
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      state.byId[user.id] = user;
      if (!state.allIds.includes(user.id)) {
        state.allIds.push(user.id);
      }
    },
    updateUser: (state, action) => {
      const { id, ...updates } = action.payload;
      if (state.byId[id]) {
        Object.assign(state.byId[id], updates);
      }
    },
    removeUser: (state, action) => {
      const userId = action.payload;
      delete state.byId[userId];
      state.allIds = state.allIds.filter(id => id !== userId);
    }
  }
});`,
    },
    {
      id: 12,
      title: "Redux Performance Optimization",
      type: "text-with-list",
      description:
        "Optimizing Redux performance is crucial for large applications. Understanding techniques like selectors, memoization, and proper component optimization helps maintain good performance.",
      extraInfo: {
        KeyAreas: [
          "Selector optimization with reselect",
          "Component re-render optimization",
          "State structure optimization",
          "Middleware performance",
        ],
      },
      list: [
        "Use reselect for memoized selectors to prevent unnecessary recalculations",
        "Implement React.memo for components that receive Redux state",
        "Use shallowEqual for useSelector when comparing objects",
        "Normalize state to avoid nested data structures",
        "Use Redux Toolkit's createEntityAdapter for normalized state",
        "Implement proper loading and error states to prevent unnecessary renders",
        "Use Redux Toolkit Query for API state management",
        "Optimize middleware to avoid performance bottlenecks",
        "Use Redux DevTools for performance monitoring",
        "Implement proper action batching for multiple state updates",
      ],
    },
  ],
};
