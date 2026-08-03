// ==========================================
// KNOWLEDGE BASE
// ==========================================

const knowledgeBase = [

    {
        id: "about",
        file: "who-is-abin-santhosh.md",
        keywords: [
            "who is abin",
            "who are you",
            "introduce yourself",
            "tell me about yourself",
            "about you",
            "about abin",
            "about abin santhosh",
            "abin santhosh",
            "who is abin santhosh",
            "who is this",
            "who are u",
            "about me",
            "bio",
            "biography",
            "background",
            "summary",
            "profile",
            "overview",
            "intro",
            "introduction",
            "tell me about abin",
            "tell me about abin santhosh",
            "who made this",
            "who built this",
            "who created this",
            "creator",
            "developer",
            "owner",
            "author",
            "your name",
            "what is your name"
        ]
    },

    {
        id: "projects",
        file: "projects.md",
        keywords: [
            "projects",
            "portfolio",
            "github repositories",
            "github repos",
            "project",
            "works",
            "latest work",
            "recent work",
            "builds",
            "built",
            "apps",
            "applications",
            "websites",
            "products",
            "software",
            "code",
            "codebase",
            "repo",
            "repos",
            "git",
            "open source",
            "case studies",
            "demos",
            "demonstrations",
            "side projects",
            "featured projects",
            "show projects",
            "what built",
            "what created"
        ]
    },

    {
        id: "skills",
        file: "skills.md",
        keywords: [
            "skills",
            "tech stack",
            "technology",
            "languages",
            "frameworks",
            "tools",
            "skill",
            "skillset",
            "stack",
            "tech",
            "technologies",
            "expertise",
            "abilities",
            "competencies",
            "proficiencies",
            "capabilities",
            "technical skills",
            "hard skills",
            "soft skills",
            "programming languages",
            "coding languages",
            "coding",
            "libraries",
            "databases",
            "platforms",
            "know-how",
            "what can abin do",
            "what do you know",
            "what does he know",
            "what is your tech stack",
            "what is abin's stack"
        ]
    },

    {
        id: "experience",
        file: "experience.md",
        keywords: [
            "experience",
            "internship",
            "job",
            "career",
            "experiences",
            "internships",
            "jobs",
            "careers",
            "intern",
            "employment",
            "employment history",
            "work history",
            "work experience",
            "career history",
            "job history",
            "professional background",
            "professional experience",
            "roles",
            "positions",
            "companies",
            "employers",
            "past work",
            "past jobs",
            "previous roles",
            "current role",
            "where did abin work",
            "where has abin worked",
            "where does abin work",
            "resume",
            "cv"
        ]
    },

    {
        id: "socials",
        file: "socials.md",
        keywords: [
            "social",
            "social media",
            "twitter",
            "facebook",
            "instagram",
            "contact",
            "email",
            "phone",
            "linkedin",
            "website",
            "socials",
            "contact info",
            "contact information",
            "get in touch",
            "reach out",
            "how to contact",
            "how to reach abin",
            "how to get in touch",
            "connect",
            "network",
            "links",
            "profiles",
            "handles",
            "social handles",
            "x",
            "github profile",
            "github link",
            "youtube",
            "discord",
            "telegram",
            "threads",
            "medium",
            "mail",
            "gmail",
            "message",
            "call",
            "phone number",
            "mobile"
        ]
    },

    {
        id: "education",
        file: "education.md",
        keywords: [
            "education",
            "academic",
            "academics",
            "school",
            "college",
            "university",
            "degree",
            "bachelor",
            "master",
            "phd",
            "doctorate",
            "diploma",
            "certificate",
            "certification",
            "qualification",
            "qualifications",
            "coursework",
            "studies",
            "major",
            "minor",
            "gpa",
            "honors",
            "scholarship",
            "alma mater"
        ]
    },

    {
        id: "career-goals",
        file: "goals.md",
        keywords: [
            "goals",
            "goal",
            "career goals",
            "career goal",
            "objective",
            "objectives",
            "aspiration",
            "aspirations",
            "ambition",
            "ambitions",
            "future",
            "future plans",
            "vision",
            "roadmap",
            "target",
            "targets",
            "mission",
            "career path",
            "growth",
            "development",
            "aim",
            "aims",
            "prospects"
        ]
    },

    {
        id: "interests",
        file: "interests.md",
        keywords: [
            "interests",
            "interest",
            "hobbies",
            "hobby",
            "passions",
            "passion",
            "activities",
            "extracurricular",
            "extracurriculars",
            "recreation",
            "pastimes",
            "pastime",
            "leisure",
            "pursuits",
            "curiosities",
            "favorites",
            "likes"
        ]
    },

    {
        id: "photos",
        file: "photos.md",
        keywords: [
            "photos",
            "photo",
            "photograph",
            "photographs",
            "photography",
            "pictures",
            "picture",
            "pics",
            "pic",
            "images",
            "image",
            "gallery",
            "album",
            "snapshots",
            "snapshot",
            "shots",
            "shot",
            "visuals",
            "portraits",
            "headshots"
        ]
    }

];

// ==========================================
// FIND MATCHING KNOWLEDGE
// ==========================================

function findKnowledge(question) {

    const query = question.toLowerCase();
    let bestMatch = null;
    let longestKeywordLength = 0;

    for (const item of knowledgeBase) {

        for (const keyword of item.keywords) {

            const lowerKeyword = keyword.toLowerCase();

            if (query.includes(lowerKeyword)) {

                // Prioritize longer, more specific matching keywords over short general ones
                if (lowerKeyword.length > longestKeywordLength) {

                    longestKeywordLength = lowerKeyword.length;
                    bestMatch = item;

                }

            }

        }

    }

    return bestMatch || { id: "error", file: "error.md" };

}