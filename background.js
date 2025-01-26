chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "translate",
        title: "Translate text",
        contexts: ["selection"]
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId == "translate" && info.selectionText){
        chrome.storage.local.set({textToTranslate: info.selectionText})
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ["content.js"]
        })
    }
})