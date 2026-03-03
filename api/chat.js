import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle Pre-flight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Note: Ensure GEMINI_API_KEY is set in your .env.local file
  if (!apiKey) {
    console.error("❌ GEMINI_API_KEY missing");
    return res.status(500).json({ error: "Server error: Missing API key" });
  }

  try {
    // Robust Body Parsing: Sometimes req.body is a string in Vercel/Next.js
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        console.error("JSON Parsing Error:", e);
        return res.status(400).json({ error: "Invalid JSON body" });
      }
    }

    const { message, context } = body || {};

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // Using gemini-1.5-flash for speed
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
      You are a friendly, encouraging math tutor for a young student.
      
      CONTEXT OF THE LESSON:
      ${context || "General math learning"}

      STUDENT'S QUESTION:
      "${message}"

      INSTRUCTIONS:
      - Answer clearly and simply.
      - Keep it short (2-3 sentences max).
      - Be encouraging (use emojis like 🎉, ⭐, or 🤖).
      - Do not give the direct answer to the quiz question if they ask for it, but guide them.
      - Do not repeat the whole lesson, just answer the specific question.
    `;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Chat API Error:", error);
    return res.status(500).json({ 
      error: 'Chat failed', 
      details: error.message 
    });
  }
}