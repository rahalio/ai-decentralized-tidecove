/**
 * Entitlements Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */
import type { components, operations } from "../openapi/entitlements.openapi.types";
export type { components, operations };
export type AccessCredential = components["schemas"]["AccessCredential"];
export type AccessCredentialId = components["schemas"]["AccessCredentialId"];
export type ComputeJob = components["schemas"]["ComputeJob"];
export type ComputeJobCreate = components["schemas"]["ComputeJobCreate"];
export type ComputeJobId = components["schemas"]["ComputeJobId"];
export type ComputeJobListData = components["schemas"]["ComputeJobListData"];
export type Entitlement = components["schemas"]["Entitlement"];
export type EntitlementCreate = components["schemas"]["EntitlementCreate"];
export type EntitlementId = components["schemas"]["EntitlementId"];
export type EntitlementListData = components["schemas"]["EntitlementListData"];
export type PurchaseEntitlementRequestInput = NonNullable<operations["purchaseEntitlement"]["requestBody"]>["content"]["application/json"];
export type ScheduleComputeJobRequestInput = NonNullable<operations["scheduleComputeJob"]["requestBody"]>["content"]["application/json"];
export type ListEntitlementsParams = NonNullable<operations["listEntitlements"]["parameters"]["query"]>;
export type GetEntitlementParams = operations["getEntitlement"]["parameters"]["path"];
export type GetAccessCredentialParams = operations["getAccessCredential"]["parameters"]["path"];
export type ListComputeJobsParams = NonNullable<operations["listComputeJobs"]["parameters"]["query"]>;
export type GetComputeJobParams = operations["getComputeJob"]["parameters"]["path"];
export type CancelComputeJobParams = operations["cancelComputeJob"]["parameters"]["path"];
export type ListEntitlementsResponse = operations["listEntitlements"]["responses"]["200"]["content"]["application/json"];
export type PurchaseEntitlementResponse = operations["purchaseEntitlement"]["responses"]["201"]["content"]["application/json"];
export type GetEntitlementResponse = operations["getEntitlement"]["responses"]["200"]["content"]["application/json"];
export type GetAccessCredentialResponse = operations["getAccessCredential"]["responses"]["200"]["content"]["application/json"];
export type ListComputeJobsResponse = operations["listComputeJobs"]["responses"]["200"]["content"]["application/json"];
export type ScheduleComputeJobResponse = operations["scheduleComputeJob"]["responses"]["201"]["content"]["application/json"];
export type GetComputeJobResponse = operations["getComputeJob"]["responses"]["200"]["content"]["application/json"];
export type CancelComputeJobResponse = operations["cancelComputeJob"]["responses"]["200"]["content"]["application/json"];
//# sourceMappingURL=index.d.ts.map