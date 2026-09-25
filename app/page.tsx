import {
  Box,
  FileText,
  Palette,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { Header, PreviewLink, TemplateButton } from "@/components/actions";
import { DeviceShowcase, Laptop } from "@/components/devices";

const features = [
  [Zap, "Built with Next.js 16 and React 19"],
  [Box, "Beautiful, reusable components"],
  [Palette, "Fully customisable with Tailwind CSS"],
  [Smartphone, "Looks incredible on every device"],
  [FileText, "Clean, well-structured code"],
  [Sparkles, "Built to grow with your next idea"],
] as const;

function Annotation({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`annotation ${className}`}>
      {children}
      <svg viewBox="0 0 70 55" fill="none" aria-hidden="true">
        <path
          d="M9 4c3 22 21 35 48 36m-7-7 8 7-9 6"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="home" className="site-shell">
        <Header />
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-glow" />
            <div className="hero-content">
              <p className="eyebrow">A NEXT.JS TEMPLATE FOR MODERN BUILDERS</p>
              <h1 id="hero-title">
                Launch your
                <br />
                next idea, <span>faster.</span>
              </h1>
              <p className="hero-description">
                A beautifully crafted, production-ready Next.js template
                <br className="desktop-break" /> to help you ship stunning
                websites without the usual
                <br className="desktop-break" /> setup pain.
              </p>
              <div className="hero-actions">
                <TemplateButton>Get it for free</TemplateButton>
                <PreviewLink />
              </div>
              <div className="social-proof">
                <div className="avatars">
                  {["47", "12", "13", "33"].map((id, index) => (
                    <img
                      key={id}
                      src={`/images/avatar-${index}.jpg`}
                      width="36"
                      height="36"
                      alt=""
                    />
                  ))}
                </div>
                <span>Join 4,000+ builders</span>
              </div>
            </div>
            <Annotation className="hero-annotation">
              MODERN.
              <br />
              FLEXIBLE.
              <br />
              YOURS.
            </Annotation>
            <Laptop />
            <div className="hero-terrain" />
          </section>
          <section className="trusted" aria-label="Trusted by builders at">
            <p className="eyebrow">TRUSTED BY BUILDERS AT</p>
            <div className="logos">
              <span className="vercel">
                <i />
                Vercel
              </span>
              <span className="plaid">
                ▧ <b>PLAID</b>
              </span>
              <span className="linear">
                <i />
                Linear
              </span>
              <span className="cal">Cal.com</span>
              <span className="luma">
                luma<sup>⌁</sup>
              </span>
              <span className="aceternity">aceternity</span>
              <span className="stripe">stripe</span>
            </div>
          </section>
          <section
            className="features-section"
            id="features"
            aria-labelledby="features-title"
          >
            <div id="preview" className="preview-anchor">
              <DeviceShowcase />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">EVERYTHING YOU NEED</p>
              <h2 id="features-title">
                A head start
                <br />
                that <span>actually helps.</span>
              </h2>
              <p className="feature-description">
                Skip the boilerplate and get straight to building. Forge comes
                with everything you need to launch a high-quality website — from
                beautifully designed pages to essential components, all built
                with scalability in mind.
              </p>
              <ul>
                {features.map(([Icon, text]) => (
                  <li key={text}>
                    <Icon
                      size={20}
                      fill={Icon === Zap ? "currentColor" : "none"}
                      strokeWidth={1.8}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="closing" aria-labelledby="closing-title">
            <div className="closing-content">
              <p className="eyebrow">TURN IDEAS INTO REALITY</p>
              <h2 id="closing-title">
                A better starting
                <br />
                point for what’s <span>next.</span>
              </h2>
              <p>
                Whether you’re launching a product, a side project, or your
                personal brand — Forge gives you the foundation to make it real.
                No complex setup. No wasted time. Just a clean, flexible
                template built for modern builders.
              </p>
              <TemplateButton />
            </div>
            <Annotation className="closing-annotation">
              LESS SETUP.
              <br />
              MORE BUILDING.
            </Annotation>
            <figure className="testimonial">
              <blockquote>
                “The cleanest Next.js template I’ve used. Saved me days of
                work.”
              </blockquote>
              <figcaption>
                <img src="/images/avatar-0.jpg" width="27" height="27" alt="" />
                @jameswilson
              </figcaption>
            </figure>
          </section>
          <section id="faq" className="faq" aria-labelledby="faq-title">
            <p className="eyebrow">A FEW MORE DETAILS</p>
            <h2 id="faq-title">Made for your next move.</h2>
            {[
              [
                "What’s included in Forge?",
                "The complete Next.js 16 App Router project, React 19 components, TypeScript, Tailwind CSS 4, responsive CSS device mockups, and locally hosted photography.",
              ],
              [
                "Can I customize the template?",
                "Absolutely. Change the colors and layouts in app/globals.css, update the copy in app/page.tsx, and reuse the components to make it your own.",
              ],
              [
                "How do I get started?",
                "Open the project, run npm install, then npm run dev. When you’re ready to launch, run npm run build and deploy to a hosting provider that supports Next.js.",
              ],
            ].map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </section>
        </main>
        <footer>
          <span>© {new Date().getFullYear()} Forge</span>
          <span>Less setup. More building.</span>
          <a className="footer-credit" href="https://madebyever.com/">Made By Ever <span aria-hidden="true">↗</span></a>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
