```markdown
# Mastering Git CLI: A Comprehensive Guide to Version Control

## Introduction
Git is a version control system that allows you to track changes in your projects, collaborate with teammates, and maintain a structured workflow. Git can be used locally and connected to GitHub using GitHub CLI, which enables seamless collaboration on projects.

This guide walks you through the steps to master Git and GitHub, with a focus on initializing a project, making commits, handling merge conflicts, working with branches, and more. The repository used in this tutorial is called `myapp`, which you can fork or follow the steps below to set up your own project.

## Table of Contents
1. [Creating a New Directory and React App](#step-1-creating-a-new-directory-and-react-app)
2. [Initializing Git](#step-2-initializing-git)
3. [Connecting to GitHub](#step-3-connecting-to-github)
4. [Making Changes and Versioning](#step-4-making-changes-and-versioning)
5. [Handling Merge Conflicts](#step-5-handling-merge-conflicts)
6. [Git Checkout](#step-6-git-checkout)
7. [Working with Branches](#step-7-working-with-branches)

## Step 1: Creating a New Directory and React App
To get started, create a new directory and set up a React project:

```bash
mkdir new_directory
cd new_directory
npx create-react-app myapp
cd myapp
```

Install React Router for navigation within the app:

```bash
npm install react-router-dom
```

### App Structure:
1. `App.js`
2. `Xx.js` (Component)
3. `Yy.js` (Component)

### App.js:
```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import X from './Components/Xx';
import Y from './Components/Yy';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Master Git!!</p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="horizontal-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/x">X</Link></li>
            <li><Link to="/y">Y</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/x" element={<X />} />
          <Route path="/y" element={<Y />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

### Xx.js (Components folder):
```javascript
import React from 'react';

function Xx() {
  return (
    <div>
      <h1>X Page</h1>
      <p>Content for the X page.</p>
    </div>
  );
}

export default Xx;
```

### Yy.js (Components folder):
```javascript
import React from 'react';

function Yy() {
  return (
    <div>
      <h1>Y Page</h1>
      <p>Content for the Y page.</p>
    </div>
  );
}

export default Yy;
```

## Step 2: Initializing Git
Initialize Git in your project directory:

```bash
git init
```

This command creates a `.git` directory to track changes.

### View ignored dependencies:
```bash
cat .gitignore
```

### Stage all files:
```bash
git add .
```

### Unstage files if needed:
```bash
git restore --staged <filename>
```

### View commit history:
```bash
git reflog
```

### Create the first commit:
```bash
git commit -m "Initial commit"
```

## Step 3: Connecting to GitHub
Login to GitHub CLI:

```bash
gh auth login
```

Follow the authentication steps.

### Create a GitHub repository:
```bash
gh repo create myapp --public
```

### Add the remote repository:
```bash
git remote add origin https://github.com/{your_username}/myapp.git
```

### View the remote repository:
```bash
git remote -v
```

### Push code to GitHub:
```bash
git push -u origin master
```

## Step 4: Making Changes and Versioning
Modify `Xx.js` (for example) to make a change like adding `After Change!`:

```javascript
<p>Content for the X page. After change!</p>
```

### Stage and commit changes:
```bash
git add .
git commit -m "After change!"
git push origin master
```

To revert to a previous commit, use the commit ID:

```bash
git reset --hard HEAD~1
```

This will reset the project to the commit before the changes. To pull the latest changes before pushing, use:

```bash
git pull origin master
```

## Step 5: Handling Merge Conflicts
### Scenario:
Make changes in `Xx.js` both locally and in GitHub. When pulling changes from the origin, merge conflicts will occur because both versions conflict.

To resolve:

```bash
git pull origin master
```

After resolving the conflicts manually, stage and commit the changes:

```bash
git add .
git commit -m "Merged changes"
git push origin master
```

## Step 6: Git Checkout
### Checking a Previous Commit:
To view or revert to a previous commit, use the `git reflog` to find the commit ID. Once found, use:

```bash
git checkout <commit_id>
```

This places you in a detached HEAD state, meaning you are no longer working on a branch. To return to the latest commit and resume work, checkout the branch you were working on:

```bash
git checkout <branch_name>
```

If you had any changes that were not committed before checking out, use:

```bash
git stash pop
```

## Step 7: Working with Branches
Git allows you to create branches to work on different parts of a project or features independently.

### View all available branches:
```bash
git branch
```

### Create a new branch:
```bash
git branch example
```

### Switch to a new branch:
```bash
git checkout example
```

### Create and switch in one step:
```bash
git checkout -b feature-branch
```

### Add a new file, commit, and push changes to the remote repository:

```bash
git add .
git commit -m "Add newfile.js"
git push origin example
```

### Merge changes to the master branch:
```bash
git checkout master
git merge example
```

### Delete a branch:
First, switch to a different branch before deleting the one you’re currently on:

```bash
git branch -d example
```

## Conclusion
This guide covers the fundamentals of Git and GitHub, including setting up a repository, versioning, handling conflicts, and working with branches. Now you can confidently use Git for version control in your projects!

---

Enjoy mastering Git and version control in your development journey!
```
