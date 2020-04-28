
document.getElementById("rate").addEventListener('click', function (tabs)
{
    function getDOM()
    {
        return document.body.innerHTML;
    }
   
    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    // chrome.tabs.executeScript({ code: '(' + getDOM + ')();' }, (results) =>
    // {
    //     console.log("Popup DOM fully loaded and parsed");
    //     //innerHTML of body logged
    //     // console.log stored as variable
    //     var str = results[0];
    //     console.log(new_body);
    //     //func to update the contents of the page to be 
    //     chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs)
    //     {
    //         chrome.tabs.sendMessage(tabs[0].id, { body: new_body }, function (response)
    //         {
    //             console.log(response.result);
    //         });
    //     });
    // });
        
});

