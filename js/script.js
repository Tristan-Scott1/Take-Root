//=======================================================

//  Author: Tristan Scott
//  Date: 2023/12/04

//=======================================================

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// VARIABLES

//=======================================================
// BUTTON VARIABLES

var mySeed = $('#seed');

var mySap = $('#sap');

var adult = $('#adult');

//=======================================================
// ANIMATION FRAME VARIABLES

var currentImageIndex = 1;

var stop1 = false;

var stop2 = false;

var stop3 = false;

//=======================================================
// AUDIO VARIABLES

var musicText = $('#Music');

var ambientText = $('#onlyBirds');

var myMusic = document.getElementById('mySong');

var ambientBirds = document.getElementById('myBirds');

var myTap = document.getElementById('tap');

var myDig = document.getElementById('dig');

var sapGrow = document.getElementById('sapGrow');

var bigGrow = document.getElementById('bigGrow');


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTIONS

function getCurrentIndexImage(value) {
    return value;
}

//=======================================================
// PLANT SEED ANIMATION

function animate1() {
    if (stop1) {
        return;
    }
    requestAnimationFrame(() => {
        setTimeout(() => {
            animate1();
        }, 1000 / 10);
    });

    const image = document.getElementById('imageRender');
    image.src = 'images/Asn-' + getCurrentIndexImage(currentImageIndex) + '.png';
    if (currentImageIndex < 13) {
        currentImageIndex++;
    } else {
        currentImageIndex = 13;
    }
}

function startAnimate1() {
    currentImageIndex = 1;
    stop1 = false;
    stopAnimate2();
    stopAnimate3();
    animate1();
}

function stopAnimate1() {
    stop1 = true;
}
//=======================================================
// GROW SAPLING ANIMATION

function animate2() {
    if (stop2) {
        return;
    }
    requestAnimationFrame(() => {
        setTimeout(() => {
            animate2();
        }, 1000 / 10);
    });

    const image = document.getElementById('imageRender');
    image.src = 'images/Asn-' + getCurrentIndexImage(currentImageIndex) + '.png';
    if (currentImageIndex < 35) {
        currentImageIndex++;
    } else {
        currentImageIndex = 35;
    }
}

function startAnimate2() {
    currentImageIndex = 13;
    stopAnimate1();
    stopAnimate3();
    stop2 = false;
    animate2();
}
function stopAnimate2() {
    stop2 = true;
}
//=======================================================
// GROW ADULT ANIMATION

function animate3() {
    if (stop3) {
        return;
    }
    requestAnimationFrame(() => {
        setTimeout(() => {
            animate3();
        }, 1000 / 10);
    });

    const image = document.getElementById('imageRender');
    image.src = 'images/Asn-' + getCurrentIndexImage(currentImageIndex) + '.png';
    if (currentImageIndex < 53) {
        currentImageIndex++;
    } else {
        currentImageIndex = 53;
    }
}

function startAnimate3() {
    if (currentImageIndex <= 13) {
        currentImageIndex = 13;
    }
    else {
        currentImageIndex = 35;
    }
    stopAnimate1();
    stopAnimate2();
    stop3 = false;
    animate3();
}

function stopAnimate3() {
    stop3 = true;
}
//=======================================================
// SEED BUTTON

mySeed.on('mouseover', function () {
    const seedBut = document.getElementById('seed');
    seedBut.src = 'images/buttons/seedGreen.png';
    mySeed.css('cursor', 'pointer');

    // myTap.volume = 0.2;
    myTap.play();

});

mySeed.on('mouseout', function () {
    const seedBut = document.getElementById('seed');
    seedBut.src = 'images/buttons/seedBlue.png';
});

mySeed.on('click', function () {
    // myDig.volume = 0.2;
    myDig.play();
    startAnimate1();
});

//=======================================================
// SAPLING BUTTON

mySap.on('mouseover', function () {
    const sapBut = document.getElementById('sap');
    sapBut.src = 'images/buttons/sapGreen.png';
    mySap.css('cursor', 'pointer');

    // myTap.volume = 0.2;
    myTap.play();

});

mySap.on('mouseout', function () {
    const sapBut = document.getElementById('sap');
    sapBut.src = 'images/buttons/sapBlue.png';
});

mySap.on('click', function () {
    // sapGrow.volume = 0.2;
    sapGrow.play();
    startAnimate2();
});

//=======================================================
// ADULT BUTTON

adult.on('mouseover', function () {
    const adultBut = document.getElementById('adult');
    adultBut.src = 'images/buttons/adultGreen.png';
    adult.css('cursor', 'pointer');

    // myTap.volume = 0.2;
    myTap.play();

});

adult.on('mouseout', function () {
    const adultBut = document.getElementById('adult');
    adultBut.src = 'images/buttons/adultBlue.png';
});

adult.on('click', function () {

    if (currentImageIndex <= 13) {
        // sapGrow.volume = 0.4;
        sapGrow.play();

        setTimeout(() => {
            // bigGrow.volume = 0.4;
            bigGrow.play();
        }, 2900);
    }
    else {
        // bigGrow.volume = 0.4;
        bigGrow.play();
    }
    startAnimate3();
});
//=======================================================

// document.addEventListener('DOMContentLoaded', function () {
//     ambientBirds.volume = 0.1;
//     ambientBirds.play();
// });

// document.addEventListener('DOMContentLoaded', function () {
//     myMusic.volume = 0.05;
//     myMusic.play();
// });

//=======================================================
// AUDIO SCRIPT

// var playButton = document.getElementById('playAudio');

// playButton.addEventListener('click', function () {
//     var ambientBirds = document.getElementById('myBirds');
    
//     if (ambientBirds.paused) {
//         ambientBirds.volume = 0.3;
//         ambientBirds.play();
//     } else {
//         ambientBirds.pause();
//     }

//     var myMusic = document.getElementById('mySong');
//     if (myMusic.paused) {
//         myMusic.volume = 0.1;
//         myMusic.play();
//     } else {
//         myMusic.pause();
//     }
// });

var birdsButton = document.getElementById('onlyBirds');

birdsButton.addEventListener('click', function () {
    if (ambientBirds.paused) {
        ambientText.empty();
        ambientBirds.volume = 0.5;
        ambientBirds.play();
        ambientText.append('Ambience (on)');
    } else {
        ambientText.empty();
        ambientBirds.pause();
        ambientText.append('Ambience (off)');
    }
});

var musicButton = document.getElementById('Music');

musicButton.addEventListener('click', function () {
    if (myMusic.paused) { 
        myMusic.volume = 0.3;
        myMusic.play();
        musicText.empty();
        musicText.append('Music (on)');
    } else {
        myMusic.pause();
        musicText.empty();
        musicText.append('Music (off)');
    }
});
