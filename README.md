# Portfolio Monorepo

> **A monorepo built with nx to showcase some of the technologies I've got experience in, test new technologies and experiment. The focus is on ensuring cross-framework compatibility and a unified design language.**

This repository serves as a technical showcase of architectural scalability. It demonstrates how to manage multiple frameworks (React, Solid, etc.) within a single workspace while maintaining strict isolation for framework-specific logic.

## 🏗 Repository Structure

The workspace is organized to allow for shared logic without coupling the execution environments of the individual applications.

* **`apps/[language]/[app-name]`**: Every application is housed by its language/framework (e.g., `apps/react/todo`). Each app runs in **isolation** and contains its own `README.md` documenting the specific stack, context, and run instructions.
* **`shared/`**: 
    * **`ui/`**: Shared cross-framework UI components.
    * **`services/`**: Cross-framework compatible services.
    * **`utils/`**: General utility functions.

## 🛠 Tech Stack & Tooling

* **Package Manager**: [pnpm v10+](https://pnpm.io/installation) (Required).
* **Monorepo Tooling**: [Nx](https://nx.dev)
* **Shared Standards**: We utilize workspace-wide **ESLint** and **Prettier** configurations to ensure a unified code style across all projects.
* **Isolated Tech**: Unlike the linting rules, **TypeScript is specific to each app**. Each project maintains its own TypeScript configuration to prevent framework-specific type conflicts and ensure that each application remains truly isolated.

## 🤖 AI Generated Content & Transparency
This portfolio includes work that is **AI-generated**. I believe in transparency regarding the use of generative tools in a modern development workflow.

* **Identification**: Any section of code or logic that is AI-generated will be clearly declared as such within the documentation.
* **Documentation**: These sections will include a detailed explanation of the code and the underlying logic to ensure the architectural intent is fully understood.

## 🏃 Getting Started

### Prerequisites
* Node.js (LTS)
* **pnpm v10 or higher**: [Installation Instructions](https://pnpm.io/installation)

### Installation
```bash
pnpm install
```
### Running Apps

Each app is designed to run independently. You can navigate to the specific app directory or use Nx to target them from the root:

Running the React Todo app
```bash
npx nx serve react todo
```

Running the Solid Todo app
```base
npx nx serve solid todo
```
