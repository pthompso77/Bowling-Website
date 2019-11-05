/* 
 * Main JS functions for Term Project v1:
 * Bowling and Bonding
 */


/* 
 * Photo Carousel (shared)
 */
function displayNextImage() {
    x = (x + 1) % 5;
    imgElem = document.getElementById("carousel_img");
    imgElem.src = images[x];
    imgElem.alt = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 10000);
}
function tryit() {
    alert('ok');
}

var x = -1;
var images = [];
images[0] = "../images/carousel/ballOnLaneWithPins_1920x1271.jpg";
images[1] = "../images/carousel/live-concert-455762_1280.jpg";
images[2] = "../images/carousel/band-984164_1280.jpg";
images[3] = "../images/carousel/womanBowling_4288x2848.jpg";
images[4] = "../images/carousel/lead-singer-455750_1280.jpg";


/* 
 * League Tabbed List
 */
function openTeam(evt, teamName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(teamName).style.display = "block";
    evt.currentTarget.className += " active";
}

