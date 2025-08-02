export const nextjsData = {
  title: "⚡ Next.js Interview Questions",
  questions: [
    {
      id: 1,
      title: "Next.js vs React",
      type: "comparison-table",
      description:
        "Next.js is a React framework that provides additional features beyond what React offers. Understanding the differences helps choose the right tool for your project.",
      content: {
        headers: ["Feature", "Next.js", "React"],
        rows: [
          ["SSR/SSG", "✅ Built-in support", "❌ Requires setup"],
          ["Routing", "File-based routing", "react-router needed"],
          ["API Routes", "✅ Built-in", "❌ Separate backend"],
          ["Image Optimization", "✅ next/image", "❌ Manual optimization"],
        ],
      },
    },
    {
      id: 2,
      title: "App Router vs Pages Router",
      type: "comparison-table",
      description:
        "Next.js introduced the App Router in v13, offering a new way to build applications using the /app directory, React Server Components, and streaming. Pages Router is the traditional approach.",
      content: {
        headers: ["Feature", "App Router (/app)", "Pages Router (/pages)"],
        rows: [
          [
            "Rendering Model",
            "Server Components + Client Components",
            "Only Client Components",
          ],
          [
            "Data Fetching",
            "`fetch()` in server components",
            "getStaticProps, getServerSideProps",
          ],
          [
            "Routing",
            "Nested layouts & server-driven routing",
            "File-based pages only",
          ],
          ["Streaming & Suspense", "✅ Built-in", "❌ Not supported"],
          ["SEO & Metadata", "Metadata API", "Head component"],
          ["Migration", "Recommended for new apps", "Legacy projects"],
        ],
      },
    },
    {
      id: 3,
      title: "SSR, SSG, ISR, and CSR in Next.js",
      type: "text-with-code",
      description:
        "Next.js supports multiple rendering strategies. Understanding when to use each is crucial for performance and SEO optimization.",
      code: `// SSR (Server-Side Rendering)
// pages/ssr-page.js
export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data: await data.json() } };
}

// SSG (Static Site Generation)
// pages/ssg-page.js
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data: await data.json() } };
}

// ISR (Incremental Static Regeneration)
// pages/isr-page.js
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return { 
    props: { data: await data.json() },
    revalidate: 60 // Rebuild every 60 seconds
  };
}

// CSR (Client-Side Rendering)
// pages/csr-page.js
export default function CSRPage() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(setData);
  }, []);
  
  return <div>{data?.message}</div>;
}`,
    },
    {
      id: 4,
      title: "getStaticProps, getServerSideProps, and getStaticPaths",
      type: "text-with-code",
      description:
        "These functions are Next.js data fetching methods that run at different times during the build and request lifecycle. Understanding when to use each is crucial for performance optimization.",
      code: `// getStaticProps (SSG)
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10, // ISR
  };
}

// getServerSideProps (SSR)
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return {
    props: { data },
  };
}

// getStaticPaths (for dynamic routes)
export async function getStaticPaths() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  
  return {
    paths,
    fallback: false, // or 'blocking' or true
  };
}`,
    },
    {
      id: 5,
      title: "Next.js Routing System",
      type: "text-with-code",
      description:
        "Next.js uses a file-system based router where folders define routes. Understanding this system is fundamental to building Next.js applications.",
      code: `// File-based routing structure
pages/
├── index.js          // → /
├── about.js          // → /about
├── blog/
│   ├── index.js      // → /blog
│   └── [id].js       // → /blog/1, /blog/2, etc.
└── api/
    └── users.js      // → /api/users

// App Router structure
app/
├── page.js           // → /
├── about/
│   └── page.js       // → /about
├── blog/
│   ├── page.js       // → /blog
│   └── [id]/
│       └── page.js   // → /blog/1, /blog/2, etc.
└── api/
    └── users/
        └── route.js  // → /api/users

// Dynamic routes with catch-all
// pages/blog/[...slug].js
// Matches: /blog/a, /blog/a/b, /blog/a/b/c

// Optional catch-all routes
// pages/blog/[[...slug]].js
// Matches: /blog, /blog/a, /blog/a/b`,
    },
    {
      id: 6,
      title: "Dynamic Routes in Next.js",
      type: "text-with-code",
      description:
        "Dynamic routes in Next.js allow you to create pages with dynamic parameters. They're essential for creating dynamic content like blog posts, user profiles, or product pages.",
      code: `// pages/blog/[id].js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/blog/\${params.id}\`);
  const data = await res.json();
  return {
    props: { data }
  };
}

// App Router dynamic routes
// app/blog/[id]/page.js
export default async function BlogPost({ params }) {
  const data = await fetch(\`https://api.example.com/blog/\${params.id}\`);
  const post = await data.json();
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`,
    },
    {
      id: 7,
      title: "API Routes vs Serverless Functions",
      type: "comparison-table",
      description:
        "API routes in Next.js are serverless functions that run on the edge or server. Understanding their differences from traditional serverless functions helps in architecture decisions.",
      content: {
        headers: ["Feature", "Next.js API Routes", "Traditional Serverless"],
        rows: [
          ["Deployment", "Integrated with Next.js", "Separate deployment"],
          ["Cold Start", "Optimized for Next.js", "Standard cold start"],
          [
            "Database Connections",
            "Connection pooling",
            "Individual connections",
          ],
          ["File System", "Read-only in production", "No file system access"],
          ["Environment", "Next.js runtime", "Node.js runtime"],
          ["Scaling", "Automatic with Next.js", "Platform-dependent"],
        ],
      },
    },
    {
      id: 8,
      title: "Image Optimization with next/image",
      type: "text-with-code",
      description:
        "The next/image component automatically optimizes images for faster load times, responsive sizing, and modern formats.",
      code: `import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Basic usage */}
      <Image src="/hero.png" alt="Hero" width={500} height={300} />
      
      {/* Responsive image */}
      <Image 
        src="/responsive.jpg" 
        alt="Responsive"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* External image */}
      <Image 
        src="https://example.com/image.jpg"
        alt="External"
        width={300}
        height={200}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
      
      {/* Priority loading */}
      <Image 
        src="/above-fold.jpg" 
        alt="Above fold"
        priority
        width={800}
        height={600}
      />
    </div>
  );
}`,
    },
    {
      id: 9,
      title: "Environment Variables in Next.js",
      type: "text-with-code",
      description:
        "Next.js handles environment variables differently for build-time and runtime. Understanding this is crucial for configuration management.",
      code: `// .env.local (local development)
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://user:pass@localhost:5432/db
SECRET_KEY=your-secret-key

// .env.production (production)
NEXT_PUBLIC_API_URL=https://api.production.com
DATABASE_URL=postgresql://user:pass@prod:5432/db

// Usage in components
export default function Component() {
  // Public variables (available in browser)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  return <div>API: {apiUrl}</div>;
}

// Usage in API routes (server-side only)
export default function handler(req, res) {
  // Private variables (server-side only)
  const dbUrl = process.env.DATABASE_URL;
  const secret = process.env.SECRET_KEY;
  
  res.json({ message: 'Hello' });
}

// next.config.js for build-time variables
module.exports = {
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};`,
    },
    {
      id: 10,
      title: "Custom Error Pages in Next.js",
      type: "text-with-code",
      description:
        "Next.js allows you to create custom error pages for different HTTP status codes. This improves user experience when errors occur.",
      code: `// pages/404.js - Custom 404 page
export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

// pages/500.js - Custom 500 page
export default function Custom500() {
  return (
    <div>
      <h1>500 - Server Error</h1>
      <p>Something went wrong on our end.</p>
    </div>
  );
}

// pages/_error.js - Custom error page for all errors
function Error({ statusCode }) {
  return (
    <div>
      <h1>
        {statusCode
          ? \`An error \${statusCode} occurred on server\`
          : 'An error occurred on client'}
      </h1>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

// App Router error handling
// app/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}`,
    },
    {
      id: 11,
      title: "Incremental Static Regeneration (ISR)",
      type: "text-with-code",
      description:
        "ISR allows you to update static pages after they've been built, without rebuilding the entire site. This is useful for scaling large content-driven websites.",
      code: `export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60 // Rebuild page every 60 seconds
  };
}

// On-demand ISR
// pages/api/revalidate.js
export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('/blog');
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}

// Trigger revalidation
// POST /api/revalidate?secret=your-token`,
    },
    {
      id: 12,
      title: "Edge Rendering in Next.js",
      type: "text-with-code",
      description:
        "Edge Rendering runs your code on edge locations worldwide, providing faster response times compared to traditional server-side rendering.",
      code: `// Edge Runtime API Route
// pages/api/edge.js
export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  return new Response('Hello from Edge!', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

// Edge Middleware
// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Run on edge locations
  const country = request.geo?.country || 'Unknown';
  
  return NextResponse.next({
    headers: {
      'x-country': country,
    },
  });
}

export const config = {
  matcher: '/api/:path*',
};

// Edge Functions vs Serverless
// Edge: Runs on edge locations, faster, limited APIs
// Serverless: Runs on server, more APIs, slower`,
    },
    {
      id: 13,
      title: "Core Web Vitals Optimization",
      type: "text-with-list",
      description:
        "Next.js provides built-in optimizations for Core Web Vitals. Understanding these helps create fast, user-friendly applications.",
      list: [
        "Use next/image for automatic image optimization and lazy loading",
        "Implement proper font loading with next/font",
        "Use React.lazy and Suspense for code splitting",
        "Optimize bundle size with dynamic imports",
        "Use ISR for frequently updated content",
        "Implement proper caching strategies",
        "Use Web Vitals library for monitoring",
        "Optimize third-party scripts with Script component",
      ],
    },
    {
      id: 14,
      title: "Middleware in Next.js",
      type: "text-with-code",
      description:
        "Middleware runs before a request is completed, allowing you to modify the request or response. It's great for authentication, redirects, and logging.",
      code: `// middleware.ts
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

// Advanced middleware examples
export function middleware(request) {
  // Authentication
  const token = request.cookies.get('auth-token');
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // A/B Testing
  const variant = request.cookies.get('ab-variant') || 'A';
  const response = NextResponse.next();
  response.headers.set('x-variant', variant);
  
  return response;
}

// Conditional middleware
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};`,
    },
    {
      id: 15,
      title: "Authentication in Next.js with SSR and API Routes",
      type: "text-with-code",
      description:
        "Implementing authentication in Next.js requires understanding how to handle user sessions across server-side rendering and API routes.",
      code: `// pages/api/auth/login.js
import { sign } from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;
  
  // Validate credentials
  const user = await validateUser(email, password);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create JWT token
  const token = sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  // Set HTTP-only cookie
  res.setHeader('Set-Cookie', \`auth-token=\${token}; HttpOnly; Path=/; Max-Age=3600\`);
  
  res.json({ user: { id: user.id, email: user.email } });
}

// pages/api/auth/logout.js
export default function handler(req, res) {
  res.setHeader('Set-Cookie', 'auth-token=; HttpOnly; Path=/; Max-Age=0');
  res.json({ message: 'Logged out' });
}

// getServerSideProps for protected pages
export async function getServerSideProps({ req, res }) {
  const token = req.cookies['auth-token'];
  
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    const user = await getUserById(decoded.userId);
    
    return {
      props: { user },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}`,
    },
    {
      id: 16,
      title: "GraphQL and REST API Integration",
      type: "text-with-code",
      description:
        "Next.js can integrate with both GraphQL and REST APIs. Understanding how to handle data fetching and caching is crucial for performance.",
      code: `// REST API Integration
// pages/api/users.js
export default async function handler(req, res) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  res.json(users);
}

// GraphQL Integration
// lib/graphql.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.example.com/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;

// pages/blog/[id].js
import { gql } from '@apollo/client';
import client from '../../lib/graphql';

const GET_POST = gql\`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      author {
        name
      }
    }
  }
\`;

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_POST,
    variables: { id: params.id },
  });

  return {
    props: { post: data.post },
    revalidate: 60,
  };
}

// REST with caching
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts', {
    headers: {
      'Authorization': \`Bearer \${process.env.API_TOKEN}\`,
    },
  });
  
  const posts = await res.json();
  
  return {
    props: { posts },
    revalidate: 300, // Cache for 5 minutes
  };
}`,
    },
    {
      id: 17,
      title: "Internationalization (i18n) in Next.js",
      type: "text-with-code",
      description:
        "Next.js supports built-in internationalized routing for multilingual websites.",
      code: `// next.config.js
module.exports = {
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { locale, locales } = router;

  return (
    <div>
      <h1>Current locale: {locale}</h1>
      <div>
        {locales.map((l) => (
          <button key={l} onClick={() => router.push(router.asPath, router.asPath, { locale: l })}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

// App Router i18n
// app/[lang]/page.js
export default function Page({ params }) {
  const { lang } = params;
  
  return (
    <div>
      <h1>Language: {lang}</h1>
    </div>
  );
}

// Translation files
// locales/en.json
{
  "welcome": "Welcome",
  "hello": "Hello, {name}!"
}

// locales/fr.json
{
  "welcome": "Bienvenue",
  "hello": "Bonjour, {name} !"
}`,
    },
    {
      id: 18,
      title: "Prefetching in Next.js",
      type: "text-with-code",
      description:
        "Next.js automatically prefetches pages in the viewport to improve navigation performance. Understanding this helps optimize user experience.",
      code: `import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      {/* Automatic prefetching */}
      <Link href="/about">About</Link>
      
      {/* Disable prefetching */}
      <Link href="/heavy-page" prefetch={false}>Heavy Page</Link>
      
      {/* Conditional prefetching */}
      <Link href="/dashboard" prefetch={isAuthenticated}>
        Dashboard
      </Link>
    </nav>
  );
}

// Programmatic prefetching
import { useRouter } from 'next/router';

export default function Component() {
  const router = useRouter();
  
  const handleMouseEnter = () => {
    router.prefetch('/about');
  };
  
  return (
    <div onMouseEnter={handleMouseEnter}>
      Hover to prefetch About page
    </div>
  );
}

// App Router prefetching
// app/components/navigation.js
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/about" prefetch={true}>
        About
      </Link>
    </nav>
  );
}`,
    },
    {
      id: 19,
      title: "State Management in Next.js at Scale",
      type: "text-with-code",
      description:
        "Managing state in large Next.js applications requires understanding different patterns and tools for client-side and server-side state.",
      code: `// Client-side state with Zustand
import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

// Server-side state with SWR
import useSWR from 'swr';

export default function UserProfile() {
  const { data, error, mutate } = useSWR('/api/user', fetcher);
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  
  return <div>Hello {data.name}!</div>;
}

// Global state with Context
// contexts/AppContext.js
import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  theme: 'light',
  language: 'en',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

// Redux Toolkit with Next.js
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// pages/_app.js
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}`,
    },
    {
      id: 20,
      title: "Custom Server with Next.js",
      type: "text-with-code",
      description:
        "Next.js allows you to create a custom server for advanced use cases like custom routing, middleware, or integration with existing Express apps.",
      code: `// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Custom routing
      if (pathname === '/custom-route') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Custom Route</h1>');
        return;
      }

      // API proxy
      if (pathname.startsWith('/api/external')) {
        const response = await fetch('https://api.external.com' + pathname);
        const data = await response.json();
        res.json(data);
        return;
      }

      // Handle Next.js pages
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(\`> Ready on http://\${hostname}:\${port}\`);
  });
});

// package.json
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}

// Express.js integration
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Custom middleware
  server.use('/api', (req, res, next) => {
    console.log('API request:', req.url);
    next();
  });

  // Custom routes
  server.get('/health', (req, res) => {
    res.json({ status: 'OK' });
  });

  // Handle Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});`,
    },
    {
      id: 21,
      title: "Multi-tenant SaaS Architecture",
      type: "text-with-list",
      description:
        "Building a multi-tenant SaaS platform with Next.js requires careful consideration of data isolation, routing, and deployment strategies.",
      list: [
        "Use subdomain routing (tenant1.app.com) or path-based routing (/tenant1)",
        "Implement tenant isolation at the database level with row-level security",
        "Use middleware for tenant detection and authentication",
        "Implement feature flags per tenant for gradual rollouts",
        "Use separate build processes or dynamic configuration per tenant",
        "Implement proper caching strategies with tenant-aware keys",
        "Use edge functions for tenant-specific personalization",
        "Implement proper monitoring and analytics per tenant",
      ],
    },
    {
      id: 22,
      title: "Rendering Strategy Selection",
      type: "text-with-list",
      description:
        "Choosing the right rendering strategy for different pages is crucial for performance and user experience.",
      list: [
        "SSR for dynamic content that needs SEO (blog posts, product pages)",
        "SSG for static content (landing pages, documentation)",
        "ISR for content that updates occasionally (news, product catalogs)",
        "CSR for admin dashboards and highly interactive pages",
        "Edge Rendering for personalized content that needs global performance",
        "Hybrid approach: SSG for static parts, CSR for interactive components",
        "Consider user location and device capabilities for edge rendering",
        "Use analytics to measure and optimize rendering strategy",
      ],
    },
    {
      id: 23,
      title: "Build Performance Optimization",
      type: "text-with-list",
      description:
        "Optimizing build performance for large Next.js applications is crucial for development velocity and deployment speed.",
      list: [
        "Use incremental builds and selective page generation",
        "Implement proper code splitting with dynamic imports",
        "Optimize images and assets during build time",
        "Use build caching and parallel processing",
        "Implement proper tree shaking and bundle analysis",
        "Use monorepo tools like Turborepo for multiple apps",
        "Optimize dependencies and remove unused packages",
        "Use build-time environment variables for configuration",
      ],
    },
    {
      id: 24,
      title: "API Rate Limiting and Caching",
      type: "text-with-code",
      description:
        "Implementing rate limiting and caching for Next.js API routes is essential for protecting your backend and improving performance.",
      code: `// pages/api/rate-limited.js
import rateLimit from 'express-rate-limit';
import { NextApiRequest, NextApiResponse } from 'next';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP',
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    limiter(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    });
  });
}

// Caching with Redis
// lib/redis.js
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export default redis;

// pages/api/cached-data.js
import redis from '../../lib/redis';

export default async function handler(req, res) {
  const cacheKey = 'api:data';
  
  try {
    // Check cache first
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }

    // Fetch fresh data
  const data = await fetchData();
    
    // Cache for 5 minutes
    await redis.setex(cacheKey, 300, JSON.stringify(data));
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

// Edge caching with Vercel
// pages/api/edge-cached.js
export default function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
  res.json({ data: 'Cached at edge' });
}`,
    },
    {
      id: 25,
      title: "Micro-frontend Architecture",
      type: "text-with-list",
      description:
        "Implementing micro-frontend architecture with Next.js allows teams to work independently while maintaining a cohesive user experience.",
      list: [
        "Use Module Federation for sharing components between apps",
        "Implement shared design system and component library",
        "Use consistent routing and state management patterns",
        "Implement proper build and deployment pipelines per micro-frontend",
        "Use shared authentication and user management",
        "Implement proper monitoring and error tracking per app",
        "Use consistent testing strategies across micro-frontends",
        "Plan for gradual migration and rollback strategies",
      ],
    },
    {
      id: 26,
      title: "SEO Optimization Strategies",
      type: "text-with-list",
      description:
        "SEO optimization in large Next.js projects requires comprehensive strategies for metadata, performance, and content optimization.",
      list: [
        "Use Next.js Head component or Metadata API for dynamic meta tags",
        "Implement structured data (JSON-LD) for rich snippets",
        "Optimize Core Web Vitals for better search rankings",
        "Use proper URL structure and canonical tags",
        "Implement sitemap generation and robots.txt",
        "Use server-side rendering for content-heavy pages",
        "Implement proper image optimization and lazy loading",
        "Use analytics to track SEO performance and user behavior",
      ],
    },
    {
      id: 27,
      title: "Deployment Strategies",
      type: "text-with-list",
      description:
        "Deploying Next.js applications to different platforms requires understanding platform-specific optimizations and configurations.",
      list: [
        "Vercel: Zero-config deployment with edge network and analytics",
        "AWS Lambda: Serverless deployment with custom domain and CDN",
        "Cloudflare Workers: Edge deployment with global performance",
        "Docker: Containerized deployment for enterprise environments",
        "Kubernetes: Orchestrated deployment for high availability",
        "Hybrid: Mix of platforms for different regions or use cases",
        "Blue-green deployment for zero-downtime updates",
        "Feature flags for safe deployment and rollbacks",
      ],
    },
    {
      id: 28,
      title: "Security Best Practices",
      type: "text-with-list",
      description:
        "Securing Next.js applications requires implementing proper authentication, authorization, and protection against common attacks.",
      list: [
        "Use HTTP-only cookies for authentication tokens",
        "Implement proper CORS policies for API routes",
        "Use Content Security Policy (CSP) headers",
        "Validate and sanitize all user inputs",
        "Use environment variables for sensitive configuration",
        "Implement rate limiting for API endpoints",
        "Use HTTPS in production with proper certificates",
        "Regular security audits and dependency updates",
      ],
    },
    {
      id: 29,
      title: "CI/CD Pipelines",
      type: "text-with-list",
      description:
        "Setting up CI/CD pipelines for large-scale Next.js projects ensures reliable deployments and code quality.",
      list: [
        "Automated testing (unit, integration, E2E) in pipeline",
        "Code quality checks (ESLint, Prettier, TypeScript)",
        "Security scanning (SAST, dependency vulnerabilities)",
        "Performance testing and Lighthouse CI",
        "Automated deployment to staging and production",
        "Feature branch deployments for testing",
        "Rollback strategies and monitoring",
        "Database migrations and backup strategies",
      ],
    },
    {
      id: 30,
      title: "CTO-Level: Scaling a Next.js Application",
      type: "text-with-list",
      description:
        "At the CTO level, scaling Next.js requires strategic choices in architecture, deployment, and optimization.",
      list: [
        "Use Incremental Static Regeneration for large content sites to avoid full rebuilds",
        "Adopt a CDN (e.g., Vercel Edge Network, Cloudflare) for global edge caching",
        "Leverage Middleware for edge authentication and personalization",
        "Split API services into microservices or serverless functions for scalability",
        "Implement monitoring & observability (e.g., Datadog, New Relic)",
        "Use feature flags and A/B testing for safe deployments",
        "Adopt CI/CD pipelines for automated testing and deployment",
      ],
    },
    {
      id: 31,
      title: "CTO-Level: Next.js Deployment Architectures",
      type: "text-with-list",
      description:
        "Choosing the right deployment architecture is key for reliability, performance, and maintainability.",
      list: [
        "Vercel for fully managed deployments with edge network optimizations",
        "AWS Lambda@Edge for serverless scaling",
        "Docker containers with Kubernetes for enterprise-grade orchestration",
        "Hybrid rendering with selective SSR, SSG, and ISR for optimal performance",
        "Global edge caching strategies to reduce latency",
      ],
    },
  ],
};
