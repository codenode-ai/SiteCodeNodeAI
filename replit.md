# Overview

CodeNode.AI is a modern full-stack web application that serves as a marketing website for a technology consulting company specializing in automation systems and AI solutions for small and medium enterprises (PMEs). The application features a single-page design with multiple sections including hero, about, methodology, why choose, FAQ, CTA, and contact sections. The website includes a contact form that allows potential clients to submit inquiries, which are stored in a database for follow-up.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript, utilizing Vite as the build tool and development server. The application follows a component-based architecture with a clear separation of concerns:

- **UI Framework**: React with TypeScript for type safety
- **Styling**: Tailwind CSS with custom CSS variables for theming, implementing a dark theme design
- **Component Library**: Radix UI primitives wrapped in custom components (shadcn/ui pattern)
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth transitions and animations
- **Form Handling**: React Hook Form with Zod for validation

## Backend Architecture  
The backend follows a RESTful API pattern built with Express.js:

- **Server Framework**: Express.js with TypeScript
- **API Routes**: Organized in a separate routes module with proper error handling
- **Data Access Layer**: Storage abstraction with in-memory implementation (designed for future database integration)
- **Request Logging**: Custom middleware for API request logging and monitoring
- **Development Setup**: Vite integration for hot module replacement in development

## Data Storage
The application uses a hybrid approach for data persistence:

- **Database ORM**: Drizzle ORM configured for PostgreSQL with proper schema definitions
- **Schema Management**: Shared schema definitions using Drizzle with Zod validation
- **Current Implementation**: In-memory storage for development/testing
- **Production Ready**: Database configuration prepared for PostgreSQL deployment

## Authentication and Authorization
Currently implements a basic structure for user management:

- **User Schema**: Defined with username/password fields
- **Session Management**: Prepared infrastructure (connect-pg-simple for sessions)
- **Authorization**: Framework in place but not actively enforced

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database service (@neondatabase/serverless)
- **PostgreSQL**: Production database with Drizzle ORM for migrations and queries

## Frontend Libraries  
- **UI Components**: Extensive Radix UI component library for accessible, unstyled primitives
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Animation**: Framer Motion for advanced animations and transitions
- **Forms**: React Hook Form with Hookform Resolvers for validation integration
- **Data Fetching**: TanStack React Query for server state management and caching

## Development Tools
- **Build Tool**: Vite with React plugin for fast development and optimized builds
- **Replit Integration**: Vite plugin for runtime error overlay and cartographer support
- **TypeScript**: Full TypeScript configuration across frontend, backend, and shared modules
- **Code Quality**: ESBuild for production bundling with proper module resolution

## Third-Party Services
- **Google Fonts**: Inter font family loaded via CDN for consistent typography
- **Development Banner**: Replit development banner for non-production environments