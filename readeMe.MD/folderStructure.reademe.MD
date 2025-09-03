src/
│
├── app/ # Next.js App Router
│ ├── (marketing)/ # Public marketing site
│ │ ├── page.tsx # Homepage
│ │ ├── about/
│ │ │ ├── page.tsx
│ │ │ └── team/page.tsx
│ │ ├── services/
│ │ │ ├── page.tsx # Services overview
│ │ │ ├── web-development/page.tsx
│ │ │ ├── mobile-apps/page.tsx
│ │ │ └── digital-marketing/page.tsx
│ │ ├── work/
│ │ │ ├── page.tsx # Portfolio grid
│ │ │ └── [slug]/
│ │ │ ├── page.tsx # Case study detail
│ │ │ └── loading.tsx
│ │ ├── insights/
│ │ │ ├── page.tsx # Blog listing
│ │ │ ├── [slug]/page.tsx # Blog post
│ │ │ └── category/[slug]/page.tsx # Category pages
│ │ ├── contact/
│ │ │ ├── page.tsx
│ │ │ └── success/page.tsx
│ │ ├── careers/
│ │ │ ├── page.tsx
│ │ │ └── [slug]/page.tsx # Job details
│ │ ├── layout.tsx # Marketing layout
│ │ ├── loading.tsx
│ │ ├── error.tsx
│ │ └── not-found.tsx
│ │
│ ├── (dashboard)/ # Protected admin area
│ │ ├── dashboard/
│ │ │ ├── page.tsx # Analytics overview
│ │ │ ├── projects/
│ │ │ │ ├── page.tsx # Projects list
│ │ │ │ ├── new/page.tsx
│ │ │ │ └── [id]/
│ │ │ │ ├── page.tsx # Project detail
│ │ │ │ └── edit/page.tsx
│ │ │ ├── content/
│ │ │ │ ├── blog/
│ │ │ │ │ ├── page.tsx
│ │ │ │ │ ├── new/page.tsx
│ │ │ │ │ └── [id]/edit/page.tsx
│ │ │ │ ├── case-studies/
│ │ │ │ └── pages/
│ │ │ ├── team/
│ │ │ │ ├── page.tsx
│ │ │ │ ├── new/page.tsx
│ │ │ │ └── [id]/edit/page.tsx
│ │ │ ├── clients/
│ │ │ │ ├── page.tsx
│ │ │ │ └── testimonials/page.tsx
│ │ │ ├── leads/
│ │ │ │ ├── page.tsx # Contact form submissions
│ │ │ │ └── [id]/page.tsx
│ │ │ ├── analytics/
│ │ │ │ └── page.tsx
│ │ │ └── settings/
│ │ │ ├── page.tsx
│ │ │ ├── users/page.tsx
│ │ │ └── integrations/page.tsx
│ │ ├── layout.tsx # Dashboard layout
│ │ └── loading.tsx
│ │
│ ├── api/ # API Routes
│ │ ├── auth/
│ │ │ ├── login/route.ts
│ │ │ ├── logout/route.ts
│ │ │ ├── register/route.ts
│ │ │ └── refresh/route.ts
│ │ ├── projects/
│ │ │ ├── route.ts # GET, POST
│ │ │ ├── [id]/route.ts # GET, PUT, DELETE
│ │ │ └── [id]/images/route.ts
│ │ ├── blog/
│ │ │ ├── route.ts
│ │ │ ├── [slug]/route.ts
│ │ │ └── categories/route.ts
│ │ ├── team/
│ │ │ ├── route.ts
│ │ │ └── [id]/route.ts
│ │ ├── testimonials/
│ │ │ ├── route.ts
│ │ │ └── [id]/route.ts
│ │ ├── contact/
│ │ │ ├── route.ts # Handle form submissions
│ │ │ └── [id]/route.ts
│ │ ├── upload/
│ │ │ └── route.ts # File upload handler
│ │ ├── analytics/
│ │ │ └── route.ts
│ │ └── webhooks/
│ │ ├── stripe/route.ts
│ │ └── mailchimp/route.ts
│ │
│ ├── globals.css
│ ├── layout.tsx # Root layout
│ ├── loading.tsx
│ ├── error.tsx
│ ├── not-found.tsx
│ └── page.tsx # Root redirect
│
├── features/ # Domain-specific business logic
│ ├── auth/
│ │ ├── components/
│ │ │ ├── LoginForm.tsx
│ │ │ ├── RegisterForm.tsx
│ │ │ └── AuthGuard.tsx
│ │ ├── hooks/
│ │ │ ├── useAuth.ts
│ │ │ └── useSession.ts
│ │ ├── server/
│ │ │ ├── actions.ts # Server actions
│ │ │ ├── queries.ts # Data fetching
│ │ │ └── services.ts # Business logic
│ │ ├── client/
│ │ │ ├── AuthProvider.tsx
│ │ │ └── utils.ts
│ │ ├── types.ts
│ │ ├── schemas.ts # Zod validation
│ │ └── constants.ts
│ │
│ ├── projects/
│ │ ├── components/
│ │ │ ├── ProjectCard.tsx
│ │ │ ├── ProjectGrid.tsx
│ │ │ ├── ProjectForm.tsx
│ │ │ ├── ProjectFilters.tsx
│ │ │ └── ProjectGallery.tsx
│ │ ├── hooks/
│ │ │ ├── useProjects.ts
│ │ │ └── useProjectFilters.ts
│ │ ├── server/
│ │ │ ├── actions.ts
│ │ │ ├── queries.ts
│ │ │ └── services.ts
│ │ ├── types.ts
│ │ ├── schemas.ts # Zod validation
│ │ └── constants.ts
│ │ └── constants.ts
│ │
│ ├── blog/
│ │ ├── components/
│ │ │ ├── BlogCard.tsx
│ │ │ ├── BlogGrid.tsx
│ │ │ ├── BlogPost.tsx
│ │ │ ├── BlogForm.tsx
│ │ │ └── BlogSearch.tsx
│ │ ├── hooks/
│ │ │ ├── useBlog.ts
│ │ │ └── useBlogSearch.ts
│ │ ├── server/
│ │ │ ├── actions.ts
│ │ │ ├── queries.ts
│ │ │ └── services.ts
│ │ ├── types.ts
│ │ ├── schemas.ts # Zod validation
│ │ └── constants.ts
│ │
│ ├── team/
│ │ ├── components/
│ │ │ ├── TeamMember.tsx
│ │ │ ├── TeamGrid.tsx
│ │ │ └── TeamForm.tsx
│ │ ├── hooks/
│ │ │ └── useTeam.ts
│ │ ├── server/
│ │ │ ├── actions.ts
│ │ │ ├── queries.ts
│ │ │ └── services.ts
│ │ ├── types.ts
│ │ ├── schemas.ts # Zod validation
│ │ └── constants.ts
│ │
│ ├── testimonials/
│ │ ├── components/
│ │ │ ├── TestimonialCard.tsx
│ │ │ ├── TestimonialSlider.tsx
│ │ │ └── TestimonialForm.tsx
│ │ ├── hooks/
│ │ │ └── useTestimonials.ts
│ │ ├── server/
│ │ │ ├── actions.ts
│ │ │ ├── queries.ts
│ │ │ └── services.ts
│ │ ├── types.ts
│ │ ├── schemas.ts # Zod validation
│ │ └── constants.ts
│ │
│ ├── contact/
│ │ ├── components/
│ │ │ ├── ContactForm.tsx
│ │ │ ├── ContactInfo.tsx
│ │ │ └── LeadsList.tsx
│ │ ├── hooks/
│ │ │ ├── useContactForm.ts
│ │ │ └── useLeads.ts
│ │ ├── server/
│ │ │ ├── actions.ts
│ │ │ ├── queries.ts
│ │ │ └── services.ts
│ │ ├── types.ts
│ │ ├── schemas.ts # Zod validation
│ │ └── constants.ts
│ │
│ ├── analytics/
│ │ ├── components/
│ │ │ ├── AnalyticsDashboard.tsx
│ │ │ ├── MetricsCard.tsx
│ │ │ └── Charts/
│ │ │ ├── LineChart.tsx
│ │ │ ├── BarChart.tsx
│ │ │ └── PieChart.tsx
│ │ ├── hooks/
│ │ │ └── useAnalytics.ts
│ │ ├── server/
│ │ │ ├── actions.ts
│ │ │ ├── queries.ts
│ │ │ └── services.ts
│ │ ├── types.ts
│ │ └── constants.ts
│ │
│ └── marketing/
│ ├── components/
│ │ ├── Hero.tsx
│ │ ├── Features.tsx
│ │ ├── CallToAction.tsx
│ │ ├── Newsletter.tsx
│ │ └── sections/
│ │ ├── AboutSection.tsx
│ │ ├── ServicesSection.tsx
│ │ └── WorkSection.tsx
│ ├── hooks/
│ │ └── useNewsletter.ts
│ ├── server/
│ │ └── actions.ts
│ └── types.ts
│
├── components/ # Shared/reusable components
│ ├── ui/ # Base design system components
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ ├── Select.tsx
│ │ ├── Modal.tsx
│ │ ├── Toast.tsx
│ │ ├── Loading/
│ │ │ ├── Spinner.tsx
│ │ │ ├── Skeleton.tsx
│ │ │ └── PageLoader.tsx
│ │ ├── Form/
│ │ │ ├── FormField.tsx
│ │ │ ├── FormError.tsx
│ │ │ └── FormSuccess.tsx
│ │ └── Navigation/
│ │ ├── Pagination.tsx
│ │ ├── Breadcrumb.tsx
│ │ └── Tabs.tsx
│ │
│ ├── layout/ # Layout components
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── Sidebar.tsx
│ │ ├── Navigation.tsx
│ │ └── Container.tsx
│ │
│ ├── forms/ # Complex form components
│ │ ├── ContactForm.tsx
│ │ ├── NewsletterForm.tsx
│ │ ├── SearchForm.tsx
│ │ └── FileUpload.tsx
│ │
│ └── common/ # Common utility components
│ ├── Image.tsx # Optimized image component
│ ├── Link.tsx # Custom link component
│ ├── Icon.tsx # Icon wrapper
│ ├── SEOHead.tsx
│ └── ErrorBoundary.tsx
│
├── lib/ # Core utilities and configurations
│ ├── auth.ts # Authentication utilities
│ ├── db.ts # Database connection
│ ├── email/
│ │ ├── templates/
│ │ │ ├── welcome.tsx
│ │ │ ├── contact-form.tsx
│ │ │ └── newsletter.tsx
│ │ ├── sendEmail.ts
│ │ └── providers/
│ │ ├── resend.ts
│ │ └── nodemailer.ts
│ ├── upload/
│ │ ├── cloudinary.ts
│ │ ├── uploadcare.ts
│ │ └── s3.ts
│ ├── analytics/
│ │ ├── google.ts
│ │ └── mixpanel.ts
│ ├── seo/
│ │ ├── metadata.ts
│ │ ├── structured-data.ts
│ │ └── sitemap.ts
│ ├── cache/
│ │ ├── redis.ts
│ │ └── memory.ts
│ ├── payments/
│ │ └── stripe.ts
│ ├── validation.ts # Global validation utilities
│ ├── encryption.ts
│ ├── rate-limiting.ts
│ └── logger.ts
│
├── server/ # Server-side only code
│ ├── models/ # Database models
│ │ ├── User.model.ts
│ │ ├── Project.model.ts
│ │ ├── Blog.model.ts
│ │ ├── Team.model.ts
│ │ ├── Testimonial.model.ts
│ │ ├── Contact.model.ts
│ │ ├── Category.model.ts
│ │ └── Analytics.model.ts
│ │
│ ├── services/ # Business logic layer
│ │ ├── auth.service.ts
│ │ ├── email.service.ts
│ │ ├── upload.service.ts
│ │ ├── analytics.service.ts
│ │ ├── seo.service.ts
│ │ └── notification.service.ts
│ │
│ ├── middleware/
│ │ ├── auth.middleware.ts
│ │ ├── validation.middleware.ts
│ │ ├── rateLimit.middleware.ts
│ │ ├── cors.middleware.ts
│ │ ├── errorHandler.middleware.ts
│ │ └── logging.middleware.ts
│ │
│ ├── utils/
│ │ ├── password.ts
│ │ ├── jwt.ts
│ │ ├── slugify.ts
│ │ ├── sanitize.ts
│ │ └── pagination.ts
│ │
│ └── jobs/ # Background jobs
│ ├── emailQueue.ts
│ ├── imageProcessing.ts
│ └── analytics.ts
│
├── hooks/ # Global custom hooks
│ ├── useLocalStorage.ts
│ ├── useDebounce.ts
│ ├── useInfiniteScroll.ts
│ ├── useClickOutside.ts
│ ├── useMediaQuery.ts
│ └── useErrorHandler.ts
│
├── providers/ # React context providers
│ ├── AuthProvider.tsx
│ ├── ThemeProvider.tsx
│ ├── QueryProvider.tsx # React Query
│ ├── ToastProvider.tsx
│ └── AnalyticsProvider.tsx
│
├── store/ # State management
│ ├── slices/ # Zustand stores or Redux slices
│ │ ├── authSlice.ts
│ │ ├── uiSlice.ts
│ │ └── projectsSlice.ts
│ └── index.ts
│
├── styles/ # Styling
│ ├── globals.css
│ ├── components.css # Component-specific styles
│ ├── utilities.css # Utility classes
│ └── themes/
│ ├── light.css
│ └── dark.css
│
├── types/ # Global TypeScript types
│ ├── api.ts # API response types
│ ├── auth.ts # Authentication types
│ ├── database.ts # Database entity types
│ ├── forms.ts # Form types
│ ├── navigation.ts # Navigation types
│ └── global.d.ts # Global type declarations
│
├── config/ # Configuration files
│ ├── env.ts # Environment variables
│ ├── database.ts # Database configuration
│ ├── auth.config.ts # Auth configuration
│ ├── email.config.ts # Email configuration
│ ├── upload.config.ts # File upload configuration
│ ├── analytics.config.ts # Analytics configuration
│ ├── seo.config.ts # SEO configuration
│ └── constants.ts # Global constants
│
├── utils/ # Client-side utilities
│ ├── formatters/
│ │ ├── date.ts
│ │ ├── currency.ts
│ │ ├── number.ts
│ │ └── text.ts
│ ├── validators/
│ │ ├── email.ts
│ │ ├── phone.ts
│ │ └── url.ts
│ ├── helpers/
│ │ ├── array.ts
│ │ ├── object.ts
│ │ ├── string.ts
│ │ └── dom.ts
│ ├── api.ts # API client utilities
│ ├── storage.ts # Local storage utilities
│ └── seo.ts # Client-side SEO utilities
│
├── constants/ # Application constants
│ ├── routes.ts # Route definitions
│ ├── api.ts # API endpoints
│ ├── messages.ts # User messages
│ ├── regex.ts # Regular expressions
│ └── breakpoints.ts # Responsive breakpoints
│
├── data/ # Static data and content
│ ├── navigation.ts # Navigation menus
│ ├── services.ts # Services data
│ ├── testimonials.ts # Static testimonials
│ ├── team.ts # Team member data
│ └── faq.ts # FAQ data
│
├── docs/ # Documentation
│ ├── API.md # API documentation
│ ├── DEPLOYMENT.md # Deployment guide
│ ├── CONTRIBUTING.md # Contribution guidelines
│ └── ARCHITECTURE.md # Architecture overview
│
├── scripts/ # Build and deployment scripts
│ ├── build.js
│ ├── deploy.js
│ ├── seed.js # Database seeding
│ └── migration.js # Database migrations
│
└── tests/ # Test files
├── **mocks**/ # Mock files
├── e2e/ # End-to-end tests
│ ├── auth.spec.ts
│ ├── contact.spec.ts
│ └── dashboard.spec.ts
├── integration/ # Integration tests
│ ├── api/
│ └── components/
├── unit/ # Unit tests
│ ├── components/
│ ├── hooks/
│ ├── utils/
│ └── services/
├── fixtures/ # Test data
├── setup.ts # Test configuration
└── helpers/ # Test utilities

# Key Files at Root Level

├── .env.local # Local environment variables
├── .env.example # Environment variables template
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Dependencies and scripts
├── README.md # Project documentation
├── .gitignore # Git ignore rules
├── .eslintrc.json # ESLint configuration
├── .prettierrc # Prettier configuration
├── jest.config.js # Jest configuration
├── playwright.config.ts # Playwright E2E configuration
└── docker-compose.yml # Docker configuration

`Suggestion For Upgrade`
✅ Strengths in Your Structure

```Clear Separation of Concerns

app/ for routes (UI + server components).

features/ for domain logic (auth, projects, blog, etc.).

components/ for reusable UI system.

lib/ vs server/ split for client/server boundaries is very clean.

##Feature-First Organization##

Each domain (auth, projects, blog, etc.) has components/, hooks/, schemas/, server/, types.ts, etc.

This ensures features are self-contained and portable.

``#Proper Infrastructure Layering#``

server/models/, server/services/, server/middleware/, server/jobs/ = very good layering for backend.

lib/ = cross-cutting utilities (auth, db, email, upload, analytics, seo, etc.).

Scalable Client-Side Code

Global store/ (Zustand/Redux).

Global providers/ (React contexts).

Global hooks/ (commonly reused hooks).

Well-structured utils/ with formatters/validators/helpers.

Config & Constants Isolation

config/ for environment configs, constants/ for app-wide constants, data/ for static content.

This avoids scattering magic strings everywhere.

Testing & Docs

Separate tests/ with e2e, integration, unit, fixtures, helpers.

docs/ for project documentation.

DevOps Ready

scripts/ for migrations/seeding.

docker-compose.yml for containerized environment.

ESLint, Prettier, Jest, Playwright all configured.

⚡ Suggested Improvements

These are not must-dos, but they can help polish it further:

1. Consolidate Server vs Features Logic

Right now, there’s both:

server/ (global backend logic, models, jobs, middleware).

features/*/server/ (per-feature actions/queries/services).

👉 Consider making server/ only infrastructure-level code (models, middleware, jobs), and keep business logic strictly inside features/*/server.
That way, you don’t risk duplication.

2. API Layer Alignment

You have both:

app/api/… (Next.js API routes).

features/*/server/ and server/services/.

👉 Make sure API routes are thin controllers that delegate directly to features/*/server/services.ts.
This avoids spreading business logic between API handlers and services.

3. Database Schema Consistency

You’re using server/models/*.model.ts with Mongoose.

You’re also using features/*/schemas.ts with Zod.

👉 Great for runtime validation + DB models.
But you might want a types/database.ts (already present) that maps Zod ↔ Mongoose types to avoid drift.

4. Naming / Redundancy Cleanup

Some overlaps:

components/forms/ContactForm.tsx vs features/contact/components/ContactForm.tsx.

features/auth/client/AuthProvider.tsx vs providers/AuthProvider.tsx.

👉 Maybe keep domain-specific forms/providers inside features/, and truly global ones inside components/ / providers/.

5. Code-Splitting / Lazy Loading

Since this is enterprise-level, consider:

A lazy/ or dynamic/ folder for components loaded with next/dynamic.

Example: dashboard charts, analytics, or editor components.

6. Env & Config Management

You already have config/env.ts.
👉 Add a Zod-based validation for environment variables (e.g., envSchema) to avoid runtime errors.

7. DX Improvement

Add plopfile.js or a code generator for scaffolding new features/* with boilerplate (components/hooks/server/types).

This helps when scaling teams.

✅ Verdict:
This is very well organized and production-grade. The only refinements I’d suggest are about avoiding duplication between server/ and features/*/server/, cleaning up overlapping components, and possibly adding codegen + env validation for developer experience.
```
