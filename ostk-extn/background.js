chrome.cookies.get({url:"http://www.overstock.com", name:"extn"}, function(cookie){
  //If cookie does not exist or its value is less than today then set badge
  if (cookie == null || parseInt(cookie.value) < parseInt(Date.today().toString('yyyyMMdd'))) {
    chrome.browserAction.setBadgeBackgroundColor({color:[34,139,34, 255]});
    chrome.browserAction.setBadgeText({text:String(' # ')});
  }
});
chrome.cookies.set({url:"http://www.overstock.com", name:"extn", value:Date.today().toString('yyyyMMdd')}, function(cookie){});
