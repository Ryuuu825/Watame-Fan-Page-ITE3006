var is_clicked = false;

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
        audio.volume = 0.1;
        audio.play();
        button.innerText = "Back";
        text.innerText = "悪くないよねぇ わため!";
        image.src = "../source/face2.png";
        is_clicked = true;
    }
    
}