chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //firebase stuff
    var KeyWords;
    var Badkeywords;
    if (request.message == "loaded")
      sendResponse({
        keywords: KeyWords,
        badkeywords:Badkeywords

      });
  });
