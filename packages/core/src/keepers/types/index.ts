/**
 * Keepers Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/keepers.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type KeeperAttestation = components["schemas"]["KeeperAttestation"];
export type KeeperAttestationCreate = components["schemas"]["KeeperAttestationCreate"];
export type KeeperAttestationId = components["schemas"]["KeeperAttestationId"];
export type KeeperAttestationListData = components["schemas"]["KeeperAttestationListData"];
export type KeeperPenalty = components["schemas"]["KeeperPenalty"];
export type KeeperPenaltyCreate = components["schemas"]["KeeperPenaltyCreate"];
export type KeeperPenaltyId = components["schemas"]["KeeperPenaltyId"];
export type KeeperPenaltyListData = components["schemas"]["KeeperPenaltyListData"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type SubmitKeeperAttestationRequestInput = NonNullable<operations["submitKeeperAttestation"]["requestBody"]>["content"]["application/json"];
export type CreateKeeperPenaltyRequestInput = NonNullable<operations["createKeeperPenalty"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListKeeperAttestationsParams = NonNullable<operations["listKeeperAttestations"]["parameters"]["query"]>;
export type ListKeeperPenaltiesParams = NonNullable<operations["listKeeperPenalties"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListKeeperAttestationsResponse = operations["listKeeperAttestations"]["responses"]["200"]["content"]["application/json"];
export type SubmitKeeperAttestationResponse = operations["submitKeeperAttestation"]["responses"]["201"]["content"]["application/json"];
export type ListKeeperPenaltiesResponse = operations["listKeeperPenalties"]["responses"]["200"]["content"]["application/json"];
export type CreateKeeperPenaltyResponse = operations["createKeeperPenalty"]["responses"]["201"]["content"]["application/json"];


