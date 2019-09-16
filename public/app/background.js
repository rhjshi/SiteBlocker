
(
    function(){

      //use local storage, add listener such that when the keys change there is a callback
        
        let onChangeList = (sites)=>{
            // eslint-disable-next-line no-undef
            chrome.webRequest.onBeforeRequest.addListener(
                details => {
                    return {cancel: true};
                },
                {
                urls: sites
                },
                ["blocking"]
            )
        }

        var ls = localStorage;
        ls.setItem('foo', 'hello world');

        // Read it using the storage API
        chrome.storage.sync.set({'foo':'hello'}, function(items) {
            //alert('Settings retrieved', items);
        });
        chrome.storage.onChanged.addListener( (changes, namespace)=>{
            //alert(changes);
        }

        );


        onChangeList(["*://*.youtube.com/*",
        "*://*.yahoo.com/*"]);
    }()
);