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
export type { components, operations };
export type LicenceOffer = components["schemas"]["LicenceOffer"];
export type LicenceOfferAmend = components["schemas"]["LicenceOfferAmend"];
export type LicenceOfferCreate = components["schemas"]["LicenceOfferCreate"];
export type LicenceOfferId = components["schemas"]["LicenceOfferId"];
export type LicenceOfferListData = components["schemas"]["LicenceOfferListData"];
export type CreateLicenceOfferRequestInput = NonNullable<operations["createLicenceOffer"]["requestBody"]>["content"]["application/json"];
export type AmendLicenceOfferRequestInput = NonNullable<operations["amendLicenceOffer"]["requestBody"]>["content"]["application/json"];
export type ListLicenceOffersParams = NonNullable<operations["listLicenceOffers"]["parameters"]["query"]>;
export type GetLicenceOfferParams = operations["getLicenceOffer"]["parameters"]["path"];
export type AmendLicenceOfferParams = operations["amendLicenceOffer"]["parameters"]["path"];
export type RevokeLicenceOfferParams = operations["revokeLicenceOffer"]["parameters"]["path"];
export type ListLicenceOffersResponse = operations["listLicenceOffers"]["responses"]["200"]["content"]["application/json"];
export type CreateLicenceOfferResponse = operations["createLicenceOffer"]["responses"]["201"]["content"]["application/json"];
export type GetLicenceOfferResponse = operations["getLicenceOffer"]["responses"]["200"]["content"]["application/json"];
export type AmendLicenceOfferResponse = operations["amendLicenceOffer"]["responses"]["200"]["content"]["application/json"];
export type RevokeLicenceOfferResponse = operations["revokeLicenceOffer"]["responses"]["200"]["content"]["application/json"];
//# sourceMappingURL=index.d.ts.map