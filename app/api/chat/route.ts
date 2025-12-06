import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function POST(request: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is not configured" },
        { status: 500 }
      );
    }

    const { message, conversationHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // System prompt to guide the AI behavior
    const systemPrompt = `You are a helpful and professional AI assistant for SparshTech, a leading digital solutions agency. 

Your role is to:
- Assist visitors in understanding SparshTech's services (Web Development, Mobile Apps, Custom Software, AI Solutions).
- Guide potential clients to the Contact page for quotes and consultations.
- Answer questions about the company's expertise, technology stack, and development process.
- Provide information about the team and company values.
- Be professional, engaging, and solution-oriented.
- Keep responses concise (2-3 paragraphs maximum).

SparshTech specializes in:
1. **Web Development**: Building modern, high-performance websites using Next.js, React, and Tailwind CSS.
2. **Mobile App Development**: Creating cross-platform apps with Flutter and React Native.
3. **Custom Software**: Tailored software solutions to streamline business operations.
4. **AI & Machine Learning**: Integrating intelligent chatbots and AI features into applications.
5. **UI/UX Design**: Crafting intuitive and visually stunning user interfaces.
6. **Cloud & DevOps**: Scalable infrastructure and deployment solutions.

Always be polite and professional. If a user expresses interest in starting a project or needs a quote, strongly encourage them to visit the **/contact** page or reach out to the team directly.`;

    // Build the conversation history with system prompt
    const contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      {
        role: "model",
        parts: [{ text: "I understand. I'll help users with their learning journey on CodeWithPratham by providing guidance, answering questions, and recommending appropriate tutorials." }],
      },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    // Call Gemini API
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: contents,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API error:", errorData);
      return NextResponse.json(
        { error: "Failed to get response from Gemini AI" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Extract the AI response
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      return NextResponse.json(
        { error: "No response generated" },
        { status: 500 }
      );
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
