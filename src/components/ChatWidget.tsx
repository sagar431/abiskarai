"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
};

function createBlankMessage(content: string, role: Message["role"]): Message {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
    timestamp: Date.now(),
  };
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

const INITIAL_MESSAGE: Message = {
  id: "assistant-intro",
  role: "assistant",
  content:
    "Hi, I'm the AbiskarAI agent. Curious about our services, projects, or how we can help with AI agents, model training, and optimization? Ask away!",
  timestamp: Date.now(),
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const canSend = input.trim().length > 0 && !isLoading;

  useEffect(() => {
    const saved = localStorage.getItem("abiskar_chat_history");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load chat history", e);
      }
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("abiskar_chat_history", JSON.stringify(messages));
    }
  }, [messages, isInitialized]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const conversation = useMemo(
    () =>
      messages.map(({ role, content }) => ({ role, content })).filter((m) => m.content.trim().length > 0),
    [messages],
  );

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const userMessage = createBlankMessage(trimmed, "user");
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...conversation, userMessage] }),
      });

      if (!response.ok) {
        throw new Error(`Gemini request failed: ${response.status}`);
      }

      const data: { content: string } = await response.json();
      setMessages((prev) => [...prev, createBlankMessage(data.content, "assistant")]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        createBlankMessage(
          "I'm having trouble reaching Gemini right now. Please try again in a moment or drop us an email at sagar@abiskarai.com.",
          "assistant",
        ),
      ]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (canSend) {
        handleSend();
      }
    }
  }

  function clearChat() {
    setMessages([INITIAL_MESSAGE]);
    localStorage.removeItem("abiskar_chat_history");
  }

  return (
    <div className="fixed bottom-4 right-4 z-[90] sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-base font-bold text-white shadow-lg shadow-slate-900/20 transition hover:scale-105 hover:bg-black dark:bg-white dark:text-black dark:shadow-white/10 dark:hover:bg-slate-100 sm:h-14 sm:w-14"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? "✕" : "AI"}
      </button>

      {isOpen ? (
        <div className="mt-4 flex h-[500px] w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:w-[380px]">
          <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Ask AI</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">Powered by Gemini</p>
            </div>
            <button
              type="button"
              onClick={clearChat}
              className="rounded px-2 py-1 text-xs font-medium text-slate-400 transition hover:text-slate-700 dark:text-slate-500 dark:hover:text-white"
              title="Clear conversation"
            >
              Clear
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${message.role === "assistant" ? "items-start" : "items-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                    message.role === "assistant"
                      ? "border border-slate-100 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-200"
                      : "bg-slate-900 text-white font-medium dark:bg-white dark:text-black"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <div className="markdown-content space-y-2">
                      <ReactMarkdown
                        components={{
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          a: ({ ...props }: any) => <a {...props} className="text-blue-600 hover:underline underline-offset-2 dark:text-blue-400" target="_blank" rel="noopener noreferrer" />,
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          ul: ({ ...props }: any) => <ul {...props} className="list-disc pl-4 space-y-1" />,
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          ol: ({ ...props }: any) => <ol {...props} className="list-decimal pl-4 space-y-1" />,
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          p: ({ ...props }: any) => <p {...props} className="mb-2 last:mb-0" />,
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          code: ({ ...props }: any) => <code {...props} className="bg-slate-100 dark:bg-slate-700 rounded px-1 py-0.5 font-mono text-xs" />,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
                <span className="mt-1.5 text-[10px] font-mono text-slate-300 dark:text-slate-600">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            ))}
            {isLoading ? (
              <div className="flex justify-start">
                <div className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-400 dark:border-slate-800 dark:bg-slate-800/50">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400"></div>
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          <form
            className="flex items-end gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800"
            onSubmit={(event) => {
              event.preventDefault();
              handleSend();
            }}
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              className="min-h-[40px] max-h-[100px] flex-1 resize-none rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-slate-600 dark:focus:ring-slate-600"
              rows={1}
            />
            <button
              type="submit"
              disabled={!canSend}
              className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-900 text-white font-bold transition hover:bg-black disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-300 dark:bg-white dark:text-black dark:hover:bg-slate-200 dark:disabled:bg-slate-800 dark:disabled:text-slate-600"
              aria-label="Send message"
            >
              ↑
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
