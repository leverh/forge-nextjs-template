import {
  ArrowUpRight,
  Box,
  Code2,
  FileText,
  Gauge,
  Home,
  Layers,
  Menu,
  Palette,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { Brand } from "./brand";

export function Laptop() {
  return (
    <div
      className="laptop-scene"
      aria-label="Preview of the Forge mountain landing page"
    >
      <div className="laptop">
        <div className="laptop-screen">
          <div className="demo-nav">
            <Brand small />
            <span>Home　 Features　 Pricing　 Blog</span>
            <span className="demo-outline">Get started</span>
          </div>
          <div className="demo-hero">
            <div className="demo-copy">
              <h2>
                Build without
                <br />
                limits
              </h2>
              <p>A modern template for ambitious founders.</p>
              <span className="demo-button">
                Get started <ArrowUpRight size={10} />
              </span>
            </div>
          </div>
          <div className="demo-features">
            {[
              [Zap, "Powered by Next.js"],
              [Palette, "Tailwind CSS"],
              [Box, "Fully customisable"],
              [Gauge, "Built for performance"],
            ].map(([Icon, label]) => {
              const Symbol = Icon as typeof Zap;
              return (
                <div key={String(label)}>
                  <Symbol size={15} />
                  <span>{String(label)}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="laptop-base">
          <span />
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

export function DeviceShowcase() {
  return (
    <div
      className="device-showcase"
      aria-label="Responsive Forge pages, navigation, and analytics components"
    >
      <div className="aurora-panel" />
      <div className="code-panel">
        <Brand small />
        <pre>
          {
            'const yourNextIdea = {\n\n  framework: "Next.js",\n  styling: "Tailwind",\n  possibilities: Infinity,\n\n};\n\nexport default function Build() {\n  return <SomethingGreat />;\n}'
          }
        </pre>
        <span>
          <ShieldCheck size={12} /> Designed for possibility
        </span>
      </div>
      <div className="navigation-device">
        <Brand />
        <div className="mock-navigation">
          {[
            [Home, "Home"],
            [Layers, "Pages"],
            [Box, "Components"],
            [FileText, "Templates"],
            [Code2, "Documentation"],
          ].map(([Icon, label], index) => {
            const Symbol = Icon as typeof Home;
            return (
              <div className={index === 0 ? "active" : ""} key={String(label)}>
                <Symbol size={15} />
                {String(label)}
                {index === 1 || index === 2 ? <span>⌄</span> : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="analytics-device">
        <span>Total users</span>
        <div className="metric">
          12,432 <small>↗ 16%</small>
        </div>
        <div className="chart">
          {[18, 28, 43, 65, 31, 48, 72, 35, 24, 46, 67, 93].map(
            (height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ),
          )}
        </div>
      </div>
      <div className="phone-device">
        <div className="phone-notch" />
        <div className="phone-image">
          <Menu size={15} />
          <ArrowUpRight size={15} />
        </div>
        <div className="phone-copy">
          <h3>
            Designed
            <br />
            to convert.
          </h3>
          <p>
            Beautiful layouts, thoughtful details, and all the essentials you
            need to ship.
          </p>
          <span>
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}
