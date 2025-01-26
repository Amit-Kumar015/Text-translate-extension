document.getElementById("save").addEventListener("click", () => {
    const selectedLanguage = document.getElementById("language").value;
    chrome.storage.local.set({targetLanguage: selectedLanguage})
    alert("Language saved!")
})