"use client";

import { FormEvent, useState } from "react";

type ChatMessage = {
    id: number;
    role: "user" | "assistant";
    content: string
};

export function DigitalTwinChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        const userMessage: ChatMessage = {
            id: Date.now(),
            role: "user",
            content: trimmed
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: trimmed })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    typeof data?.error === "string"
                        ? data.error : "Unexpected error from the Digital Twin API."
                )
            }

            const replyText =
                typeof data?.reply === "string" && data.reply.trim().length > 0
                    ? data.reply.trim() : "I don't know answer based on the provided data.";

            const assistantMessage: ChatMessage = {
                id: Date.now() + 1,
                role: "assistant",
                content: replyText
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
            console.error("Chat error", err);
            setError(
                err instanceof Error
                    ? err.message : "An unexpected error occurred."
            )
        } finally {
            setIsLoading(false);
        }
    }

    function handleClear() {
        setMessages([]);
        setError(null);
    }

    return (
        <section
            id="digital-twin"
            className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] items-start"
        >
            <div className="md:pt-1">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                    Digital Twin
                </h2>
            </div>

            <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Ask a digital twin of me questions about my background, experience.
                    The assistant answers only using information from my CV.
                </p>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 space-y-4">
                    <div className="h-56 overflow-y-auto space-y-3 pr-1">
                        {messages.length === 0 ? (
                            <p className="text-xs text-gray-500">
                                Try asking:
                                <span className="text-gray-300"> “What is Natalia&apos;s current job?”</span>{" "}
                                or{" "}
                                <span className="text-gray-300">
                                    “Which AI projects has Natalia worked on?”
                                </span>
                                .
                            </p>
                        ) : (
                            messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs md:text-sm leading-relaxed whitespace-pre-line
                                            ${message.role === "user"
                                                ? "bg-sky-500/20 border border-sky-400/40 text-sky-50"
                                                : "bg-white/5 border border-white/10 text-gray-100"}`
                                        }
                                    >
                                        {message.content}
                                    </div>
                                </div>
                            )
                            )
                        )}
                    </div>

                    {error && (
                        <p className="text-xs text-red-400">
                            {error}
                        </p>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about my background, experience or projects..."
                            className="flex-1 rounded-full bg-black/40 border border-white/20 px-4 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-gray-100 bg-sky-500/80 hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {isLoading ? "Thinking..." : "Send"}
                        </button>
                    </form>

                    <div className="flex justify-end">
                        <button
                             type="button"
                             onClick={handleClear}
                             disabled={messages.length === 0 && !error}
                             className="mt-1 text-[11px] text-gray-500 hover:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            Clear conversation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
