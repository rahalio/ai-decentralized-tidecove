/**
 * Compliance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/compliance.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ComplianceTag = components["schemas"]["ComplianceTag"];
export type ComplianceTagCreate = components["schemas"]["ComplianceTagCreate"];
export type ComplianceTagId = components["schemas"]["ComplianceTagId"];
export type ComplianceTagListData = components["schemas"]["ComplianceTagListData"];
export type ComplianceTagUpdate = components["schemas"]["ComplianceTagUpdate"];
export type PurposeGateDecision = components["schemas"]["PurposeGateDecision"];
export type PurposeGateDecisionId = components["schemas"]["PurposeGateDecisionId"];
export type PurposeGateDecisionListData = components["schemas"]["PurposeGateDecisionListData"];
export type PurposeGateEvaluateRequest = components["schemas"]["PurposeGateEvaluateRequest"];
export type Decision = operations["listPurposeGateDecisions"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateComplianceTagRequestInput = NonNullable<operations["createComplianceTag"]["requestBody"]>["content"]["application/json"];
export type UpdateComplianceTagRequestInput = NonNullable<operations["updateComplianceTag"]["requestBody"]>["content"]["application/json"];
export type UpdateComplianceTagRequest = UpdateComplianceTagRequestInput;
export type EvaluatePurposeGateRequestInput = NonNullable<operations["evaluatePurposeGate"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListComplianceTagsParams = NonNullable<operations["listComplianceTags"]["parameters"]["query"]>;
export type GetComplianceTagParams = operations["getComplianceTag"]["parameters"]["path"];
export type UpdateComplianceTagParams = operations["updateComplianceTag"]["parameters"]["path"];
export type ListPurposeGateDecisionsParams = NonNullable<operations["listPurposeGateDecisions"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListComplianceTagsResponse = operations["listComplianceTags"]["responses"]["200"]["content"]["application/json"];
export type CreateComplianceTagResponse = operations["createComplianceTag"]["responses"]["201"]["content"]["application/json"];
export type GetComplianceTagResponse = operations["getComplianceTag"]["responses"]["200"]["content"]["application/json"];
export type UpdateComplianceTagResponse = operations["updateComplianceTag"]["responses"]["200"]["content"]["application/json"];
export type EvaluatePurposeGateResponse = operations["evaluatePurposeGate"]["responses"]["200"]["content"]["application/json"];
export type ListPurposeGateDecisionsResponse = operations["listPurposeGateDecisions"]["responses"]["200"]["content"]["application/json"];


