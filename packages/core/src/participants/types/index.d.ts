/**
 * Participants Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */
import type { components, operations } from "../openapi/participants.openapi.types";
export type { components, operations };
export type Dispute = components["schemas"]["Dispute"];
export type DisputeCreate = components["schemas"]["DisputeCreate"];
export type DisputeId = components["schemas"]["DisputeId"];
export type DisputeListData = components["schemas"]["DisputeListData"];
export type DisputeResolve = components["schemas"]["DisputeResolve"];
export type Participant = components["schemas"]["Participant"];
export type ParticipantCreate = components["schemas"]["ParticipantCreate"];
export type ParticipantId = components["schemas"]["ParticipantId"];
export type ParticipantListData = components["schemas"]["ParticipantListData"];
export type ParticipantUpdate = components["schemas"]["ParticipantUpdate"];
export type RegisterParticipantRequestInput = NonNullable<operations["registerParticipant"]["requestBody"]>["content"]["application/json"];
export type UpdateParticipantRequestInput = NonNullable<operations["updateParticipant"]["requestBody"]>["content"]["application/json"];
export type UpdateParticipantRequest = UpdateParticipantRequestInput;
export type OpenDisputeRequestInput = NonNullable<operations["openDispute"]["requestBody"]>["content"]["application/json"];
export type ResolveDisputeRequestInput = NonNullable<operations["resolveDispute"]["requestBody"]>["content"]["application/json"];
export type ListParticipantsParams = NonNullable<operations["listParticipants"]["parameters"]["query"]>;
export type GetParticipantParams = operations["getParticipant"]["parameters"]["path"];
export type UpdateParticipantParams = operations["updateParticipant"]["parameters"]["path"];
export type SuspendParticipantParams = operations["suspendParticipant"]["parameters"]["path"];
export type ListDisputesParams = NonNullable<operations["listDisputes"]["parameters"]["query"]>;
export type ResolveDisputeParams = operations["resolveDispute"]["parameters"]["path"];
export type ListParticipantsResponse = operations["listParticipants"]["responses"]["200"]["content"]["application/json"];
export type RegisterParticipantResponse = operations["registerParticipant"]["responses"]["201"]["content"]["application/json"];
export type GetParticipantResponse = operations["getParticipant"]["responses"]["200"]["content"]["application/json"];
export type UpdateParticipantResponse = operations["updateParticipant"]["responses"]["200"]["content"]["application/json"];
export type SuspendParticipantResponse = operations["suspendParticipant"]["responses"]["200"]["content"]["application/json"];
export type ListDisputesResponse = operations["listDisputes"]["responses"]["200"]["content"]["application/json"];
export type OpenDisputeResponse = operations["openDispute"]["responses"]["201"]["content"]["application/json"];
export type ResolveDisputeResponse = operations["resolveDispute"]["responses"]["200"]["content"]["application/json"];
//# sourceMappingURL=index.d.ts.map