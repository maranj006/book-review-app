const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/books');
const reviewRoutes = require('./routes/reviews');
const authRoutes = require('./auth/auth');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => res.send('Book Review API Running'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));