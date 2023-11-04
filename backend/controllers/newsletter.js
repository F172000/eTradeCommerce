const Subscriber = require('../database');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
//   const templatePath = path.join(__dirname, 'Email.html'); // Adjust the path as needed
// const emailTemplate = fs.readFileSync(templatePath, 'utf8');
exports.checkEmailExists = async (email) => {
  try {
    const existingSubscriber = await Subscriber.findOne({ email });
    return !!existingSubscriber;
  } catch (error) {
    throw error;
  }
};

exports.saveEmailToDatabase = async (email) => {
    try {
      const subscriber = new Subscriber({ email });
      await subscriber.save();
    } catch (error) {
      throw error;
    }
  };
exports.sendConfirmationEmail = async (email, emailTemplate) => {
    try {
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Welcome to eTradeCommerce',
        html: emailTemplate,
      };
  
      await transporter.sendMail(mailOptions);
    } catch (error) {
      throw error;
    }
  };
