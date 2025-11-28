import Link from "next/link";

export function Footer() {
  return (
    <footer className="glass-divider border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-foreground">
              <span className="text-primary-500">Abis</span>karAI
            </p>
            <p className="mt-1 text-muted">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="https://github.com/sagar431"
              target="_blank"
              className="font-medium text-muted transition hover:text-primary-500"
            >
              GitHub
            </Link>
            <Link
              href="https://huggingface.co/sagar007"
              target="_blank"
              className="font-medium text-muted transition hover:text-primary-500"
            >
              Hugging Face
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


