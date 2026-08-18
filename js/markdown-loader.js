// ==========================================
// MARKDOWN LOADER
// ==========================================

async function loadMarkdown(filename) {
    const response = await fetch(`assets/md/${filename}`);

    if (!response.ok) {
        throw new Error(`Failed to load ${filename}: ${response.status}`);
    }

    return await response.text();
}


// ==========================================
// MARKDOWN PROFILE
// ==========================================

async function loadMarkdownProfile(filename) {
    const markdown = await loadMarkdown(filename);
    return markdown + await aiQuestion();
}


// ==========================================
// AI QUESTION MIXER
// ==========================================

async function aiQuestion() {
    const questions = await loadMarkdown("ai-questions.md");

    const questionList = questions
        .split("\n")
        .map(question => question.trim())
        .filter(Boolean);

    if (questionList.length === 0) {
        return "";
    }

    const randomQuestion =
        questionList[Math.floor(Math.random() * questionList.length)];

    return `

---

${randomQuestion}
`;
}
