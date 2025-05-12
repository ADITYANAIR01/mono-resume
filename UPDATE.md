# How to Update an npm Package in the npm Registry

This guide outlines the steps to update an existing npm package in the npm public registry after making changes to your local codebase.

## Prerequisites

- An npm account with a published package in the npm registry.
- **Node.js** and **npm** installed locally.
- Your package's source code in a local repository (optionally with Git).
- Valid npm account credentials.

## Steps to Update Your npm Package

1. **Test Your Changes**\
   Ensure all code changes, bug fixes, or new features are complete and tested. Run your test suite to verify functionality:

   ```bash
   npm test
   ```

2. **Update the Package Version**\
   Increment the `version` field in your `package.json` using *semantic versioning* (`MAJOR.MINOR.PATCH`):

   - For bug fixes (e.g., `1.0.0` to `1.0.1`):

     ```bash
     npm version patch
     ```
   - For new, backward-compatible features (e.g., `1.0.0` to `1.1.0`):

     ```bash
     npm version minor
     ```
   - For breaking changes (e.g., `1.0.0` to `2.0.0`):

     ```bash
     npm version major
     ```

   This updates `package.json`, creates a Git commit, and tags the version (if using Git).

3. **Build Your Package (if applicable)**\
   If your package requires a build step (e.g., compiling TypeScript or bundling), run the build script:

   ```bash
   npm run build
   ```

   Check the output (e.g., `dist/` folder) to ensure it contains the updated files.

4. **Log in to npm**\
   Verify you're logged into your npm account:

   ```bash
   npm login
   ```

   Enter your username, password, and email. Confirm your login with:

   ```bash
   npm whoami
   ```

5. **Publish the Updated Package**\
   Publish the new version to the npm registry:

   ```bash
   npm publish
   ```

   For scoped packages (e.g., `@your-username/package`) that are public, use:

   ```bash
   npm publish --access public
   ```

6. **Verify the Update**\
   Confirm the new version is available in the npm registry:

   ```bash
   npm view your-package-name
   ```
