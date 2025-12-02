# Technology Stack

## Development Environment

Development is done in an external IDE with code synchronized to ServiceNow via GitHub. Building, transformation, and testing occur on the ServiceNow instance - not locally.

## Build System

ServiceNow SDK 4.1.0 with Fluent API for declarative application development.

## Core Technologies

- **ServiceNow SDK**: `@servicenow/sdk@4.1.0`
- **Glide API**: `@servicenow/glide@26.0.1` for server-side scripting
- **ESLint**: `eslint@8.50.0` with ServiceNow plugin for code quality
- **TypeScript**: Used for Fluent API definitions (`.now.ts` files)
- **JavaScript**: Used for server-side business logic

## Deployment Workflow

Code changes are committed to GitHub and synchronized to the ServiceNow instance where the SDK handles building and transformation. Do not attempt to run build commands locally.

## Code Organization

- **Fluent API** (`.now.ts`): Declarative definitions for tables, ACLs, UI actions, script includes, etc.
- **Server Scripts** (`.js`): Business logic executed on ServiceNow server
- **Client Scripts** (`.js`, `.html`, `.css`): UI components and client-side logic

## Key Libraries

- `@servicenow/sdk/core`: Core SDK components (Table, ScriptInclude, UiAction, etc.)
- `@servicenow/sdk/global`: Global type definitions
- `@servicenow/glide`: ServiceNow server-side APIs (GlideRecord, GlideDateTime, gs)

## Development Principles

- **Use Native ServiceNow Features**: Leverage built-in ServiceNow functionality whenever possible
  - Use Property Categories for system properties instead of custom UI pages
  - Use standard ServiceNow UI components and patterns
  - Prefer out-of-box features over custom implementations
- **Follow ServiceNow Best Practices**: Adhere to platform conventions and recommended patterns
- **Minimize Custom UI**: Only create custom UI when native options are insufficient
