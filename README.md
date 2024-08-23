# Explore Nations
## Overview
This is an Angular project that allows users to explore information about various countries. The project displays countries in the form of cards on the main page and provides detailed information about a selected country when a card is clicked. Additionally, the project includes a filtering feature that allows users to search for countries by name or filter by region.

## Features
- **Country Cards:** Displays countries as cards with their flag, name, population, region, and capital.
- **Detailed Information:** Clicking on a country card navigates to a page displaying detailed information about the selected country, including its native name, population, region, subregion, capital, top-level domain, currencies, languages, and border countries.
- **Search Filter:** Users can search for countries by name using the search input field.
- **Region Filter:** Users can filter countries by region using a dropdown menu.

## Technologies Used
- **Node.js v20.14.0:** As a server to run the application.
- **Angular CLI v18.2.1:** The project is built using Angular.
- **Bootstrap:** For responsive design and styling.
- **Angular Material:** For additional UI components and styling.
- **CSS:** Custom styles.

## Getting Started
### Installation
To run this project locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/explore-nations.git
```
2. Navigate to the project directory
```
cd explore-nations
 ```
3. Install dependencies
```
npm install
```
4. Run the application:
```
ng serve
```
5. Open your browser and navigate to:
```
http://localhost:4200
```
### Usage
- **Home Page:** The home page displays all countries as cards. You can search for a specific country by typing its name in the search bar or filter by region using the dropdown menu on the right.
- **Country Details:** Click on a country card to navigate to a page with detailed information about that country.

### Project Structure
- **src/app/components/country-list/:** Contains the component for displaying the list of countries.
- **src/app/components/country-detail/:** Contains the component for displaying the details of a selected country.
- **src/app/services/:** Contains the service for fetching country data from the JSON file.
- **src/assets/data/:** May contain a data.json file with country information.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
