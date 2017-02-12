/**
 * Created by piotr on 05.02.2017.
 */
$(function(){
    var carouselList = $("#carousel ul");

    setInterval(changeImages, 2000);

    function changeImages() {
        carouselList.animate({'marginLeft':-400}, 1000, moveFirstSlide);
    }


    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
});
