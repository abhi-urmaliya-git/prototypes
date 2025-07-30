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
