/**
 * Created by piotr on 05.02.2017.
 */
$(function(){
    //ten kod wykona się po załadowaniu DOM
});

var carouselList = $("#carousel ul");

setInterval(changeImages, 4000);

function changeImages() {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
}


function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginRight: 0});
}
