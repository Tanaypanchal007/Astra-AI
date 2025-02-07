import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"

// Correct way to access the environment variable
const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
console.log(googleApiKey);  // This should log the API key to the console


const apiKey = googleApiKey;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = await result.response;
    console.log(response.text());
    return response.text();
}

export default run;
