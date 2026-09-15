/**
 * Assets Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/assets.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type Asset = components["schemas"]["Asset"];
export type AssetCreate = components["schemas"]["AssetCreate"];
export type AssetId = components["schemas"]["AssetId"];
export type AssetListData = components["schemas"]["AssetListData"];
export type AssetUpdate = components["schemas"]["AssetUpdate"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type PublishAssetRequestInput = NonNullable<operations["publishAsset"]["requestBody"]>["content"]["application/json"];
export type UpdateAssetRequestInput = NonNullable<operations["updateAsset"]["requestBody"]>["content"]["application/json"];
export type UpdateAssetRequest = UpdateAssetRequestInput;


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAssetsParams = NonNullable<operations["listAssets"]["parameters"]["query"]>;
export type GetAssetParams = operations["getAsset"]["parameters"]["path"];
export type UpdateAssetParams = operations["updateAsset"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAssetsResponse = operations["listAssets"]["responses"]["200"]["content"]["application/json"];
export type PublishAssetResponse = operations["publishAsset"]["responses"]["201"]["content"]["application/json"];
export type GetAssetResponse = operations["getAsset"]["responses"]["200"]["content"]["application/json"];
export type UpdateAssetResponse = operations["updateAsset"]["responses"]["200"]["content"]["application/json"];


