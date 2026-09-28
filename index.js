const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public folder (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes for existing pages
app.get("/", (req, res) => {
    res.render("index", { title: "Gym and Soccer Home" });
});

app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Us" });
});

app.get("/gym-techniques", (req, res) => {
    res.render("gym-techniques", { title: "Advanced Gym Techniques" });
});

app.get("/basics", (req, res) => {
    res.render("basics", { title: "Basics Gym Techniques" });
});

app.get("/soccer-skills", (req, res) => {
    res.render("soccer-skills", { title: "Soccer Skills Development" });
});

app.get("/nutrition", (req, res) => {
    res.render("nutrition", { title: "Nutrition for Athletes" });
});

app.get("/recovery", (req, res) => {
    res.render("recovery", { title: "Recovery and Injury Prevention" });
});

app.get("/progress", (req, res) => {
    res.render("progress", { title: "Personal Progress and Goal Tracking" });
});

// Route to handle form submission from Contact Us page
app.post("/submit-contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact Form Data:", { name, email, message });

    // Here you can process the form data: save it to a database or send an email

    // Respond with a success message
    res.send("Thank you for your message, we will get back to you soon!");
});

// Catch-all error handler for undefined routes (404 errors)
app.use((req, res) => {
    res.status(404).render('error', { title: 'Page Not Found' });
});

// Catch-all error handler for server errors (500 errors)
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error for debugging
    res.status(500).render('error', { title: 'Server Error' });
});

// Start the server on the defined port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
