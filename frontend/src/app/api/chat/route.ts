import { NextRequest, NextResponse } from "next/server";
import { cvData } from "../../../lib/cvData";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const message =
            typeof body?.message === "string" ? body.message.trim() : "";

        if (!message) {
            return NextResponse.json(
                { error: "Missing 'message' in request body." },
                { status: 400 }
            )
        }

        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "openai/gpt-oss-120b",
                    messages: [
                        {
                            role: "system",
                            content:
                                `You are a digital twin of a person. Answer only based on this data:\n` +
                                cvData +
                                `\nIf the answer is not in the provided data, say you don't know.` +
                                `\nRespond in plain English sentences, without Markdown, without tables and without code blocks.` +
                                `\nIf you list projects, write them as a simple numbered list like "1) ...", each on a new line.`,
                        },
                        {
                            role: "user",
                            content: message,
                        },
                    ],
                }),
            }
        );

        const data = await response.json();
        if (!response.ok) {
            console.error("OpenRouter error", response.status, data);
            return NextResponse.json(
                { error: data?.error?.message ?? "OpenRouter request failed." },
                { status: 500 }
            )
        }

        const reply =
            data?.choices?.[0]?.message?.content?.trim() ??
            "I don't know answer based on the provided data.";

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Chat route error", error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}