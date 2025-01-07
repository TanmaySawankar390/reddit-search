const axios = require('axios');
require('dotenv').config();

const BASE_URL = 'https://www.reddit.com';

async function getPosts(subreddit, keyword) {
    const url = `${BASE_URL}/r/${subreddit}/search.json?q=${keyword}&restrict_sr=1`;
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': process.env.USER_AGENT
            },
            auth: {
                username: process.env.CLIENT_ID,
                password: process.env.CLIENT_SECRET
            }
        });
        return response.data.data.children.map(post => ({
            title: post.data.title,
            link: `https://reddit.com${post.data.permalink}`,
            author: post.data.author
        }));
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        throw new Error('Failed to fetch posts');
    }
}

module.exports = { getPosts };
