var stompClient = null;
var username = "Anonym";

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    stompClient.send("/app/hello", {}, JSON.stringify({'username': username.valueOf() ,'textMessage':$("#text").val()}));
}

function showGreeting(message) {
    $("#greetings1").append("<tr><td>" + message + "</td></tr>");
}
function showName() {
    username = $("#username").val();
}
$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect();});
    $( "#disconnect" ).click(function() { disconnect();});
    $( "#send2" ).click(function() { showName()});
    $( "#send" ).click(function() { sendName();});
});