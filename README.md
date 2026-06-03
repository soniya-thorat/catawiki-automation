This project contains automated end-to-end tests for the Catawiki website using Playwright and TypeScript.
The objective of the assignment is to automate the following scenario:
1. Open Catawiki homepage.
2. Search for a lot using the keyword “train”.
3. Verify that the search results page is displayed.
4. Open the second lot from the search results.
5. Validate that the lot page loads successfully.
6. Extract and print:
   a. Lot title
   b. Favorites count
   c. Current bid

In addition to automation, exploratory testing was performed and observations were documented separately.
Tech Stack
- Playwright
- TypeScript
- Node.js
- Git & GitHub

Framework Design
The framework follows the Page Object Model (POM) design pattern.
1. HomePage
Contains actions related to:
- Opening the website
- Searching for lots
2. SearchResultsPage
Contains actions related to:
- Verifying search results
- Opening a selected lot
3. LotPage
Contains actions related to:
- Reading lot information
- Extracting lot title
- Extracting favorites count
- Extracting current bid
- 
Installation
Clone the repository
git clone https://github.com/soniya-thorat/catawiki-automation.git

Install dependencies:
npm install
Install Playwright browsers:
npx playwright install

Running Tests
npx playwright test

-----------------------------------------------------
Exploratory Testing
In addition to automation testing, exploratory testing was performed on the Catawiki platform.
Findings have been documented in:
exploratory-findings.md

The findings include:
- Potential defects
- UX improvement opportunities
- Navigation consistency observations
- Filtering behavior observations
- 
Assumptions
Test data is dynamic because auction listings continuously change.
Assertions focus on page behavior and data availability rather than fixed values.
