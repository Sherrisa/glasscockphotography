$(function() {
    $("#headerChatButton").click(function() {
        $("#letsChatModal").modal("show");  
    });
    $("#letsChatButton").click(function() {
        $("#letsChatModal").modal("show");  
    });
});

const element = document.querySelector('h1');
element.addEventListener('mouseover', makeOrange);
element.addEventListener('mouseout', makeWhite);

function makeOrange() {
    element.style.color = '#AC7A55';
}
function makeWhite() {
    element.style.color = 'white';
}