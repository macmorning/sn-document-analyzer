# Technology Stack

## Build System

ServiceNow SDK 4.1.0 with Fluent API for declarative application development.

## Core Technologies

- **ServiceNow SDK**: `@servicenow/sdk@4.1.0`
- **Glide API**: `@servicenow/glide@26.0.1` for server-side scripting
- **ESLint**: `eslint@8.50.0` with ServiceNow plugin for code quality
- **TypeScript**: Used for Fluent API definitions (`.now.ts` files)
- **JavaScript**: Used for server-side business logic

## Common Commands

```bash
# Build the application
npm run build

# Deploy to ServiceNow instance
npm run deploy

# Transform Fluent API to ServiceNow records
npm run transform

# Update type definitions
npm run types
```

## Code Organization

- **Fluent API** (`.now.ts`): Declarative definitions for tables, ACLs, UI actions, script includes, etc.
- **Server Scripts** (`.js`): Business logic executed on ServiceNow server
- **Client Scripts** (`.js`, `.html`, `.css`): UI components and client-side logic

## Key Libraries

- `@servicenow/sdk/core`: Core SDK components (Table, ScriptInclude, UiAction, etc.)
- `@servicenow/sdk/global`: Global type definitions
- `@servicenow/glide`: ServiceNow server-side APIs (GlideRecord, GlideDateTime, gs)
