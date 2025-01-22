/**
 * Validate dimensions based on the given rules.
 * @param {Object} inputValues - Current input values (length, width, height).
 * @param {string} name - The field being changed (length, width, height).
 * @param {number} value - The new value for the field.
 * @returns {Object} Updated input values after applying validation rules.
 */
export const validateDimensions = (inputValues, name, value) => {
  const updatedValues = { ...inputValues, [name]: value };

  // Ensure no dimension exceeds the absolute maximum allowed size.
  updatedValues.length = Math.min(updatedValues.length, 2400);
  updatedValues.width = Math.min(updatedValues.width, 2400);
  updatedValues.height = Math.min(updatedValues.height, 2400);

  // Rule 1: If length >= 1200, width < 1200 and height <= 1200.
  if (name === "length" && value >= 1200) {
    updatedValues.width = Math.min(updatedValues.width, 1199);
    updatedValues.height = Math.min(updatedValues.height, 1200);
  }

  // Rule 2: If length <= 1200, width <= 2400.
  if (name === "length" && value < 1200) {
    updatedValues.width = Math.min(updatedValues.width, 2400);
    // Sub-rule: If width <= 1200, height <= 2400.
    if (updatedValues.width <= 1200) {
      updatedValues.height = Math.min(updatedValues.height, 2400);
    }
  }

  // Rule 3: If width >= 1200, length < 1200 and height <= 1200.
  if (name === "width" && value >= 1200) {
    updatedValues.length = Math.min(updatedValues.length, 1199);
    updatedValues.height = Math.min(updatedValues.height, 1200);
  }

  // Rule 4: If width <= 1200, length <= 2400.
  if (name === "width" && value < 1200) {
    updatedValues.length = Math.min(updatedValues.length, 2400);
    // Sub-rule: If length <= 1200, height <= 2400.
    if (updatedValues.length <= 1200) {
      updatedValues.height = Math.min(updatedValues.height, 2400);
    }
  }

  // Rule 5: If length or width >= 1200, height <= 1200.
  if (updatedValues.length >= 1200 || updatedValues.width >= 1200) {
    updatedValues.height = Math.min(updatedValues.height, 1200);
  }

  return updatedValues;
};

/**
 * Validate form fields to ensure required fields are filled.
 * @param {Object} inputValues - The current form input values.
 * @returns {Object} An object containing validation errors.
 */
export const validateForm = (inputValues) => {
  const errors = {};

  if (!inputValues.length || inputValues.length <= 0) {
    errors.length = "Length is required.";
  }
  if (!inputValues.width || inputValues.width <= 0) {
    errors.width = "Width is required.";
  }
  if (!inputValues.height || inputValues.height <= 0) {
    errors.height = "Height is required.";
  }
  if (!inputValues.quantity || inputValues.quantity <= 0) {
    errors.quantity = "Quantity is required.";
  }
  if (!inputValues.deliveryDate) {
    errors.deliveryDate = "Delivery date is required.";
  }

  return errors;
};
