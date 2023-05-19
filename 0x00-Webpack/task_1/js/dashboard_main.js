import $ from 'jquery';
import _ from 'lodash';

// Create and append the required elements
const elements = [
    $('<p>').text('Holberton Dashboard'),
    $('<p>').text('Dashboard data for the students'),
    $('<button>').text('Click here to get started'),
    $('<p>').attr('id', 'count'),
    $('<p>').text('Copyright - Holberton School'),
];

$('body').append(elements);

// Function to update the counter
let count = 0;

const updateCounter = _.debounce(() => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}, 300);

// Bind debounce function to the button click event
$('button').click(updateCounter);
