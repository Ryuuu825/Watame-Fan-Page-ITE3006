/**
 * Author: Lee Kai Pui, Pan Rubin
 * Group: 01
 * Assignment: EA2
 * Module: ITE3006
 * Course: IT114105
 * 
 * File: watame.js
 * Description: The script file of the watame.html
 * Create Date: 18-FEB-2022
 */

var is_clicked = false; // is the "click me to listen" button clicked?

// play the sound or stop it
function watame_say() {
    var image = document.getElementById("watame_face_photo");
    var text = document.getElementById("watame_sound_text");
    var audio = document.getElementById("watame_sound");
    var button = document.getElementById("btn_change_sound");

    if (is_clicked) {
        text.innerText = "baa?";
        button.innerText = "Click me to listen";
        image.src = "../source/watame.png";
        is_clicked = false;
    } else {
        audio.volume = 0.1; // lower the volume
        audio.play(); // play the sound
        button.innerText = "Back";
        text.innerText = "悪くないよねぇ わため!";
        image.src = "../source/face2.png";
        is_clicked = true;
    }
    
}