//$(document).ready(function(){
//    console.log('DOM załadowany - można się bawić');
//});

$(function(){
    console.log('DOM załadowany - można się bawić');
});


//$(function(){
//    $('p').css('color', 'red');
//});

$(function(){
    var paragraphs = $('p').css('color', 'red');
    var rawFirstParagraph = paragraphs[0];
    console.log(rawFirstParagraph);
    var jqFirstParagraph = paragraphs.eq(0)
    console.log(jqFirstParagraph);
    jqFirstParagraph.css('color', 'blue');
});

$(function(){
    var p = $( '<p></p>' ),
        pWithText = $( '<p>Siema!</p>' ),
        pWithClass = $( '<p class="greeting">Siema!</p>' );
    console.log(p);
    console.log(pWithText);
    console.log(pWithClass);

    $("body").append(pWithText);
    $("body").append(pWithClass);

});



$(function(){
    var li = $('ul').find('li').last();
    li.css("color", "red");
});

$(function(){
    var li = $('ul').find('li').first().css('color', 'blue');
    console.log(li);
});


$(function(){

    $("ul").append("<li>Nowy element</li>")
    var firstItem = $('nav').find('li').first();
    console.log(firstItem.text());
    firstItem.css("color", "red")
});

var span = $("span");
span.each(function(index, element) {
});

//span.each(function(index, element) {
//    if(index % 2 == 0) {
 //       $(element).css('color', 'red');
 //   };
//});

$("span:odd").css('color','red');

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var index = index + 1;
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)

});

$("button").click(function(){
    alert($(this).attr("data-tmp"));
});