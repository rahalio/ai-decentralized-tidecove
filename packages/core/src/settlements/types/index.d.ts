/**
 * Settlements Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */
import type { components, operations } from "../openapi/settlements.openapi.types";
export type { components, operations };
export type SettlementLineItem = components["schemas"]["SettlementLineItem"];
export type SettlementStatement = components["schemas"]["SettlementStatement"];
export type SettlementStatementCreate = components["schemas"]["SettlementStatementCreate"];
export type SettlementStatementId = components["schemas"]["SettlementStatementId"];
export type SettlementStatementListData = components["schemas"]["SettlementStatementListData"];
export type Settlement = operations["listSettlementStatements"]["responses"]["200"]["content"]["application/json"]["data"];
export type GenerateSettlementStatementRequestInput = NonNullable<operations["generateSettlementStatement"]["requestBody"]>["content"]["application/json"];
export type ListSettlementStatementsParams = NonNullable<operations["listSettlementStatements"]["parameters"]["query"]>;
export type GetSettlementStatementParams = operations["getSettlementStatement"]["parameters"]["path"];
export type ListSettlementStatementsResponse = operations["listSettlementStatements"]["responses"]["200"]["content"]["application/json"];
export type GenerateSettlementStatementResponse = operations["generateSettlementStatement"]["responses"]["201"]["content"]["application/json"];
export type GetSettlementStatementResponse = operations["getSettlementStatement"]["responses"]["200"]["content"]["application/json"];
//# sourceMappingURL=index.d.ts.map