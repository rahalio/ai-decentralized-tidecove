/**
 * Marketplace Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */
import type { components, operations } from "../openapi/marketplace.openapi.types";
export type { components, operations };
export type MarketplaceFront = components["schemas"]["MarketplaceFront"];
export type MarketplaceFrontCreate = components["schemas"]["MarketplaceFrontCreate"];
export type MarketplaceFrontId = components["schemas"]["MarketplaceFrontId"];
export type MarketplaceFrontListData = components["schemas"]["MarketplaceFrontListData"];
export type MarketplaceFrontUpdate = components["schemas"]["MarketplaceFrontUpdate"];
export type RegisterMarketplaceFrontRequestInput = NonNullable<operations["registerMarketplaceFront"]["requestBody"]>["content"]["application/json"];
export type UpdateMarketplaceFrontRequestInput = NonNullable<operations["updateMarketplaceFront"]["requestBody"]>["content"]["application/json"];
export type UpdateMarketplaceFrontRequest = UpdateMarketplaceFrontRequestInput;
export type ListMarketplaceFrontsParams = NonNullable<operations["listMarketplaceFronts"]["parameters"]["query"]>;
export type GetMarketplaceFrontParams = operations["getMarketplaceFront"]["parameters"]["path"];
export type UpdateMarketplaceFrontParams = operations["updateMarketplaceFront"]["parameters"]["path"];
export type ListMarketplaceFrontsResponse = operations["listMarketplaceFronts"]["responses"]["200"]["content"]["application/json"];
export type RegisterMarketplaceFrontResponse = operations["registerMarketplaceFront"]["responses"]["201"]["content"]["application/json"];
export type GetMarketplaceFrontResponse = operations["getMarketplaceFront"]["responses"]["200"]["content"]["application/json"];
export type UpdateMarketplaceFrontResponse = operations["updateMarketplaceFront"]["responses"]["200"]["content"]["application/json"];
//# sourceMappingURL=index.d.ts.map