// import { lstat } from "fs";

(
    function(){
      //use local storage, add listener such that when the keys change there is a callback
        
        //let onChangeList = (sites)=>{
            // eslint-disable-next-line no-undef
            chrome.webRequest.onBeforeRequest.addListener(
                details => {
                    return {cancel: true};
                },
                {
                urls: ["*://*.youtube.com/*",
                 "*://*.yahoo.com/*"]
                },
                ["blocking"]
            )
        // }

        //var ls = require('local-storage');
        // onChangeList();
    }()
);