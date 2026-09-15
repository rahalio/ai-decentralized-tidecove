/**
 * Postman-collection 1:1 Vitest tests for compliance (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  assetId: "",
  cursor: "",
  limit: "",
  tagId: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / compliance (1:1 generated)", () => {

  it("listComplianceTags", async () => {
    const url = sub("{{baseUrl}}/v1/compliance-tags?cursor={{cursor}}&limit={{limit}}&assetId={{assetId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("createComplianceTag", async () => {
    const url = sub("{{baseUrl}}/v1/compliance-tags");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"assetId\": \"newman_assetId\",\n  \"lawfulBasis\": \"\",\n  \"purposeTags\": null,\n  \"personalData\": false\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['complianceTagId'] = j.data.id;
  });

  it("getComplianceTag", async () => {
    const url = sub("{{baseUrl}}/v1/compliance-tags/{{tagId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("updateComplianceTag", async () => {
    const url = sub("{{baseUrl}}/v1/compliance-tags/{{tagId}}");
    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"lawfulBasis\": \"\",\n  \"purposeTags\": null,\n  \"diligencePackUri\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("evaluatePurposeGate", async () => {
    const url = sub("{{baseUrl}}/v1/purpose-gate/evaluate");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"assetId\": \"newman_assetId\",\n  \"offerId\": \"newman_offerId\",\n  \"buyerParticipantId\": \"newman_buyerParticipantId\",\n  \"declaredPurpose\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("listPurposeGateDecisions", async () => {
    const url = sub("{{baseUrl}}/v1/purpose-gate/decisions?cursor={{cursor}}&limit={{limit}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });
});
