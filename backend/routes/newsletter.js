const express=require('express');
const router=express.Router();
const fs = require('fs'); // Import the fs module
const path = require('path');
const Controller = require('../controllers/newsletter');
router.get('/', async(req,res)=>{
console.log("Hi DB");
});
router.post('/subscribe', async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    try {
      const emailExists = await Controller.checkEmailExists(email);
  
      if (emailExists) {
        return res.status(409).json({ error: 'Email already subscribed' });
      }
  
      const templatePath = path.join(__dirname, 'Email.html'); // Adjust the path as needed
      const emailTemplate = fs.readFileSync(templatePath, 'utf8');
  
      await Controller.sendConfirmationEmail(email, emailTemplate);
      await Controller.saveEmailToDatabase(email);
  
      return res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
      console.error('Error subscribing:', error);
      return res.status(500).json({ error: 'Subscription failed' });
    }
  });
  
  module.exports = router;
  