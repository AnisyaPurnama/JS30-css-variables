'use strict';

/**
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */

const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
