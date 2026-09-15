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
export type { components, operations };
export type Asset = components["schemas"]["Asset"];
export type AssetCreate = components["schemas"]["AssetCreate"];
export type AssetId = components["schemas"]["AssetId"];
export type AssetListData = components["schemas"]["AssetListData"];
export type AssetUpdate = components["schemas"]["AssetUpdate"];
export type PublishAssetRequestInput = NonNullable<operations["publishAsset"]["requestBody"]>["content"]["application/json"];
export type UpdateAssetRequestInput = NonNullable<operations["updateAsset"]["requestBody"]>["content"]["application/json"];
export type UpdateAssetRequest = UpdateAssetRequestInput;
export type ListAssetsParams = NonNullable<operations["listAssets"]["parameters"]["query"]>;
export type GetAssetParams = operations["getAsset"]["parameters"]["path"];
export type UpdateAssetParams = operations["updateAsset"]["parameters"]["path"];
export type ListAssetsResponse = operations["listAssets"]["responses"]["200"]["content"]["application/json"];
export type PublishAssetResponse = operations["publishAsset"]["responses"]["201"]["content"]["application/json"];
export type GetAssetResponse = operations["getAsset"]["responses"]["200"]["content"]["application/json"];
export type UpdateAssetResponse = operations["updateAsset"]["responses"]["200"]["content"]["application/json"];
//# sourceMappingURL=index.d.ts.map