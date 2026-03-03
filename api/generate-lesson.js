import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('🔑 API Key exists:', !!apiKey);

  if (!apiKey) {
    console.error('❌ GEMINI_API_KEY missing');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { skillTitle, gradeTitle } = req.body;

    if (!skillTitle || !gradeTitle) {
      return res.status(400).json({
        error: 'Missing required fields',
        received: { skillTitle, gradeTitle }
      });
    }

    console.log('📚 Generating lesson for:', skillTitle, gradeTitle);

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Using gemini-2.5-flash model
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash'
    });



   const prompt = `
      Create a Quiz Lesson in JSON format.

      Skill: "${skillTitle}"
      Grade: "${gradeTitle}"

      Generate a JSON object with:
      1. "topicIntro": A short, encouraging introduction paragraph.
      2. "questions": An array of exactly 20 multiple-choice questions.

      Each question must have:
      - "question": The question text.
      - "options": An array of 4 options (e.g. ["A) 1", "B) 2", "C) 3", "D) 4"]).
      - "correctAnswer": The correct option letter (e.g. "B").
      - "explanation": A brief explanation of why it is correct.

      Return ONLY valid JSON. No markdown.
    `.trim();

    console.log('🤖 Calling Gemini API with gemini-2.5-flash...');
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    console.log('📝 Raw response:', text.substring(0, 200));

    // Clean up potential markdown formatting
    let cleanText = text.trim();
    cleanText = cleanText.replace(/```json\n?/g, '');
    cleanText = cleanText.replace(/```\n?/g, '');
    cleanText = cleanText.trim();
    
    const jsonResponse = JSON.parse(cleanText);
    
    console.log('✅ Successfully generated lesson');
    return res.status(200).json(jsonResponse);

  } catch (err) {
    console.error('❌ Error details:', {
      name: err.name,
      message: err.message,
      status: err.status
    });
    
    return res.status(500).json({ 
      error: 'Failed to generate lesson',
      details: err.message
    });
  }
}