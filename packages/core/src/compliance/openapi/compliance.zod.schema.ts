import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createComplianceTag_Body = z
  .object({
    assetId: z.string(),
    lawfulBasis: z.string(),
    purposeTags: z.array(z.string()),
    personalData: z.boolean().optional(),
  })
  .passthrough();
const updateComplianceTag_Body = z
  .object({
    lawfulBasis: z.string(),
    purposeTags: z.array(z.string()),
    diligencePackUri: z.string(),
  })
  .partial()
  .passthrough();
const evaluatePurposeGate_Body = z
  .object({
    assetId: z.string(),
    offerId: z.string().optional(),
    buyerParticipantId: z.string().optional(),
    declaredPurpose: z.string(),
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
const ComplianceTagId = z.string();
const ComplianceTag = z
  .object({
    id: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
    assetId: z.string(),
    lawfulBasis: z.string(),
    purposeTags: z.array(z.string()),
    personalData: z.boolean().optional().default(true),
    diligencePackUri: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ComplianceTagListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
          assetId: z.string(),
          lawfulBasis: z.string(),
          purposeTags: z.array(z.string()),
          personalData: z.boolean().optional().default(true),
          diligencePackUri: z.string().optional(),
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
const ComplianceTagListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
              assetId: z.string(),
              lawfulBasis: z.string(),
              purposeTags: z.array(z.string()),
              personalData: z.boolean().optional().default(true),
              diligencePackUri: z.string().optional(),
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
const ComplianceTagCreate = z
  .object({
    assetId: z.string(),
    lawfulBasis: z.string(),
    purposeTags: z.array(z.string()),
    personalData: z.boolean().optional(),
  })
  .passthrough();
const ComplianceTagResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
        assetId: z.string(),
        lawfulBasis: z.string(),
        purposeTags: z.array(z.string()),
        personalData: z.boolean().optional().default(true),
        diligencePackUri: z.string().optional(),
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
const ComplianceTagUpdate = z
  .object({
    lawfulBasis: z.string(),
    purposeTags: z.array(z.string()),
    diligencePackUri: z.string(),
  })
  .partial()
  .passthrough();
const PurposeGateEvaluateRequest = z
  .object({
    assetId: z.string(),
    offerId: z.string().optional(),
    buyerParticipantId: z.string().optional(),
    declaredPurpose: z.string(),
  })
  .passthrough();
const PurposeGateDecisionId = z.string();
const PurposeGateDecision = z
  .object({
    id: z.string().regex(/^pgd_[0-9a-hjkmnp-tv-z]{26}$/),
    assetId: z.string(),
    offerId: z.string().optional(),
    buyerParticipantId: z.string().optional(),
    declaredPurpose: z.string(),
    allowed: z.boolean(),
    blockReason: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const PurposeGateDecisionResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^pgd_[0-9a-hjkmnp-tv-z]{26}$/),
        assetId: z.string(),
        offerId: z.string().optional(),
        buyerParticipantId: z.string().optional(),
        declaredPurpose: z.string(),
        allowed: z.boolean(),
        blockReason: z.string().optional(),
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
const PurposeGateDecisionListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^pgd_[0-9a-hjkmnp-tv-z]{26}$/),
          assetId: z.string(),
          offerId: z.string().optional(),
          buyerParticipantId: z.string().optional(),
          declaredPurpose: z.string(),
          allowed: z.boolean(),
          blockReason: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const PurposeGateDecisionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^pgd_[0-9a-hjkmnp-tv-z]{26}$/),
              assetId: z.string(),
              offerId: z.string().optional(),
              buyerParticipantId: z.string().optional(),
              declaredPurpose: z.string(),
              allowed: z.boolean(),
              blockReason: z.string().optional(),
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

export const schemas: any = {
  createComplianceTag_Body,
  updateComplianceTag_Body,
  evaluatePurposeGate_Body,
  Problem,
  ComplianceTagId,
  ComplianceTag,
  ComplianceTagListData,
  ResponseMeta,
  ComplianceTagListResponse,
  ComplianceTagCreate,
  ComplianceTagResponse,
  ComplianceTagUpdate,
  PurposeGateEvaluateRequest,
  PurposeGateDecisionId,
  PurposeGateDecision,
  PurposeGateDecisionResponse,
  PurposeGateDecisionListData,
  PurposeGateDecisionListResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/compliance-tags',
    alias: 'listComplianceTags',
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
                  id: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
                  assetId: z.string(),
                  lawfulBasis: z.string(),
                  purposeTags: z.array(z.string()),
                  personalData: z.boolean().optional().default(true),
                  diligencePackUri: z.string().optional(),
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
    path: '/v1/compliance-tags',
    alias: 'createComplianceTag',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createComplianceTag_Body,
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
            id: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            lawfulBasis: z.string(),
            purposeTags: z.array(z.string()),
            personalData: z.boolean().optional().default(true),
            diligencePackUri: z.string().optional(),
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
    path: '/v1/compliance-tags/:tagId',
    alias: 'getComplianceTag',
    requestFormat: 'json',
    parameters: [
      {
        name: 'tagId',
        type: 'Path',
        schema: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            lawfulBasis: z.string(),
            purposeTags: z.array(z.string()),
            personalData: z.boolean().optional().default(true),
            diligencePackUri: z.string().optional(),
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
    method: 'patch',
    path: '/v1/compliance-tags/:tagId',
    alias: 'updateComplianceTag',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateComplianceTag_Body,
      },
      {
        name: 'tagId',
        type: 'Path',
        schema: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^cmp_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            lawfulBasis: z.string(),
            purposeTags: z.array(z.string()),
            personalData: z.boolean().optional().default(true),
            diligencePackUri: z.string().optional(),
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
    path: '/v1/purpose-gate/decisions',
    alias: 'listPurposeGateDecisions',
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
                  id: z.string().regex(/^pgd_[0-9a-hjkmnp-tv-z]{26}$/),
                  assetId: z.string(),
                  offerId: z.string().optional(),
                  buyerParticipantId: z.string().optional(),
                  declaredPurpose: z.string(),
                  allowed: z.boolean(),
                  blockReason: z.string().optional(),
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
    path: '/v1/purpose-gate/evaluate',
    alias: 'evaluatePurposeGate',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: evaluatePurposeGate_Body,
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
            id: z.string().regex(/^pgd_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            offerId: z.string().optional(),
            buyerParticipantId: z.string().optional(),
            declaredPurpose: z.string(),
            allowed: z.boolean(),
            blockReason: z.string().optional(),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
