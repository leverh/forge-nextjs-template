"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Download,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { Brand } from "./brand";
import { TEMPLATE_DOWNLOAD_URL } from "@/lib/template";

export function TemplateButton({
  children = "Get the template",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [copied, setCopied] = useState(false);
  return (
    <>
      <button
        className={`button ${className}`}
        onClick={() => dialog.current?.showModal()}
      >
        {children}
        <ArrowUpRight size={18} />
      </button>
      <dialog
        ref={dialog}
        className="template-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="close-dialog"
          aria-label="Close template details"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <Brand />
        <span className="eyebrow">YOUR NEXT IDEA STARTS HERE</span>
        <h2 id={titleId}>Make it yours.</h2>
        <p>
          Get the complete Forge project, ready to customize and deploy, or
          start with the quick-start guide.
        </p>
        <div className="included">
          <Check size={17} /> Next.js 16 + React 19 + Tailwind CSS 4
        </div>
        <div className="included">
          <Check size={17} /> Responsive pages and CSS device mockups
        </div>
        <div className="command">
          <code>npm install &amp;&amp; npm run dev</code>
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  "npm install && npm run dev",
                );
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <a
          className="button"
          href={TEMPLATE_DOWNLOAD_URL}
          download="forge-template.zip"
        >
          <Download size={16} /> Download project ZIP
        </a>
        <a
          className="button button-dark guide-download"
          href="/forge-guide.md"
          download
        >
          <Download size={16} /> Download quick-start guide
        </a>
      </dialog>
    </>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);
  return (
    <header className="header">
      <a href="#home" aria-label="Forge home">
        <Brand />
      </a>
      <nav aria-label="Main navigation" className={open ? "nav open" : "nav"}>
        <a href="#home" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#features" onClick={() => setOpen(false)}>
          Features
        </a>
        <a href="#preview" onClick={() => setOpen(false)}>
          Preview
        </a>
        <a href="#faq" onClick={() => setOpen(false)}>
          FAQ
        </a>
      </nav>
      <TemplateButton className="button-dark header-cta" />
      <button
        className="mobile-menu"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export function PreviewLink() {
  return (
    <a className="preview-link" href="#preview">
      Live preview <ExternalLink size={16} />
    </a>
  );
}
