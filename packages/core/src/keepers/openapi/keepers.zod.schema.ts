import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const submitKeeperAttestation_Body = z
  .object({
    assetId: z.string(),
    entitlementId: z.string().optional(),
    keeperParticipantId: z.string(),
    attestationType: z.enum(['availability', 'delivery']),
    accepted: z.boolean(),
    observedAt: z.string().datetime({ offset: true }).optional(),
    slaMet: z.boolean().optional(),
  })
  .passthrough();
const createKeeperPenalty_Body = z
  .object({
    keeperParticipantId: z.string(),
    attestationId: z.string(),
    amount: z.number(),
    currency: z.string(),
    reason: z.string().optional(),
  })
  .passthrough();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const KeeperAttestationId = z.string();
const KeeperAttestation = z
  .object({
    id: z.string().regex(/^kpr_[0-9a-hjkmnp-tv-z]{26}$/),
    assetId: z.string(),
    entitlementId: z.string().optional(),
    keeperParticipantId: z.string(),
    attestationType: z.enum(['availability', 'delivery']),
    accepted: z.boolean(),
    observedAt: z.string().datetime({ offset: true }).optional(),
    slaMet: z.boolean().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const KeeperAttestationListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^kpr_[0-9a-hjkmnp-tv-z]{26}$/),
          assetId: z.string(),
          entitlementId: z.string().optional(),
          keeperParticipantId: z.string(),
          attestationType: z.enum(['availability', 'delivery']),
          accepted: z.boolean(),
          observedAt: z.string().datetime({ offset: true }).optional(),
          slaMet: z.boolean().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const KeeperAttestationListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^kpr_[0-9a-hjkmnp-tv-z]{26}$/),
              assetId: z.string(),
              entitlementId: z.string().optional(),
              keeperParticipantId: z.string(),
              attestationType: z.enum(['availability', 'delivery']),
              accepted: z.boolean(),
              observedAt: z.string().datetime({ offset: true }).optional(),
              slaMet: z.boolean().optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const KeeperAttestationCreate = z
  .object({
    assetId: z.string(),
    entitlementId: z.string().optional(),
    keeperParticipantId: z.string(),
    attestationType: z.enum(['availability', 'delivery']),
    accepted: z.boolean(),
    observedAt: z.string().datetime({ offset: true }).optional(),
    slaMet: z.boolean().optional(),
  })
  .passthrough();
const KeeperAttestationResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^kpr_[0-9a-hjkmnp-tv-z]{26}$/),
        assetId: z.string(),
        entitlementId: z.string().optional(),
        keeperParticipantId: z.string(),
        attestationType: z.enum(['availability', 'delivery']),
        accepted: z.boolean(),
        observedAt: z.string().datetime({ offset: true }).optional(),
        slaMet: z.boolean().optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const KeeperPenaltyId = z.string();
const KeeperPenalty = z
  .object({
    id: z.string().regex(/^kpp_[0-9a-hjkmnp-tv-z]{26}$/),
    keeperParticipantId: z.string(),
    attestationId: z.string(),
    amount: z.number(),
    currency: z.string(),
    reason: z.string().optional(),
    visibleToCounterparties: z.boolean().optional().default(true),
    status: z.enum(['open', 'applied', 'waived', 'disputed']),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const KeeperPenaltyListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^kpp_[0-9a-hjkmnp-tv-z]{26}$/),
          keeperParticipantId: z.string(),
          attestationId: z.string(),
          amount: z.number(),
          currency: z.string(),
          reason: z.string().optional(),
          visibleToCounterparties: z.boolean().optional().default(true),
          status: z.enum(['open', 'applied', 'waived', 'disputed']),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const KeeperPenaltyListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^kpp_[0-9a-hjkmnp-tv-z]{26}$/),
              keeperParticipantId: z.string(),
              attestationId: z.string(),
              amount: z.number(),
              currency: z.string(),
              reason: z.string().optional(),
              visibleToCounterparties: z.boolean().optional().default(true),
              status: z.enum(['open', 'applied', 'waived', 'disputed']),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const KeeperPenaltyCreate = z
  .object({
    keeperParticipantId: z.string(),
    attestationId: z.string(),
    amount: z.number(),
    currency: z.string(),
    reason: z.string().optional(),
  })
  .passthrough();
const KeeperPenaltyResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^kpp_[0-9a-hjkmnp-tv-z]{26}$/),
        keeperParticipantId: z.string(),
        attestationId: z.string(),
        amount: z.number(),
        currency: z.string(),
        reason: z.string().optional(),
        visibleToCounterparties: z.boolean().optional().default(true),
        status: z.enum(['open', 'applied', 'waived', 'disputed']),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();

export const schemas: any = {
  submitKeeperAttestation_Body,
  createKeeperPenalty_Body,
  Problem,
  KeeperAttestationId,
  KeeperAttestation,
  KeeperAttestationListData,
  ResponseMeta,
  KeeperAttestationListResponse,
  KeeperAttestationCreate,
  KeeperAttestationResponse,
  KeeperPenaltyId,
  KeeperPenalty,
  KeeperPenaltyListData,
  KeeperPenaltyListResponse,
  KeeperPenaltyCreate,
  KeeperPenaltyResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/keeper-attestations',
    alias: 'listKeeperAttestations',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
      {
        name: 'assetId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string().regex(/^kpr_[0-9a-hjkmnp-tv-z]{26}$/),
                  assetId: z.string(),
                  entitlementId: z.string().optional(),
                  keeperParticipantId: z.string(),
                  attestationType: z.enum(['availability', 'delivery']),
                  accepted: z.boolean(),
                  observedAt: z.string().datetime({ offset: true }).optional(),
                  slaMet: z.boolean().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/keeper-attestations',
    alias: 'submitKeeperAttestation',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: submitKeeperAttestation_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^kpr_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            entitlementId: z.string().optional(),
            keeperParticipantId: z.string(),
            attestationType: z.enum(['availability', 'delivery']),
            accepted: z.boolean(),
            observedAt: z.string().datetime({ offset: true }).optional(),
            slaMet: z.boolean().optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/keeper-penalties',
    alias: 'listKeeperPenalties',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string().regex(/^kpp_[0-9a-hjkmnp-tv-z]{26}$/),
                  keeperParticipantId: z.string(),
                  attestationId: z.string(),
                  amount: z.number(),
                  currency: z.string(),
                  reason: z.string().optional(),
                  visibleToCounterparties: z.boolean().optional().default(true),
                  status: z.enum(['open', 'applied', 'waived', 'disputed']),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/keeper-penalties',
    alias: 'createKeeperPenalty',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createKeeperPenalty_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^kpp_[0-9a-hjkmnp-tv-z]{26}$/),
            keeperParticipantId: z.string(),
            attestationId: z.string(),
            amount: z.number(),
            currency: z.string(),
            reason: z.string().optional(),
            visibleToCounterparties: z.boolean().optional().default(true),
            status: z.enum(['open', 'applied', 'waived', 'disputed']),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
