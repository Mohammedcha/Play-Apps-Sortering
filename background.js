function onClicked(info, tab) {
	chrome.tabs.executeScript(null,{"file": "jquery.tinysort.min.js"},function() {
		var cards = chrome.tabs.sendMessage(tab.id,{"message":info.menuItemId});
	});
}
var storePages = ["https://play.google.com/store/*"];
var parent = chrome.contextMenus.create({"title":"Re-skinning Sort by...", "documentUrlPatterns":storePages});
var title = chrome.contextMenus.create({"title":"Title", "id": "t", "parentId":parent, "onclick":onClicked, "documentUrlPatterns":storePages});
var artist = chrome.contextMenus.create({"title":"Publisher", "id": "a", "parentId":parent, "onclick":onClicked, "documentUrlPatterns":storePages});
var price = chrome.contextMenus.create({"title":"Price", "id": "p", "parentId":parent, "onclick":onClicked, "documentUrlPatterns":storePages});