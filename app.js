const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set Handlebars as the template engine
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',                                   // Default layout file
    layoutsDir: path.join(__dirname, 'views', 'layouts'),   // Path to layouts directory
    partialsDir: path.join(__dirname, 'views', 'partials')  // Path to partials directory
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // This is correct

// Define routes for different pages
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Medicare Emergency System' }); // Rendering home.hbs
});

app.get('/hospital', (req, res) => {
    res.render('pages/hospital', { title: 'Find Hospitals' });
});

app.get('/pharmacy', (req, res) => {
    res.render('pages/pharmacy', { title: 'Find Pharmacies' });
});

app.get('/emergency', (req, res) => {
    res.render('pages/emergency', { title: 'Emergency Response' });
});

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
