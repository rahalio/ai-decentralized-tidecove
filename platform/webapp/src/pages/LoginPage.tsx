import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiKey, setApiKey } from "@/lib/api-client";

export function LoginPage() {
  const navigate = useNavigate();
  const [key, setKey] = useState(getApiKey());
  const [health, setHealth] = useState<string>("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setApiKey(key.trim());
    try {
      const res = await fetch("/health");
      const body = await res.json();
      setHealth(`${body.service} · ${body.status}`);
      navigate("/");
    } catch {
      setHealth("API unreachable — start pnpm dev:api");
    }
  }

  return (
    <div className="login-hero">
      <form className="login-card moor" onSubmit={onSubmit}>
        <div className="brand" style={{ justifyContent: "center", marginBottom: 12 }}>
          <span className="brand-mark" />
          <span className="brand-name">Tidecove</span>
        </div>
        <p className="headline">Publish once. Sell across markets. Keep the data.</p>
        <div className="field" style={{ textAlign: "left" }}>
          <label htmlFor="api-key">API key</label>
          <input
            id="api-key"
            className="mono"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Enter harbour
        </button>
        {health ? <p style={{ marginTop: 16 }}>{health}</p> : null}
      </form>
    </div>
  );
}
