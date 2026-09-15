import { Link } from "react-router-dom";

export function SellerHomePage() {
  return (
    <section>
      <h1 className="page-title">Seller home</h1>
      <p>Are portable offers selling — and is custody still yours?</p>
      <div className="panel row">
        <div>
          <h3>GMV (period)</h3>
          <p className="mono">—</p>
        </div>
        <div>
          <h3>Active entitlements</h3>
          <p className="mono">—</p>
        </div>
        <div>
          <h3>Offers on ≥2 fronts</h3>
          <p className="mono">—</p>
        </div>
      </div>
      <div className="row" style={{ marginTop: 24 }}>
        <Link className="btn" to="/assets/publish">
          Publish asset
        </Link>
        <Link className="btn btn-ghost" to="/licences">
          Amend licence
        </Link>
        <Link className="btn btn-ghost" to="/settlements">
          Open statement
        </Link>
      </div>
    </section>
  );
}

export function BuyerHomePage() {
  return (
    <section>
      <h1 className="page-title">Buyer home</h1>
      <p>Filter by licence class and compute-in-place before spending budget.</p>
      <Link className="btn" to="/discovery">
        Open discovery
      </Link>
    </section>
  );
}
