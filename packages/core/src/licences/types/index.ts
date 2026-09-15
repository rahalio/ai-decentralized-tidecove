/**
 * Licences Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/licences.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type LicenceOffer = components["schemas"]["LicenceOffer"];
export type LicenceOfferAmend = components["schemas"]["LicenceOfferAmend"];
export type LicenceOfferCreate = components["schemas"]["LicenceOfferCreate"];
export type LicenceOfferId = components["schemas"]["LicenceOfferId"];
export type LicenceOfferListData = components["schemas"]["LicenceOfferListData"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateLicenceOfferRequestInput = NonNullable<operations["createLicenceOffer"]["requestBody"]>["content"]["application/json"];
export type AmendLicenceOfferRequestInput = NonNullable<operations["amendLicenceOffer"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListLicenceOffersParams = NonNullable<operations["listLicenceOffers"]["parameters"]["query"]>;
export type GetLicenceOfferParams = operations["getLicenceOffer"]["parameters"]["path"];
export type AmendLicenceOfferParams = operations["amendLicenceOffer"]["parameters"]["path"];
export type RevokeLicenceOfferParams = operations["revokeLicenceOffer"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListLicenceOffersResponse = operations["listLicenceOffers"]["responses"]["200"]["content"]["application/json"];
export type CreateLicenceOfferResponse = operations["createLicenceOffer"]["responses"]["201"]["content"]["application/json"];
export type GetLicenceOfferResponse = operations["getLicenceOffer"]["responses"]["200"]["content"]["application/json"];
export type AmendLicenceOfferResponse = operations["amendLicenceOffer"]["responses"]["200"]["content"]["application/json"];
export type RevokeLicenceOfferResponse = operations["revokeLicenceOffer"]["responses"]["200"]["content"]["application/json"];


