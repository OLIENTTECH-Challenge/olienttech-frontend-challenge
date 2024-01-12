<img src="assets/olientgx-logo.svg" />

# OLIENT GX Recruitment Challenges

## Environment Setup

To begin, set up your development environment using either asdf or volta, ensuring that you use Node.js version `20.9.0` for this project.

Here are the steps for each:

### Using `asdf`

```sh
$ corepack enable
$ asdf reshim nodejs
$ pnpm install
$ pnpm task bootstrap
```

### Using `volta`

```sh
$ volta install corepack
$ corepack enable
$ pnpm install
$ pnpm task bootstrap
```

### Others

```sh
$ node -v
20.9.0
$ corepack enable
$ pnpm install
$ pnpm task bootstrap
```

## Running Development Server

To view and interact with your application during development, you'll need to run the development server.

1. Start the Server: Run `pnpm run dev` from the project root. This will start the development server.
2. Access the Application: Open your browser and navigate to http://localhost:3000 (or the designated port shown in your terminal) to view the application and Running server on http://localhost:8787.

```sh
$ open http://localhost:3000
$ curl http://localhost:8787
```

3. Access Swagger UI: Open your browser and navigate to http://localhost:8787/swagger-ui.

## Formatting and Linting

To ensure code consistency and quality, we use specific tools for formatting and linting. Here's how to run them:

1. Formatting: Run `pnpm run format` to auto-format your code using our predefined style guides.
2. Linting: Execute `pnpm run lint` to identify and fix linting issues in your codebase.

## Running Storybook

Storybook is an essential tool for developing and testing UI components. To run it:

1. Start Storybook: `pnpm run workspace/client storybook`.
2. Access UI: Open http://localhost:6006 in your browser to view and interact with your UI components.

## Running Prisma Studio

Prisma Studio is a database visualization tool. To run it:

1. Start Prisma Studio: `pnpm run workspace/server prisma studio`
2. Access UI: Open http://localhost:5555 in your browser to view.

## Conclusion

By following these instructions, you should have a fully operational development environment for the "OLIENT GX Recruitment Challenges" project. Happy coding!
