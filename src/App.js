import React, { useState } from "react";
import { Grid, Box, TextField, Button, Typography } from "@mui/material";
import Visualizer from "./components/VisualizerPanel";
import { validateDimensions, validateForm } from "./validators"; // Import validation functions

const App = () => {
  const [inputValues, setInputValues] = useState({
    length: 100,
    width: 100,
    height: 100,
    quantity: 1,
    weight: 0, // Added Weight field
    businessName: "",
    address: "",
    contactName: "",
    contactEmail: "",
    deliveryDate: "",
  });

  const [errors, setErrors] = useState({}); // Track errors for each field

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Use validation module for dimensions
    if (["length", "width", "height"].includes(name)) {
      const numericValue = parseInt(value) || 0;
      const updatedDimensions = validateDimensions(inputValues, name, numericValue);
      setInputValues(updatedDimensions);
    } else {
      setInputValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear the error for the field being updated
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm(inputValues); // Validate the form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show validation errors
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValues),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Tegral Crates Visualizer
      </Typography>

      <Grid container spacing={3}>
        {/* Visualizer Panel */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: 400,
              border: "1px solid #ccc",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Visualizer
              length={inputValues.length}
              width={inputValues.width}
              height={inputValues.height}
              quantity={inputValues.quantity}
            />
          </Box>
        </Grid>

        {/* Input Form */}
        <Grid item xs={12} md={6}>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h5">Crate Specifications</Typography>

            <TextField
              label="Length (mm)"
              type="number"
              name="length"
              value={inputValues.length}
              onChange={handleInputChange}
              error={!!errors.length}
              helperText={errors.length || "Max 2400mm. Width < 1200mm if >= 1200mm."}
              fullWidth
            />
            <TextField
              label="Width (mm)"
              type="number"
              name="width"
              value={inputValues.width}
              onChange={handleInputChange}
              error={!!errors.width}
              helperText={errors.width || "Max 2400mm. Length < 1200mm if >= 1200mm."}
              fullWidth
            />
            <TextField
              label="Height (mm)"
              type="number"
              name="height"
              value={inputValues.height}
              onChange={handleInputChange}
              error={!!errors.height}
              helperText={errors.height || "Max 2400mm. If Length/Width >= 1200mm, Max 1200mm."}
              fullWidth
            />
            <TextField
              label="Quantity"
              type="number"
              name="quantity"
              value={inputValues.quantity}
              onChange={handleInputChange}
              error={!!errors.quantity}
              helperText={errors.quantity || "Number of crates."}
              fullWidth
            />
            <TextField
              label="Weight (kg)"
              type="number"
              name="weight"
              value={inputValues.weight}
              onChange={handleInputChange}
              helperText={errors.weight || "Enter the weight of the crate."}
              fullWidth
            />

            <Typography variant="h5" sx={{ mt: 3 }}>
              Business Details
            </Typography>

            <TextField
              label="Business Name"
              name="businessName"
              value={inputValues.businessName}
              onChange={handleInputChange}
              helperText={errors.businessName}
              fullWidth
            />
            <TextField
              label="Address"
              name="address"
              value={inputValues.address}
              onChange={handleInputChange}
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              label="Contact Name"
              name="contactName"
              value={inputValues.contactName}
              onChange={handleInputChange}
              helperText={errors.contactName}
              fullWidth
            />
            <TextField
              label="Contact Email"
              name="contactEmail"
              value={inputValues.contactEmail}
              onChange={handleInputChange}
              type="email"
              helperText={errors.contactEmail}
              fullWidth
            />

            {/* Date Field */}
            <TextField
              label="Delivery Date"
              type="date"
              name="deliveryDate"
              value={inputValues.deliveryDate}
              onChange={handleInputChange}
              error={!!errors.deliveryDate}
              helperText={errors.deliveryDate}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
