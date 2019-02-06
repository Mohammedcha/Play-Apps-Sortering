chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.message == 't') {
        $(".card").tsort();
    }
	else if (msg.message == 'a') {
		$(".card").tsort('.subtitle');
	}
	else if (msg.message == 'p') {
		$(".card").tsort('.price');
	}
    sendResponse();
});