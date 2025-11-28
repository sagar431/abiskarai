import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { agentSystemPrompt } from "@/data/agentContext";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key is not configured." },
        { status: 500 },
      );
    }

    const { messages } = (await request.json()) as { messages?: ChatMessage[] };
    const filtered = (messages ?? []).filter((message) => message.content.trim().length > 0);

    const modelName = process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite-preview";

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: agentSystemPrompt,
    });

    const contents = filtered.length
      ? filtered.map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        }))
      : [
          {
            role: "user" as const,
            parts: [{ text: "Introduce yourself as the AbiskarAI agent." }],
          },
        ];

    const result = await model.generateContent({ contents });
    const text = result.response.text() ?? "";

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Gemini agent error:", error);
    return NextResponse.json(
      {
        error:
          "We ran into a problem reaching Gemini. Please try again shortly or contact sagar@abiskarai.com.",
      },
      { status: 500 },
    );
  }
}

