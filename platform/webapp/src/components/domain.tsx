export function GravityBadge({ bound }: { bound?: boolean }) {
  if (!bound) return null;
  return <span className="badge badge-gravity">gravity · compute-to-data</span>;
}

export function LicenceClassPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="field">
      <label htmlFor="licence-class">Licence class</label>
      <select
        id="licence-class"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="priced">Priced</option>
        <option value="commons">Commons</option>
        <option value="computeOnly">Compute-only</option>
      </select>
    </div>
  );
}

export function TakeRateLine({ bps }: { bps: number }) {
  return (
    <p className="mono">
      Marketplace take-rate: <strong>{(bps / 100).toFixed(2)}%</strong> (disclosed)
    </p>
  );
}

export function PurposeGateBanner({
  blocked,
  reason,
}: {
  blocked: boolean;
  reason?: string;
}) {
  if (!blocked) return null;
  return (
    <div className="panel block-flash badge-coral" role="alert" aria-live="assertive">
      <strong>Purchase blocked — purpose mismatch.</strong>
      {reason ? <p>{reason}</p> : null}
    </div>
  );
}

export function CustodyPointerField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="field">
      <label htmlFor="storage-pointer">Custody pointer (VPC / object store)</label>
      <input
        id="storage-pointer"
        className="mono"
        placeholder="s3://seller-bucket/… or vpc-endpoint://…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <p>Raw payload stays at the seller quay — Tidecove never requires central hosting.</p>
    </div>
  );
}

export function PortableOfferChip({ fronts }: { fronts: string[] }) {
  if (!fronts.length) return <span className="badge badge-harbour">not indexed yet</span>;
  return (
    <span className="badge badge-harbour">
      portable · {fronts.length} front{fronts.length === 1 ? "" : "s"}
    </span>
  );
}

export function KeeperPenaltyRow({
  amount,
  currency,
  reason,
}: {
  amount: number;
  currency: string;
  reason?: string;
}) {
  return (
    <div className="row">
      <span className="badge badge-coral">penalty</span>
      <span className="mono">
        {amount} {currency}
      </span>
      {reason ? <span>{reason}</span> : null}
    </div>
  );
}

export function EntitlementCredentialPanel({
  hint,
  expiresAt,
}: {
  hint?: string;
  expiresAt?: string;
}) {
  return (
    <div className="panel">
      <h3>Access credential</h3>
      <p className="mono">{hint || "credential pending"}</p>
      {expiresAt ? <p>Valid until {new Date(expiresAt).toLocaleString()}</p> : null}
    </div>
  );
}

export function SettlementStatementExport() {
  return (
    <button type="button" className="btn btn-ghost">
      Export audit period pack
    </button>
  );
}
