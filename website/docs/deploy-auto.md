---
id: deploy-auto
title: To Deploy Automatically
description: Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.
---

🎯 How to build and deploy the website automatcially?

💥 There is no need to setup a heavy deployment envirment in your computer as normal software engineers, which contain right version of nodejs, npx, and other tools.

💸 To make life easy, the **workflow** should be choosen to make build and deploy automatically.


## `docusaurus.config.js` settings

First, modify your `docusaurus.config.js` and add the following params:

| Name | Description |
| --- | --- |
| `organizationName` | The GitHub user or organization that owns the deployment repository. |
| `projectName` | The name of the deployment repository. |
| `deploymentBranch` | The name of deployment branch. Defaults to `'gh-pages'` for non-organization GitHub Pages repos (`projectName` not ending in `.github.io`). Otherwise, this needs to be explicit as a config field or environment variable. |

These fields also have their environment variable counterparts, which have a higher priority: `ORGANIZATION_NAME`, `PROJECT_NAME`, and `DEPLOYMENT_BRANCH`.

:::caution

GitHub Pages adds a trailing slash to Docusaurus URLs by default. It is recommended to set a `trailingSlash` config (`true` or `false`, not `undefined`).

:::

Example:

```js title="docusaurus.config.js"
const config = {
  title: 'Gitcoins',
  tagline: 'Digital Currencies',
  organizationName: 'TheBestOrNothing',
  projectName: 'thebestornothing.github.io',
  baseUrl,
  baseUrlIssueBanner: true,
  url: 'https://thebestornothing.github.io',
}
```

## Triggering deployment with GitHub Actions {#triggering-deployment-with-github-actions}

[GitHub Actions](https://help.github.com/en/actions) allow you to automate, customize, and execute your software development workflows right in your repository.

The workflow examples below assume your website source resides in the `main` branch of your repository (the _source branch_ is `main`), under a folder called `website/`, and your [publishing source](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) is configured for the `gh-pages` branch (the _deployment branch_ is `gh-pages`).

Our goal is that:

1. When a new pull request is made to `main` and updates `website/`, there's an action that ensures the site builds successfully, without actually deploying. This job will be called `test-deploy`.
2. When a pull request is merged to the `main` branch or someone pushes to the `main` branch directly and `website/` is updated, it will be built and deployed to the `gh-pages` branch. After that, the new build output will be served on the GitHub Pages site. This job will be called `deploy`.

````mdx-code-block

While you can have both jobs defined in the same workflow file, the original `deploy` workflow will always be listed as skipped in the PR check suite status, which is not communicative of the actual status and provides no value to the review process. We therefore propose to manage them as separate workflows instead.

We will use a popular third-party deployment action: [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus).

Add this workflow file in .github/workflows/ derictory:

```yml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
    paths: [website/**]
  pull_request:
    branches: [main]
    paths: [website/**]

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 16
          cache: yarn
      - name: Installation
        run: yarn install
      - name: Build website
        working-directory: website
        run: |
          yarn workspace website build
      # Popular action to deploy to GitHub Pages:
      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # Build output to publish to the `gh-pages` branch:
          publish_dir: ./website/build
          # Assign commit authorship to the official GH-Actions bot for deploys to `gh-pages` branch:
          # https://github.com/actions/checkout/issues/13#issuecomment-724415212
          # The GH actions bot is used by default if you didn't specify the two fields.
          # You can swap them out with your own user credentials.
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

````

## Build and Deploy Automatically
When a pull request is merged to the `main` branch or someone pushes to the `main` branch directly and `website/` is updated, it will be built and deployed to the `gh-pages` branch. After that, the new build output will be served on the GitHub Pages site. This job will be called `build and deploy automatically`.

<center><img src="/img/GettingStartedCongratulations.png" width="150"></img></center>
