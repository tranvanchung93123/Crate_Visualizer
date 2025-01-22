const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Validation Function
const validateForm = (data) => {
  const errors = [];
  if (!data.length || data.length <= 0) errors.push("Length is required.");
  if (!data.width || data.width <= 0) errors.push("Width is required.");
  if (!data.height || data.height <= 0) errors.push("Height is required.");
  if (!data.quantity || data.quantity <= 0) errors.push("Quantity is required.");
  if (!data.weight || data.weight <= 0) errors.push("Weight is required.");
  if (!data.businessName) errors.push("Business name is required.");
  if (!data.contactName) errors.push("Contact name is required.");
  if (!data.contactEmail) errors.push("Contact email is required.");
  if (!data.deliveryDate) errors.push("Delivery date is required.");
  return errors;
};

// Endpoint to handle form submission
app.post("/submit", async (req, res) => {
  const {
    length,
    width,
    height,
    quantity,
    weight,
    businessName,
    address,
    contactName,
    contactEmail,
    deliveryDate,
  } = req.body;

  // Validate received data
  const errors = validateForm(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  try {
    // Send email with form details
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // Use TLS (secure: false for port 587)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "amrit.lamichhane587@gmail.com",
      to: "andrew.n@tegral.com.au", // Single recipient
      subject: "New Crate Enquiry",
      html: `
        <h1>New Crate Enquiry</h1>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Contact Email:</strong> ${contactEmail}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
        <p><strong>Crate Details:</strong></p>
        <ul>
          <li><strong>Length:</strong> ${length} mm</li>
          <li><strong>Width:</strong> ${width} mm</li>
          <li><strong>Height:</strong> ${height} mm</li>
          <li><strong>Quantity:</strong> ${quantity}</li>
          <li><strong>Weight:</strong> ${weight} kg</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal Server Error. Could not send email." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
