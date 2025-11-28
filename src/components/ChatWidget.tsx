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

  // Load messages from localStorage on mount
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

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("abiskar_chat_history", JSON.stringify(messages));
    }
  }, [messages, isInitialized]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Auto-resize textarea as user types
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  // Auto-focus textarea when chat opens
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

    // Reset height
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

  // Only render content after hydration to avoid mismatch if using localStorage
  // effectively we show default state first or wait. 
  // Actually, it's better to show something. The useEffect handles the update.

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="glass-button flex h-14 w-14 items-center justify-center rounded-full text-base font-bold text-black shadow-lg shadow-primary-500/30 hover:scale-105"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? "✕" : "AI"}
      </button>

      {isOpen ? (
        <div className="glass-card mt-4 flex h-[500px] w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl shadow-2xl sm:w-[380px]">
          <header className="flex items-center justify-between border-b border-white/20 px-5 py-4">
            <div>
              <p className="text-sm font-bold text-foreground">Ask AI</p>
              <p className="text-xs text-muted">Powered by Gemini</p>
            </div>
            <button
              type="button"
              onClick={clearChat}
              className="rounded px-2 py-1 text-xs font-medium text-muted transition hover:text-primary-500"
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
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed ${message.role === "assistant" ? "border border-white/15 bg-white/8 text-foreground backdrop-blur-xl" : "glass-button font-medium"}`}
                  style={message.role === "assistant" ? { backdropFilter: 'blur(20px) saturate(150%)' } : {}}
                >
                  {message.role === "assistant" ? (
                     <div className="markdown-content space-y-2">
                       <ReactMarkdown
                         components={{
                           a: ({ node, ...props }) => <a {...props} className="text-primary-300 hover:underline underline-offset-2" target="_blank" rel="noopener noreferrer" />,
                           ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-4 space-y-1" />,
                           ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-4 space-y-1" />,
                           p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />,
                           code: ({ node, ...props }) => <code {...props} className="bg-white/10 rounded px-1 py-0.5 font-mono text-xs" />,
                         }}
                       >
                         {message.content}
                       </ReactMarkdown>
                     </div>
                  ) : (
                    message.content
                  )}
                </div>
                <span className="mt-1.5 text-[10px] font-mono text-muted/50">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            ))}
            {isLoading ? (
              <div className="flex justify-start">
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-500"></div>
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-500" style={{animationDelay: '0.2s'}}></div>
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-500" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          <form
            className="flex items-end gap-3 border-t border-white/10 px-5 py-4"
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
              className="min-h-[40px] max-h-[100px] flex-1 resize-none rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/30"
              rows={1}
            />
            <button
              type="submit"
              disabled={!canSend}
              className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary-500 text-black font-bold transition hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-muted/40"
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
