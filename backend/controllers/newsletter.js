const Subscriber = require('../database');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    connectionTimeout: 10000,
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

  exports.sendNewsletter=async (newslettertemplate)=>{
        const subscribers = await Subscriber.find();
        console.log(subscribers);
        if (subscribers.length === 0) {
          console.error('No subscribers found.');
          return {message: "No subscibers found"};
        }
    
        const results = await Promise.all(
          subscribers.map(async(subscriber) => {
          const mailOptions = {
            from: process.env.EMAIL,
            to: subscriber.email,
            subject: 'March Newsletter',
            html: newslettertemplate,
          };
          try {
            await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${subscriber.email}`);
            return { email: subscriber.email, status: 'success' };
          } catch (error) {
            console.error(`Error sending email to ${subscriber.email}:`, error);
            return { email: subscriber.email, status: 'error' };
          }
        })
        );
        console.log(results);
        const successList = results.filter((result) => result && result.status === 'success');
        const errorList = results.filter((result) => result && result.status === 'error');
        if (successList.length === subscribers.length) {
          return true;
      }  
      if(errorList.lenght === subscribers.length){
        return false;
      }
      if (successList.length > 0) {
        console.log(`Newsletter sent successfully to: ${successList.map((result) => result.email).join(', ')}`);
        return true;
      }
      
      if (errorList.length > 0) {
        console.log(`Newsletter sending failed to: ${errorList.map((result) => result.email).join(', ')}`);
        return false;
      }
      };
