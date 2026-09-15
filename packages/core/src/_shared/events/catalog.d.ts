/**
 * Integration event type catalog — identity starter.
 * Extend in consumer repos when adding product domains.
 */
import { z } from 'zod';
export declare const IntegrationEventTypes: {
    readonly IDENTITY_API_KEY_CREATED: "identity.api-key.created";
    readonly IDENTITY_API_KEY_REVOKED: "identity.api-key.revoked";
    readonly IDENTITY_USER_CREATED: "identity.user.created";
    readonly IDENTITY_USER_DISABLED: "identity.user.disabled";
};
export type IntegrationEventType = (typeof IntegrationEventTypes)[keyof typeof IntegrationEventTypes];
export declare const ApiKeyCreatedPayloadSchema: z.ZodObject<{
    keyId: z.ZodString;
    tenantId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    keyId: string;
}, {
    tenantId: string;
    keyId: string;
}>;
export type ApiKeyCreatedPayload = z.infer<typeof ApiKeyCreatedPayloadSchema>;
//# sourceMappingURL=catalog.d.ts.map