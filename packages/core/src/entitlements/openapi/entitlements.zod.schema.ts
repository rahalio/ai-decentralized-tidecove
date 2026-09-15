import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const purchaseEntitlement_Body = z
  .object({
    offerId: z.string(),
    buyerParticipantId: z.string(),
    marketplaceFrontId: z.string().optional(),
    declaredPurpose: z.string(),
    validUntil: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const scheduleComputeJob_Body = z
  .object({ entitlementId: z.string(), sellerEndpoint: z.string().optional() })
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
const EntitlementId = z.string();
const Entitlement = z
  .object({
    id: z.string().regex(/^ent_[0-9a-hjkmnp-tv-z]{26}$/),
    offerId: z.string(),
    assetId: z.string().optional(),
    buyerParticipantId: z.string(),
    marketplaceFrontId: z.string().optional(),
    takeRateBps: z.number().int().gte(0).optional(),
    declaredPurpose: z.string().optional(),
    status: z.enum(['pending', 'active', 'revoked', 'expired', 'blocked']),
    validUntil: z.string().datetime({ offset: true }),
    accessCredentialId: z.string().optional(),
    computeJobId: z.string().optional(),
    purposeBlockReason: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const EntitlementListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^ent_[0-9a-hjkmnp-tv-z]{26}$/),
          offerId: z.string(),
          assetId: z.string().optional(),
          buyerParticipantId: z.string(),
          marketplaceFrontId: z.string().optional(),
          takeRateBps: z.number().int().gte(0).optional(),
          declaredPurpose: z.string().optional(),
          status: z.enum([
            'pending',
            'active',
            'revoked',
            'expired',
            'blocked',
          ]),
          validUntil: z.string().datetime({ offset: true }),
          accessCredentialId: z.string().optional(),
          computeJobId: z.string().optional(),
          purposeBlockReason: z.string().optional(),
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
const EntitlementListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^ent_[0-9a-hjkmnp-tv-z]{26}$/),
              offerId: z.string(),
              assetId: z.string().optional(),
              buyerParticipantId: z.string(),
              marketplaceFrontId: z.string().optional(),
              takeRateBps: z.number().int().gte(0).optional(),
              declaredPurpose: z.string().optional(),
              status: z.enum([
                'pending',
                'active',
                'revoked',
                'expired',
                'blocked',
              ]),
              validUntil: z.string().datetime({ offset: true }),
              accessCredentialId: z.string().optional(),
              computeJobId: z.string().optional(),
              purposeBlockReason: z.string().optional(),
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
const EntitlementCreate = z
  .object({
    offerId: z.string(),
    buyerParticipantId: z.string(),
    marketplaceFrontId: z.string().optional(),
    declaredPurpose: z.string(),
    validUntil: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const EntitlementResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^ent_[0-9a-hjkmnp-tv-z]{26}$/),
        offerId: z.string(),
        assetId: z.string().optional(),
        buyerParticipantId: z.string(),
        marketplaceFrontId: z.string().optional(),
        takeRateBps: z.number().int().gte(0).optional(),
        declaredPurpose: z.string().optional(),
        status: z.enum(['pending', 'active', 'revoked', 'expired', 'blocked']),
        validUntil: z.string().datetime({ offset: true }),
        accessCredentialId: z.string().optional(),
        computeJobId: z.string().optional(),
        purposeBlockReason: z.string().optional(),
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
const AccessCredentialId = z.string();
const AccessCredential = z
  .object({
    id: z.string().regex(/^acr_[0-9a-hjkmnp-tv-z]{26}$/),
    entitlementId: z.string(),
    tokenHint: z.string(),
    expiresAt: z.string().datetime({ offset: true }),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AccessCredentialResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^acr_[0-9a-hjkmnp-tv-z]{26}$/),
        entitlementId: z.string(),
        tokenHint: z.string(),
        expiresAt: z.string().datetime({ offset: true }),
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
const ComputeJobId = z.string();
const ComputeJob = z
  .object({
    id: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
    entitlementId: z.string(),
    assetId: z.string(),
    sellerEndpoint: z.string().optional(),
    status: z.enum(['queued', 'running', 'succeeded', 'failed', 'cancelled']),
    resultPointer: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ComputeJobListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
          entitlementId: z.string(),
          assetId: z.string(),
          sellerEndpoint: z.string().optional(),
          status: z.enum([
            'queued',
            'running',
            'succeeded',
            'failed',
            'cancelled',
          ]),
          resultPointer: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ComputeJobListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
              entitlementId: z.string(),
              assetId: z.string(),
              sellerEndpoint: z.string().optional(),
              status: z.enum([
                'queued',
                'running',
                'succeeded',
                'failed',
                'cancelled',
              ]),
              resultPointer: z.string().optional(),
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
const ComputeJobCreate = z
  .object({ entitlementId: z.string(), sellerEndpoint: z.string().optional() })
  .passthrough();
const ComputeJobResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
        entitlementId: z.string(),
        assetId: z.string(),
        sellerEndpoint: z.string().optional(),
        status: z.enum([
          'queued',
          'running',
          'succeeded',
          'failed',
          'cancelled',
        ]),
        resultPointer: z.string().optional(),
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
  purchaseEntitlement_Body,
  scheduleComputeJob_Body,
  Problem,
  EntitlementId,
  Entitlement,
  EntitlementListData,
  ResponseMeta,
  EntitlementListResponse,
  EntitlementCreate,
  EntitlementResponse,
  AccessCredentialId,
  AccessCredential,
  AccessCredentialResponse,
  ComputeJobId,
  ComputeJob,
  ComputeJobListData,
  ComputeJobListResponse,
  ComputeJobCreate,
  ComputeJobResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/access-credentials/:credentialId',
    alias: 'getAccessCredential',
    requestFormat: 'json',
    parameters: [
      {
        name: 'credentialId',
        type: 'Path',
        schema: z.string().regex(/^acr_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^acr_[0-9a-hjkmnp-tv-z]{26}$/),
            entitlementId: z.string(),
            tokenHint: z.string(),
            expiresAt: z.string().datetime({ offset: true }),
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
      {
        status: 404,
        description: `Resource not found`,
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
    path: '/v1/compute-jobs',
    alias: 'listComputeJobs',
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
                  id: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
                  entitlementId: z.string(),
                  assetId: z.string(),
                  sellerEndpoint: z.string().optional(),
                  status: z.enum([
                    'queued',
                    'running',
                    'succeeded',
                    'failed',
                    'cancelled',
                  ]),
                  resultPointer: z.string().optional(),
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
    path: '/v1/compute-jobs',
    alias: 'scheduleComputeJob',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: scheduleComputeJob_Body,
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
            id: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
            entitlementId: z.string(),
            assetId: z.string(),
            sellerEndpoint: z.string().optional(),
            status: z.enum([
              'queued',
              'running',
              'succeeded',
              'failed',
              'cancelled',
            ]),
            resultPointer: z.string().optional(),
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
    path: '/v1/compute-jobs/:jobId',
    alias: 'getComputeJob',
    requestFormat: 'json',
    parameters: [
      {
        name: 'jobId',
        type: 'Path',
        schema: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
            entitlementId: z.string(),
            assetId: z.string(),
            sellerEndpoint: z.string().optional(),
            status: z.enum([
              'queued',
              'running',
              'succeeded',
              'failed',
              'cancelled',
            ]),
            resultPointer: z.string().optional(),
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
      {
        status: 404,
        description: `Resource not found`,
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
    path: '/v1/compute-jobs/:jobId',
    alias: 'cancelComputeJob',
    requestFormat: 'json',
    parameters: [
      {
        name: 'jobId',
        type: 'Path',
        schema: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
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
            id: z.string().regex(/^cjd_[0-9a-hjkmnp-tv-z]{26}$/),
            entitlementId: z.string(),
            assetId: z.string(),
            sellerEndpoint: z.string().optional(),
            status: z.enum([
              'queued',
              'running',
              'succeeded',
              'failed',
              'cancelled',
            ]),
            resultPointer: z.string().optional(),
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
    path: '/v1/entitlements',
    alias: 'listEntitlements',
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
        name: 'buyerParticipantId',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum(['pending', 'active', 'revoked', 'expired', 'blocked'])
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string().regex(/^ent_[0-9a-hjkmnp-tv-z]{26}$/),
                  offerId: z.string(),
                  assetId: z.string().optional(),
                  buyerParticipantId: z.string(),
                  marketplaceFrontId: z.string().optional(),
                  takeRateBps: z.number().int().gte(0).optional(),
                  declaredPurpose: z.string().optional(),
                  status: z.enum([
                    'pending',
                    'active',
                    'revoked',
                    'expired',
                    'blocked',
                  ]),
                  validUntil: z.string().datetime({ offset: true }),
                  accessCredentialId: z.string().optional(),
                  computeJobId: z.string().optional(),
                  purposeBlockReason: z.string().optional(),
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
    path: '/v1/entitlements',
    alias: 'purchaseEntitlement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: purchaseEntitlement_Body,
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
            id: z.string().regex(/^ent_[0-9a-hjkmnp-tv-z]{26}$/),
            offerId: z.string(),
            assetId: z.string().optional(),
            buyerParticipantId: z.string(),
            marketplaceFrontId: z.string().optional(),
            takeRateBps: z.number().int().gte(0).optional(),
            declaredPurpose: z.string().optional(),
            status: z.enum([
              'pending',
              'active',
              'revoked',
              'expired',
              'blocked',
            ]),
            validUntil: z.string().datetime({ offset: true }),
            accessCredentialId: z.string().optional(),
            computeJobId: z.string().optional(),
            purposeBlockReason: z.string().optional(),
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
        status: 400,
        description: `Malformed request`,
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
      {
        status: 422,
        description: `Semantically invalid request (e.g. PACK_EMPTY)`,
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
    path: '/v1/entitlements/:entitlementId',
    alias: 'getEntitlement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'entitlementId',
        type: 'Path',
        schema: z.string().regex(/^ent_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^ent_[0-9a-hjkmnp-tv-z]{26}$/),
            offerId: z.string(),
            assetId: z.string().optional(),
            buyerParticipantId: z.string(),
            marketplaceFrontId: z.string().optional(),
            takeRateBps: z.number().int().gte(0).optional(),
            declaredPurpose: z.string().optional(),
            status: z.enum([
              'pending',
              'active',
              'revoked',
              'expired',
              'blocked',
            ]),
            validUntil: z.string().datetime({ offset: true }),
            accessCredentialId: z.string().optional(),
            computeJobId: z.string().optional(),
            purposeBlockReason: z.string().optional(),
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
      {
        status: 404,
        description: `Resource not found`,
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
