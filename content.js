chrome.storage.local.get("textToTranslate", async ({ textToTranslate }) => {
    if (textToTranslate) {
        const targetLanguage = "es";
        
        const response = await fetch(
            `https://libretranslate.com/translate`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    q: textToTranslate,
                    source: "auto",
                    target: targetLanguage
                })
            }
        )
        

        const result = await response.json();

        const translationDiv = document.createElement("div");
        translationDiv.style.position = "fixed"
        translationDiv.style.bottom = "10px";
        translationDiv.style.right = "10px";
        translationDiv.style.background = "#f9f9f9";
        translationDiv.style.border = "1px solid #ccc";
        translationDiv.style.padding = "10px";
        translationDiv.style.zIndex = "9999";
        translationDiv.textContent = result?.translatedText || "something wrong";
        document.body.appendChild(translationDiv)

        setTimeout(() => translationDiv.remove(), 5000)
    }
})