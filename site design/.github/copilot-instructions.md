<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Network Design Engineering Prototype

This is a React TypeScript application built with Vite and Microsoft Fluent UI that simulates a network design engineering workflow.

## Architecture

The application follows the sequence diagram provided by the user, implementing these main components:

- **IntakeView**: Manages project intake from ADO (Azure DevOps) and SNOW (ServiceNow)
- **DesignEditor**: Provides design creation with tabular, JSON, and YAML editors
- **BOMManager**: Handles Bill of Materials generation and validation
- **CableMapManager**: Manages cable mapping and validation

## Key Features

- CNE (Customer Network Engineer) workflow simulation
- Integration points for external systems (ADO, SNOW, GraphStore, AutoDesign, IG)
- Fluent UI design system for consistent Microsoft-style interface
- Responsive design with proper navigation
- Validation workflows for designs, BOMs, and cable maps

## Technologies

- React 18 with TypeScript
- Vite for build tooling
- Microsoft Fluent UI React v9
- React Router for navigation
- Modern CSS with CSS-in-JS styling

## Development Guidelines

- Use TypeScript interfaces for all data structures
- Follow Fluent UI design patterns and components
- Implement proper error handling and validation
- Use semantic HTML and accessibility best practices
- Follow the established component structure and styling patterns
