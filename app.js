const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// View engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// Session
const session = require('express-session');
app.use(session({
  secret: 'mathuraSecretKey',
  resave: false,
  saveUninitialized: false
}));
 
const packageRoutes = require('./routes/packages');
const hotelRoutes = require('./routes/hotels');
const placeRoutes = require('./routes/place');
const reachRoutes = require('./routes/reach');
const bestTimeRoutes = require('./routes/besttime');
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');
const guideRoutes = require('./routes/guides');
const reviewRoutes = require('./routes/reviews');
const adminRoutes = require('./routes/admin');
const bookingRoutes = require('./routes/bookings');
const chatbotRoutes = require('./routes/chatbot');
//const authRoutes = require('./routes/auth');
//app.use('/', authRoutes); 


// Route usage
app.use('/chatbot', chatbotRoutes);
app.use('/packages', packageRoutes);
app.use('/hotels', hotelRoutes);
app.use('/places', placeRoutes);
app.use('/reach', reachRoutes);
app.use('/besttime', bestTimeRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/auth', authRoutes);
app.use('/guides', guideRoutes);
app.use('/reviews', reviewRoutes);
app.use('/admin', adminRoutes);
app.use('/bookings', bookingRoutes);

// Contact form
app.post('/contact', (req, res) => {
  console.log("Contact form submitted:", req.body);
  res.send("Thank you for contacting us!");
});

// Default route
app.get('/', (req, res) => {
  res.render('home'); // Make sure views/home.ejs exists
  // Or use: res.redirect('/packages');
});

// Start server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});