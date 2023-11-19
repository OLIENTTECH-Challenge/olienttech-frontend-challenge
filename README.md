<img src="assets/olientgx-logo.svg" />

# OLIENT GX Recruitment Challenges

## Environment Setup

To get started, you need to set up your development environment. You can do this using either asdf or volta. Here are the steps for each:

### Using `asdf`

```sh
$ corepack enable
$ asdf reshim nodejs
$ pnpm install
$ pnpm run dev
```

### Using `volta`

```sh
$ volta install corepack
$ corepack enable
$ pnpm install
$ pnpm run dev
```

## Formatting and Linting

To ensure code consistency and quality, we use specific tools for formatting and linting. Here's how to run them:

1. Formatting: Run `pnpm run format` to auto-format your code using our predefined style guides.
Linting: Execute `pnpm run lint` to identify and fix linting issues in your codebase.

## Running Storybook

Storybook is an essential tool for developing and testing UI components. To run it:

1. Start Storybook: `pnpm run client storybook`.
2. Access UI: Open http://localhost:6006 in your browser to view and interact with your UI components.

## Conclusion

By following these instructions, you should have a fully operational development environment for the "OLIENT GX Recruitment Challenges" project. Happy coding!
