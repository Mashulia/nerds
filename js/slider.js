var switch = document.querySelectorAll(".ring");
var wrapper = document.querySelector(".sliders-list");
var activeSwitch = 0;

for (var i = 0; i < switch.length; i++) {
    var switch = switch[i];
    switch.addEventListener('click', setClickedItem, false);

    switch.itemID = i;
}

switch[activeSwitch].classList.add("active");

function setClickedItem(e) {
    removeActiveSwitch();

    var clickedLink = e.target;
    activeSwitch = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveSwitch() {
    for (var i = 0; i < switch.length; i++) {
        switch[i].classList.remove("active");
    }
}

function changePosition(switch) {
    switch.classList.add("active");

    var position = switch.getAttribute("data-pos");
    wrapper.style.left = position;
}
