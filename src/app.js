const express = require('express');
const { getPosts } = require('./redditService');
const { saveToFile, loadFromFile } = require('./utils');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.set('view engine', 'ejs');
app.use(express.static('src/views'));
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Search Route
app.post('/search', async (req, res) => {
    const { subreddit, keyword } = req.body;

    try {
        const posts = await getPosts(subreddit, keyword);
        saveToFile('results.json', posts); // Save results locally
        res.render('results', { posts, subreddit, keyword });
    } catch (error) {
        res.status(500).send('Error fetching posts.');
    }
});

// Results Route
app.get('/results', (req, res) => {
    const posts = loadFromFile('results.json');
    res.render('results', { posts: posts || [] });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
