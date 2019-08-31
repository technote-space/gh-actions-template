<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [GitHub Actions Template](#github-actions-template)
  - [Installation](#installation)
  - [Action event details](#action-event-details)
    - [Target event](#target-event)
  - [Author](#author)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# GitHub Actions Template

[![Build Status](https://github.com/technote-space/gh-actions-template/workflows/Build/badge.svg)](https://github.com/technote-space/gh-actions-template/actions)
[![Coverage Status](https://coveralls.io/repos/github/technote-space/gh-actions-template/badge.svg?branch=master)](https://coveralls.io/github/technote-space/gh-actions-template?branch=master)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/gh-actions-template/badge)](https://www.codefactor.io/repository/github/technote-space/gh-actions-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/gh-actions-template/blob/master/LICENSE)

Template for GitHub actions.

## Installation
1. Setup workflow  
   e.g. `.github/workflows/pull_request.yml`
   ```yaml
   on: pull_request
   name: Pull Request
   jobs:
     assignAuthor:
       name: GitHub Actions Template
       runs-on: ubuntu-latest
       steps:
         - name: GitHub Actions Template
           if: github.event.action == 'opened'
           uses: technote-space/gh-actions-template@v1
           with:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```

## Action event details
### Target event
- pull_request: opened

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
