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
export type { components, operations };
export type KeeperAttestation = components["schemas"]["KeeperAttestation"];
export type KeeperAttestationCreate = components["schemas"]["KeeperAttestationCreate"];
export type KeeperAttestationId = components["schemas"]["KeeperAttestationId"];
export type KeeperAttestationListData = components["schemas"]["KeeperAttestationListData"];
export type KeeperPenalty = components["schemas"]["KeeperPenalty"];
export type KeeperPenaltyCreate = components["schemas"]["KeeperPenaltyCreate"];
export type KeeperPenaltyId = components["schemas"]["KeeperPenaltyId"];
export type KeeperPenaltyListData = components["schemas"]["KeeperPenaltyListData"];
export type SubmitKeeperAttestationRequestInput = NonNullable<operations["submitKeeperAttestation"]["requestBody"]>["content"]["application/json"];
export type CreateKeeperPenaltyRequestInput = NonNullable<operations["createKeeperPenalty"]["requestBody"]>["content"]["application/json"];
export type ListKeeperAttestationsParams = NonNullable<operations["listKeeperAttestations"]["parameters"]["query"]>;
export type ListKeeperPenaltiesParams = NonNullable<operations["listKeeperPenalties"]["parameters"]["query"]>;
export type ListKeeperAttestationsResponse = operations["listKeeperAttestations"]["responses"]["200"]["content"]["application/json"];
export type SubmitKeeperAttestationResponse = operations["submitKeeperAttestation"]["responses"]["201"]["content"]["application/json"];
export type ListKeeperPenaltiesResponse = operations["listKeeperPenalties"]["responses"]["200"]["content"]["application/json"];
export type CreateKeeperPenaltyResponse = operations["createKeeperPenalty"]["responses"]["201"]["content"]["application/json"];
//# sourceMappingURL=index.d.ts.map