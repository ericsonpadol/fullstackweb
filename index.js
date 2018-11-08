function dropdownMenu() {
    var x = document.getElementById("nav-burger");

    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}