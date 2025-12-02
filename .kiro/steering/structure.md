# Project Structure

## Directory Layout

```
src/
├── fluent/              # Fluent API definitions (.now.ts files)
│   ├── acls/           # Access Control Lists
│   ├── application-menus/  # Application menu definitions
│   ├── generated/      # Auto-generated keys and policies
│   ├── properties/     # System properties
│   ├── roles/          # Role definitions
│   ├── script-includes/  # Script Include wrappers
│   ├── tables/         # Table schema definitions
│   ├── ui-actions/     # UI Action definitions
│   ├── ui-pages/       # UI Page definitions
│   └── index.now.ts    # Main Fluent API entry point
├── server/             # Server-side JavaScript business logic
│   ├── acl-scripts/    # ACL evaluation scripts
│   ├── photo-analyzer.js  # Main analysis engine
│   └── tsconfig.json   # TypeScript configuration
└── client/             # Client-side UI components
    ├── properties.html
    ├── properties.css
    └── properties.js

dist/                   # Build output (generated)
target/                 # Deployment artifacts (generated)
.now/                   # Build metadata (generated)
```

## Naming Conventions

### Files
- Fluent API files: `kebab-case.now.ts` (e.g., `photo-analysis-engine.now.ts`)
- Server scripts: `kebab-case.js` (e.g., `photo-analyzer.js`)
- Client files: `kebab-case.{js,html,css}`

### ServiceNow Objects
- Tables: `x_12167_analyzer_<table_name>` (e.g., `x_12167_analyzer_photo_analysis_results`)
- Script Includes: `PascalCase` (e.g., `PhotoAnalysisEngine`)
- Roles: `x_12167_analyzer.<role_name>` (e.g., `x_12167_analyzer.photo_investigator`)
- Properties: `x_12167_analyzer.<category>.<property>` (e.g., `x_12167_analyzer.photo_analysis.log_level`)

## Key Patterns

### Fluent API Pattern
Fluent API files define ServiceNow objects declaratively:
- Import SDK types from `@servicenow/sdk/core`
- Export const with appropriate SDK function (Table, ScriptInclude, UiAction, etc.)
- Use `Now.ID` for unique identifiers
- Reference server scripts with `Now.include('../../server/script-name.js')`

### Server Script Pattern
Server scripts contain business logic:
- Use Class.create() pattern for Script Includes
- Import Glide APIs: `import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'`
- Implement prototype methods for functionality
- Include `type` property at end of prototype

### Logging Pattern
Use structured logging with configurable log levels:
- Log levels: debug, info, warn, error
- Controlled by system property: `x_12167_analyzer.photo_analysis.log_level`
- Include context data in log messages

## Configuration Files

- `now.config.json`: Application scope and configuration
- `package.json`: Dependencies and build scripts
- `src/server/tsconfig.json`: TypeScript compiler options for server code
- `eslintrc.txt`: ESLint configuration (rename to `.eslintrc` if needed)
- `gitignore.txt`: Git ignore patterns (rename to `.gitignore` if needed)
