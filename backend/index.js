const express = require('express'); // Import nodemailer
const cors = require('cors');
const app = express();
const dotenv = require('dotenv'); 
dotenv.config();
const bodyParser=require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5000;
const newsletter_routes=require('../backend/routes/newsletter');

app.use('/api',newsletter_routes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
