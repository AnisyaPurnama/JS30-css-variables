'use strict';
/**
 * @name user input
 * calls the reverseHandler when a user types in the input field
 */
const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));