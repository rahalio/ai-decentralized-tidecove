import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";
import "./shell.css";

const NAV = [
  { to: "/", label: "Seller home", end: true },
  { to: "/buyer", label: "Buyer home" },
  { to: "/assets", label: "Assets" },
  { to: "/licences", label: "Licence offers" },
  { to: "/discovery", label: "Discovery" },
  { to: "/entitlements", label: "Entitlements" },
  { to: "/compute", label: "Compute-to-data" },
  { to: "/keepers", label: "Keepers" },
  { to: "/marketplace", label: "Marketplace fronts" },
  { to: "/settlements", label: "Settlements" },
  { to: "/compliance", label: "Compliance" },
  { to: "/participants", label: "Participants" },
  { to: "/commons", label: "Commons" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="shell">
      <aside className="shell-nav">
        <div className="brand">
          <span className="brand-mark" aria-hidden />
          <span className="brand-name">Tidecove</span>
        </div>
        <nav aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="shell-main moor">{children}</main>
    </div>
  );
}
