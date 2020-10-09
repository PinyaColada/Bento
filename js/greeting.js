// Get the hour
var today = new Date();
var Hr = today.getHours();

// Here you can change your name
var name = 'Pinya';

// Here you can change your greetings
var gree1 = 'A lolo ';
var gree2 = 'Bon dia! ';
var gree3 = 'Bon migdia ';
var gree4 = 'Bon horabaixa ';
var gree5 = 'Bona tarda ';
var gree6 = 'Bona nit ';

// Define the hours of the greetings
if (Hr >= 2 && Hr < 6) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (Hr >= 12 && Hr < 15) {
    document.getElementById('greetings').innerText = gree3 + name;
} else if (Hr >= 15 && Hr < 19) {
    document.getElementById('greetings').innerText = gree4 + name;
} else if (Hr >= 19 && Hr < 22) {
    document.getElementById('greetings').innerText = gree5 + name;
} else if (Hr >= 23 && Hr < 2) {
    document.getElementById('greetings').innerText = gree6 + name;
}
