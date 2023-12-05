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

var myMusic = document.getElementById('mySong');
var ambientBirds = document.getElementById('myBirds');
var myTap = document.getElementById('tap');
var myDig = document.getElementById('dig');
var sapGrow = document.getElementById('sapGrow');
var bigGrow = document.getElementById('bigGrow');


//=======================================================
// FUNCTIONS

function getCurrentIndexImage(value) {
    return value;
}

//=======================================================
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
    image.src = '../images/Asn-' + getCurrentIndexImage(currentImageIndex) + '.png';
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
    image.src = '../images/Asn-' + getCurrentIndexImage(currentImageIndex) + '.png';
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
    image.src = '../images/Asn-' + getCurrentIndexImage(currentImageIndex) + '.png';
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

mySeed.on('mouseover', function () {
    const seedBut = document.getElementById('seed');
    seedBut.src = '../images/buttons/seedGreen.png';
    mySeed.css('cursor', 'pointer');

    myTap.volume = 0.1;
    myTap.play();

});

mySeed.on('mouseout', function () {
    const seedBut = document.getElementById('seed');
    seedBut.src = '../images/buttons/seedBlue.png';
});

mySeed.on('click', function () {
    myDig.volume = 0.1;
    myDig.play();
    startAnimate1();
});

//=======================================================

mySap.on('mouseover', function () {
    const sapBut = document.getElementById('sap');
    sapBut.src = '../images/buttons/sapGreen.png';
    mySap.css('cursor', 'pointer');

    myTap.volume = 0.1;
    myTap.play();

});

mySap.on('mouseout', function () {
    const sapBut = document.getElementById('sap');
    sapBut.src = '../images/buttons/sapBlue.png';
});

mySap.on('click', function () {
    sapGrow.volume = 0.1;
    sapGrow.play();
    startAnimate2();
});

//=======================================================

adult.on('mouseover', function () {
    const adultBut = document.getElementById('adult');
    adultBut.src = '../images/buttons/adultGreen.png';
    adult.css('cursor', 'pointer');

    myTap.volume = 0.1;
    myTap.play();

});

adult.on('mouseout', function () {
    const adultBut = document.getElementById('adult');
    adultBut.src = '../images/buttons/adultBlue.png';
});

adult.on('click', function () {

    if (currentImageIndex <= 13) {
        sapGrow.volume = 0.1;
        sapGrow.play();

        setTimeout(() => {
            bigGrow.volume = 0.1;
            bigGrow.play();
        }, 2900);
    }
    else {
        bigGrow.volume = 0.1;
        bigGrow.play();
    }
    startAnimate3();
});
//=======================================================

document.addEventListener('DOMContentLoaded', function () {
    ambientBirds.volume = 0.1;
    ambientBirds.play();
});

document.addEventListener('DOMContentLoaded', function () {
    myMusic.volume = 0.05;
    myMusic.play();
});

//=======================================================
var musicElement = document.getElementById('myMusic');
musicElement.addEventListener('canplaythrough', function() {
    musicElement.play();
});

var birdsElement = document.getElementById('myBirds');
birdsElement.addEventListener('canplaythrough', function() {
    birdsElement.play();
});


