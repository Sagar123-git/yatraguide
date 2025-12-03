const mongoose = require('mongoose');
const Guide = require('./models/Guide');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Guide.deleteMany({});
    await Guide.insertMany([
      {
        name: "Ramesh Sharma",
        photo: "/images/guide1.jpg",
        aadhaarVerified: true,
        languages: ["Hindi", "English"],
        experience: "5 years",
        bio: "Expert in Mathura-Vrindavan spiritual tours",
        guideId: "ramesh001"
      },
      {
        name: "Meera Gupta",
        photo: "/images/guide2.jpg",
        aadhaarVerified: true,
        languages: ["Hindi", "Braj", "English"],
        experience: "3 years",
        bio: "Local Barsana guide with deep cultural knowledge",
        guideId: "meera002"
      }
    ]);
    console.log("✅ Guides seeded successfully");
    mongoose.disconnect();
  })
  .catch(err => console.log("❌ Seeding error:", err));