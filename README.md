# Gym and Soccer Website

A multi-page fitness website for athletes who want to get better in the gym and on the soccer field. Built with Node.js, Express, and EJS as my final project for IT 231 (Server-Side Web Development) at DePaul University.

## Features

- **8 pages:** home, basic gym techniques, advanced gym techniques, soccer skills, nutrition, recovery and injury prevention, goal tracking, and contact
- **Shared layout:** every page uses one EJS layout template, so the header, navigation, and footer stay consistent
- **Contact form:** handles POST requests with Express and body-parser
- **Error handling:** a custom 404 page for unknown routes and a 500 handler for server errors
- **Styling:** custom CSS with a dark overlay theme and hover effects on the navigation

## Tech Stack

Node.js · Express · EJS · CSS · Mongoose (schema set up for storing contact submissions)

## Project Structure

```
├── index.js            # Express server and routes
├── models/
│   └── subscriber.js   # Mongoose schema for contact submissions
├── views/              # EJS templates (layout + one file per page)
└── public/
    ├── css/style.css
    └── images/
```

## Run It Locally

You need [Node.js](https://nodejs.org) installed.

```bash
git clone https://github.com/abdullahnaushab/gym-and-soccer-website.git
cd gym-and-soccer-website
npm install
npm start
```

Then open http://localhost:3000 in your browser.

## Next Steps

- Connect the contact form to MongoDB so submissions are saved, using the existing `Subscriber` model
- Make the navigation mobile-friendly

## Photo Credits

All photos are from [Pexels](https://www.pexels.com), by Polina Kovaleva, Willian Justen de Vasconcellos, William Choquette, Tima Miroshnichenko, Pixabay, Mike, Ella Olsson, and Ivan Samkov.
