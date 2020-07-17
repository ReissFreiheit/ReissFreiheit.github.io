//79 years overall in United States

function timeLeft (birthday) {
    // get current date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    // get the current age of the user
    var currentAge = today - birthday;

    // display currentAge
    document.getElementById('current-age').innerHTML = currentAge;
}