// ==========================================
// MARKDOWN LOADER
// ==========================================

async function loadMarkdownProfile(filename) {

    let markdown = await fetch(
        `assets/md/${filename}`
    ).then(res => res.text());
    
    return markdown;

}