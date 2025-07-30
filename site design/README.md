# Network Design Engineering Prototype

A React-based prototype application implementing a network design engineering workflow using Microsoft Fluent UI design system.

## Overview

This application simulates the workflow described in the provided PlantUML sequence diagram, focusing on the CNE (Customer Network Engineer) user journey through:

- Project intake management from external systems (ADO/SNOW)
- Network design creation and editing
- Bill of Materials (BOM) generation and management
- Cable map creation and validation
- Design review and submission workflows

## Features

### 🏠 Intake Management
- View and search project intake items
- Import projects from Azure DevOps (ADO) and ServiceNow (SNOW)
- Project metadata management
- Integration simulation with external work item tracking systems

### 🎨 Design Editor
- Multi-format editing: Tabular, JSON, and YAML views
- AI-powered design generation simulation
- Network topology creation with nodes and edges
- Real-time validation with AutoDesign integration
- GraphStore integration for version control

### 📋 Bill of Materials (BOM)
- Automated BOM generation from network designs
- Interactive spreadsheet-like editing
- Cost calculation and vendor management
- Delivery timeline tracking
- Validation against procurement rules

### 🔌 Cable Map Management
- Cable connection mapping
- Physical layer documentation
- Cable type and length management
- Port utilization tracking
- Installation documentation

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: Microsoft Fluent UI React v9
- **Routing**: React Router DOM v6
- **Styling**: CSS-in-JS with Fluent UI's makeStyles

## Deployment

### GitHub Pages
The application is deployed to GitHub Pages at: https://abhiur_microsoft.github.io/prototypes/

```bash
npm run deploy
```

### Azure Static Web Apps
To deploy to Azure Static Web Apps:

1. **Create Azure Static Web App Resource:**
   - Go to Azure Portal
   - Create a new Static Web App
   - Connect to your GitHub repository: `https://github.com/abhiur_microsoft/prototypes`
   - Set build details:
     - App location: `/`
     - Output location: `dist`

2. **Configure GitHub Repository:**
   - The deployment token will be automatically added as `AZURE_STATIC_WEB_APPS_API_TOKEN` secret
   - GitHub Actions workflow is already configured in `.github/workflows/azure-static-web-apps.yml`

3. **Automatic Deployment:**
   - Push to main branch triggers automatic deployment
   - GitHub Actions handles build and deployment to Azure

## Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Build specifically for Azure (with base path /)
npm run build:azure
```
- **Icons**: Fluent UI React Icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd site\ design
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main application layout
│   ├── IntakeView.tsx      # Project intake management
│   ├── DesignEditor.tsx    # Network design editor
│   ├── BOMManager.tsx      # Bill of materials management
│   └── CableMapManager.tsx # Cable mapping interface
├── App.tsx                 # Main app component with routing
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Design System

The application uses Microsoft Fluent UI components following these principles:

- **Consistency**: Uniform design patterns across all components
- **Accessibility**: WCAG 2.1 AA compliance through Fluent UI
- **Responsiveness**: Adaptive layout for different screen sizes
- **Theming**: Built-in light/dark theme support

## Architecture

The application follows a component-based architecture with:

- **React Functional Components** with hooks
- **TypeScript** for type safety
- **React Router** for client-side routing
- **Fluent UI** for styling and components
- **Mock Data** simulating backend integrations

## Integration Points

The prototype simulates integration with these external systems:

- **ADO (Azure DevOps)**: Work item tracking
- **SNOW (ServiceNow)**: Request item management
- **GraphStore**: Design version control
- **AutoDesign**: AI-powered design generation
- **IG (Infrastructure Gateway)**: Observability data
- **NDR (Network Design Review)**: Review workflow

## Contributing

1. Follow the established TypeScript and React patterns
2. Use Fluent UI components consistently
3. Maintain responsive design principles
4. Add proper error handling and validation
5. Update this README for significant changes

## License

This is a prototype application for demonstration purposes.
