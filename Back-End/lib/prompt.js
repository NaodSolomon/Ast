// All prompt templates used by AI wrapper. Keep short and deterministic for lower token usage.


module.exports = {
    generalQuery: ({ query, language = 'en' }) => {
    if (language === 'am') {
        return `You are Astemregn, an AI tutor. Answer the following question in clear Amharic for a beginner. Keep the answer short (2-4 short paragraphs). Question: ${query}`;
    }
        return `You are Astemregn, an AI tutor. Answer the following question in clear English for a beginner. Keep the answer short (2-4 short paragraphs). Question: ${query}`;
    },


roadmap: ({ goal, language = 'en' }) => {
    if (language === 'am') {
        return `You are Astemregn. Generate a concise step-by-step learning roadmap in Amharic for the goal: ${goal}. Output as a JSON array of steps where each step has title and tasks array. Keep it short (5-8 steps).`;
    }
        return `You are Astemregn. Generate a concise step-by-step learning roadmap in English for the goal: ${goal}. Output as a JSON array of steps where each step has title and tasks array. Keep it short (5-8 steps).`;
    },


phrase: ({ phrase, language = 'en' }) => {
    if (language === 'am') {
        return `You are Astemregn. Explain this phrase in simple Amharic for a beginner. Give one-sentence definition and one short example. Phrase: ${phrase}`;
    }
        return `You are Astemregn. Explain this phrase in simple English for a beginner. Give one-sentence definition and one short example. Phrase: ${phrase}`;
    },


courses: ({ goal, level = 'beginner', language = 'en' }) => {
    if (language === 'am') {
        return `You are Astemregn. Recommend 3 free online resources in Amharic or accessible to Ethiopian learners for the goal: ${goal}. Level: ${level}. Output JSON array of {title, provider, url}.`;
    }
        return `You are Astemregn. Recommend 3 free online resources for the goal: ${goal}. Level: ${level}. Output JSON array of {title, provider, url}.`;
    },


careers: ({ skills = [], interests = [], language = 'en' }) => {
    const s = Array.isArray(skills) ? skills.join(', ') : skills;
    const i = Array.isArray(interests) ? interests.join(', ') : interests;
    if (language === 'am') {
        return `You are Astemregn. Suggest 3 suitable career paths in Amharic for a user with skills: ${s} and interests: ${i}. For each, give title and 1-line reason.`;
    }
        return `You are Astemregn. Suggest 3 suitable career paths for a user with skills: ${s} and interests: ${i}. For each, give title and 1-line reason.`;
    }
};