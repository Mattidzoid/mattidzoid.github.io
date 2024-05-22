var modelPrices = [32000, 50000, 96000];
var enginePrices = [0, 2000, 10000];
var fuelPrices = [0, -3000, 200, 200000];

var modelSpeed = [140, 150, 230];
var engineSpeed = [0, 8, 12];
var fuelSpeed = [0, -23, 3, 54];

var modelCoe = [3, 1, 5];
var engineCoe = [3, 2, 0];
var fuelCoe = [0, 81, 20, 48];

function ChangeImage() {
    var value = document.getElementById("models").value;
    document.getElementById("model_image").src = "IMAGES/GALLERY/" + value + ".png";
}

function ChangeValues() {
    var price = 0;
    var coe = 0;
    var speed = 0;

    switch (document.getElementById("models").value) {
        case "righel-golf":
            price += modelPrices[0];
            coe += modelCoe[0];
            speed += modelSpeed[0];
            break;
        case "righel-prius":
            price += modelPrices[1];
            coe += modelCoe[1];
            speed += modelSpeed[1];
            break;
        case "righel-gt3":
            price += modelPrices[2];
            coe += modelCoe[2];
            speed += modelSpeed[2];
            break;
    }

    var engineID = Number(document.getElementById("engines").value);
    var fuelID = Number(document.getElementById("fuels").value);

    console.log(engineID + " " + fuelID);

    price += enginePrices[engineID] + fuelPrices[fuelID];
    speed += engineSpeed[engineID] + fuelSpeed[fuelID];
    coe += engineCoe[engineID] + fuelCoe[fuelID];

    console.log(price);

    var speed_slider = document.getElementById("speed_slider_progress");
    var coe_slider = document.getElementById("coe_slider_progress");

    document.getElementById("explosion_chance").innerHTML = coe + "%";
    coe_slider.style.width = coe + "%";
    document.getElementById("max_speed").innerHTML = speed + "kph";
    speed_slider.style.width = (speed / 300 * 100) + "%";

    document.getElementById("priceText").innerText = "$" + Number(price);
}

document.getElementById("models").addEventListener("click", () => {
    ChangeImage();
    ChangeValues();
});

document.getElementById("engines").addEventListener("click", () => {
    ChangeImage();
    ChangeValues();
});

document.getElementById("fuels").addEventListener("click", () => {
    ChangeImage();
    ChangeValues();
});

var order_open = false;
var element = document.getElementById("order_overlay");
var bcg = document.getElementById("bcg");

window.onload = function () {
    ChangeValues();
    ChangeImage();
    element.style.opacity = 0;
};

function ToggleOrder() {

    if(!order_open){
        element.style.opacity = 1;

        order_open = true;
    }
    else{
        element.style.opacity = 0;

        order_open = false;
    }
}