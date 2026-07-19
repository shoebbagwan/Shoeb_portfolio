import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-text-tertiary font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-xs text-text-tertiary font-mono">
          Built with Next.js, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
