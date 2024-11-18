# Contributing

This project uses [Devbox](https://www.jetify.com/devbox/) to set up and standardize development environments.

## Prerequisites

Install Devbox

```bash
curl -fsSL https://get.jetify.com/devbox | bash
```

If you run into any issues, please refer to the [official installation guide](https://www.jetpack.io/devbox/docs/installing_devbox/) or open an issue in our repository and we will help you out.

## Development Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:LoopbackApp/widgets.git
   cd widgets
   ```
1. Initialize the development environment:
   ```bash
   devbox services up
   ```
1. Start working on the project. The development environment will have all necessary dependencies installed.

## Making Changes

1. Open an issue on GitHub to discuss your changes
1. Create a new branch:
   ```bash
   git switch -c feature/your-feature-name
   ```
1. Make your changes
1. Run tests to ensure everything works
1. Add a changelog
   ```bash
   devbox run pnpm changeset
   ```
1. Push your branch and create a pull request

## Getting Help

If you have questions or need help, please:

1. Check existing issues
2. Create a new issue if needed
3. [Join our Discord community](https://discord.gg/HDWMexr45t)
