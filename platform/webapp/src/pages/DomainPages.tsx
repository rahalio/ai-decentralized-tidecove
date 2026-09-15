import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiFetch, ApiError } from "@/lib/api-client";
import {
  CustodyPointerField,
  EntitlementCredentialPanel,
  GravityBadge,
  KeeperPenaltyRow,
  LicenceClassPicker,
  PortableOfferChip,
  PurposeGateBanner,
  SettlementStatementExport,
  TakeRateLine,
} from "@/components/domain";

type Envelope<T> = { data: T; meta?: unknown };
type ListData<T> = { items: T[]; nextCursor?: string };

export function AssetsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiFetch<Envelope<ListData<any>>>("/v1/assets")
      .then((r) => setItems(r.data?.items ?? []))
      .catch((e) => setError(e.message));
  }, []);
  return (
    <section>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h1 className="page-title">Assets</h1>
        <Link className="btn" to="/assets/publish">
          Publish
        </Link>
      </div>
      <p>Metadata and custody pointers — no mandatory raw upload.</p>
      {error ? <p className="badge badge-coral">{error}</p> : null}
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Storage</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={4}>Empty harbour — publish a VPC-resident asset.</td>
              </tr>
            ) : (
              items.map((a) => (
                <tr key={a.id}>
                  <td>
                    {a.title} <GravityBadge bound={a.gravityBound} />
                  </td>
                  <td className="mono">{a.storageMode}</td>
                  <td>{a.status}</td>
                  <td className="mono">{a.id}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function AssetPublishPage() {
  const [title, setTitle] = useState("");
  const [pointer, setPointer] = useState("");
  const [storageMode, setStorageMode] = useState("onPremise");
  const [gravity, setGravity] = useState(false);
  const [personalData, setPersonalData] = useState(false);
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await apiFetch<Envelope<any>>("/v1/assets", {
        method: "POST",
        body: JSON.stringify({
          ownerParticipantId: "ptc_local_seller",
          title,
          storageMode,
          storagePointer: pointer,
          gravityBound: gravity,
          personalData,
          status: "published",
        }),
      });
      setMsg(`Published ${res.data?.id ?? "asset"}`);
    } catch (err) {
      setMsg(err instanceof ApiError ? err.message : "Publish failed");
    }
  }

  return (
    <section>
      <h1 className="page-title">Publish asset</h1>
      <p>Register ownership and access location without hosting raw payload at Tidecove.</p>
      <form className="panel" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <CustodyPointerField value={pointer} onChange={setPointer} />
        <div className="field">
          <label htmlFor="mode">Storage mode</label>
          <select id="mode" value={storageMode} onChange={(e) => setStorageMode(e.target.value)}>
            <option value="hosted">Hosted (commons)</option>
            <option value="onPremise">On-premise</option>
            <option value="computeOnly">Compute-only</option>
          </select>
        </div>
        <label className="row">
          <input type="checkbox" checked={gravity} onChange={(e) => setGravity(e.target.checked)} />
          Gravity-bound (compute-to-data required)
        </label>
        <label className="row" style={{ marginTop: 12 }}>
          <input
            type="checkbox"
            checked={personalData}
            onChange={(e) => setPersonalData(e.target.checked)}
          />
          Personal data — compliance tags required
        </label>
        <div className="row" style={{ marginTop: 20 }}>
          <button className="btn" type="submit">
            Publish
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => setMsg("Draft saved locally")}>
            Save draft
          </button>
        </div>
        {msg ? <p style={{ marginTop: 12 }}>{msg}</p> : null}
      </form>
    </section>
  );
}

export function LicencesPage() {
  const [licenceClass, setLicenceClass] = useState("priced");
  return (
    <section>
      <h1 className="page-title">Licence offers</h1>
      <p>Priced, commons, or compute-only with revoke/amend SLA.</p>
      <div className="panel">
        <LicenceClassPicker value={licenceClass} onChange={setLicenceClass} />
        <PortableOfferChip fronts={["Health EU", "AV Singapore"]} />
        <div className="row" style={{ marginTop: 16 }}>
          <button className="btn" type="button">
            Publish offer
          </button>
          <button className="btn btn-ghost" type="button">
            Amend
          </button>
          <button className="btn btn-ghost" type="button">
            Revoke new purchases
          </button>
        </div>
      </div>
    </section>
  );
}

export function DiscoveryPage() {
  const [filter, setFilter] = useState("all");
  return (
    <section>
      <h1 className="page-title">Buyer discovery</h1>
      <p>Search by sector, licence class, and compute-in-place vs download.</p>
      <div className="row">
        {["all", "priced", "commons", "computeOnly"].map((f) => (
          <button
            key={f}
            type="button"
            className={filter === f ? "btn" : "btn btn-ghost"}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="panel moor">
        <h3>Fleet telemetry · EU</h3>
        <GravityBadge bound />
        <TakeRateLine bps={150} />
        <div className="row" style={{ marginTop: 12 }}>
          <Link className="btn" to="/entitlements">
            Purchase
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EntitlementsPage() {
  const [blocked, setBlocked] = useState(false);
  return (
    <section>
      <h1 className="page-title">Purchase & entitlements</h1>
      <p>Checkout unlocks a time-boxed credential or schedules compute-to-data.</p>
      <PurposeGateBanner blocked={blocked} reason="Declared purpose outside lawful basis tags." />
      <div className="panel">
        <TakeRateLine bps={150} />
        <label className="row">
          <input type="checkbox" checked={blocked} onChange={(e) => setBlocked(e.target.checked)} />
          Simulate purpose mismatch
        </label>
        <div className="row" style={{ marginTop: 16 }}>
          <button className="btn" type="button" disabled={blocked}>
            Purchase
          </button>
        </div>
      </div>
      <EntitlementCredentialPanel hint="acr_••••••••" expiresAt={new Date(Date.now() + 864e5).toISOString()} />
    </section>
  );
}

export function ComputePage() {
  return (
    <section>
      <h1 className="page-title">Compute-to-data</h1>
      <p>Bring compute to heavy assets above the seller transferability threshold.</p>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Job</th>
              <th>Status</th>
              <th>Endpoint</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">cjd_demo</td>
              <td>queued</td>
              <td className="mono">vpc-endpoint://seller</td>
            </tr>
          </tbody>
        </table>
        <div className="row" style={{ marginTop: 16 }}>
          <button className="btn" type="button">
            Schedule job
          </button>
          <button className="btn btn-ghost" type="button">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export function KeepersPage() {
  return (
    <section>
      <h1 className="page-title">Keeper attestations</h1>
      <p>Availability and delivery proofs with clawback visibility.</p>
      <div className="panel">
        <KeeperPenaltyRow amount={250} currency="USD" reason="SLA miss on availability" />
      </div>
    </section>
  );
}

export function MarketplacePage() {
  return (
    <section>
      <h1 className="page-title">Marketplace fronts</h1>
      <p>Index shared offers into vertical catalogues — no silent markup.</p>
      <div className="panel">
        <h3>Health EU</h3>
        <TakeRateLine bps={200} />
        <PortableOfferChip fronts={["Health EU"]} />
      </div>
    </section>
  );
}

export function SettlementsPage() {
  return (
    <section>
      <h1 className="page-title">Settlements</h1>
      <p>Period statements tying purchases, refunds, and access to invoices.</p>
      <div className="panel">
        <SettlementStatementExport />
      </div>
    </section>
  );
}

export function CompliancePage() {
  return (
    <section>
      <h1 className="page-title">Compliance purpose gate</h1>
      <p>Lawful-basis and purpose tags; purchases that violate purpose are blocked.</p>
      <PurposeGateBanner blocked reason="Research use not permitted for this PD asset." />
    </section>
  );
}

export function ParticipantsPage() {
  return (
    <section>
      <h1 className="page-title">Participant registry</h1>
      <p>Vetted enterprise identities for dispute resolution.</p>
      <div className="panel">
        <button className="btn" type="button">
          Approve participant
        </button>
        <button className="btn btn-ghost" type="button" style={{ marginLeft: 8 }}>
          Suspend
        </button>
      </div>
    </section>
  );
}

export function CommonsPage() {
  return (
    <section>
      <h1 className="page-title">Commons curation</h1>
      <p>Keep free datasets visible and incentivised distinctly from priced supply.</p>
      <div className="panel moor">
        <span className="badge badge-licence">commons shelf</span>
        <p>Open-water listings sorted without crowding priced inventory.</p>
      </div>
    </section>
  );
}
