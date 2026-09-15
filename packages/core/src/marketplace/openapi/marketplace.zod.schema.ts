import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const registerMarketplaceFront_Body = z
  .object({
    name: z.string(),
    vertical: z.string().optional(),
    takeRateBps: z.number().int().gte(0).lte(10000),
    fiatOnRampEnabled: z.boolean().optional(),
    indexedOfferIds: z.array(z.string()).optional(),
  })
  .passthrough();
const updateMarketplaceFront_Body = z
  .object({
    name: z.string(),
    vertical: z.string(),
    takeRateBps: z.number().int(),
    fiatOnRampEnabled: z.boolean(),
    indexedOfferIds: z.array(z.string()),
    status: z.enum(['active', 'suspended']),
  })
  .partial()
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
const MarketplaceFrontId = z.string();
const MarketplaceFront = z
  .object({
    id: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
    name: z.string(),
    vertical: z.string().optional(),
    takeRateBps: z.number().int().gte(0).lte(10000),
    fiatOnRampEnabled: z.boolean().optional().default(true),
    indexedOfferIds: z.array(z.string()).optional(),
    status: z.enum(['active', 'suspended']),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const MarketplaceFrontListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
          name: z.string(),
          vertical: z.string().optional(),
          takeRateBps: z.number().int().gte(0).lte(10000),
          fiatOnRampEnabled: z.boolean().optional().default(true),
          indexedOfferIds: z.array(z.string()).optional(),
          status: z.enum(['active', 'suspended']),
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
const MarketplaceFrontListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
              name: z.string(),
              vertical: z.string().optional(),
              takeRateBps: z.number().int().gte(0).lte(10000),
              fiatOnRampEnabled: z.boolean().optional().default(true),
              indexedOfferIds: z.array(z.string()).optional(),
              status: z.enum(['active', 'suspended']),
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
const MarketplaceFrontCreate = z
  .object({
    name: z.string(),
    vertical: z.string().optional(),
    takeRateBps: z.number().int().gte(0).lte(10000),
    fiatOnRampEnabled: z.boolean().optional(),
    indexedOfferIds: z.array(z.string()).optional(),
  })
  .passthrough();
const MarketplaceFrontResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
        name: z.string(),
        vertical: z.string().optional(),
        takeRateBps: z.number().int().gte(0).lte(10000),
        fiatOnRampEnabled: z.boolean().optional().default(true),
        indexedOfferIds: z.array(z.string()).optional(),
        status: z.enum(['active', 'suspended']),
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
const MarketplaceFrontUpdate = z
  .object({
    name: z.string(),
    vertical: z.string(),
    takeRateBps: z.number().int(),
    fiatOnRampEnabled: z.boolean(),
    indexedOfferIds: z.array(z.string()),
    status: z.enum(['active', 'suspended']),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  registerMarketplaceFront_Body,
  updateMarketplaceFront_Body,
  Problem,
  MarketplaceFrontId,
  MarketplaceFront,
  MarketplaceFrontListData,
  ResponseMeta,
  MarketplaceFrontListResponse,
  MarketplaceFrontCreate,
  MarketplaceFrontResponse,
  MarketplaceFrontUpdate,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/marketplace-fronts',
    alias: 'listMarketplaceFronts',
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
                  id: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
                  name: z.string(),
                  vertical: z.string().optional(),
                  takeRateBps: z.number().int().gte(0).lte(10000),
                  fiatOnRampEnabled: z.boolean().optional().default(true),
                  indexedOfferIds: z.array(z.string()).optional(),
                  status: z.enum(['active', 'suspended']),
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
    path: '/v1/marketplace-fronts',
    alias: 'registerMarketplaceFront',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: registerMarketplaceFront_Body,
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
            id: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
            name: z.string(),
            vertical: z.string().optional(),
            takeRateBps: z.number().int().gte(0).lte(10000),
            fiatOnRampEnabled: z.boolean().optional().default(true),
            indexedOfferIds: z.array(z.string()).optional(),
            status: z.enum(['active', 'suspended']),
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
    path: '/v1/marketplace-fronts/:frontId',
    alias: 'getMarketplaceFront',
    requestFormat: 'json',
    parameters: [
      {
        name: 'frontId',
        type: 'Path',
        schema: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
            name: z.string(),
            vertical: z.string().optional(),
            takeRateBps: z.number().int().gte(0).lte(10000),
            fiatOnRampEnabled: z.boolean().optional().default(true),
            indexedOfferIds: z.array(z.string()).optional(),
            status: z.enum(['active', 'suspended']),
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
    path: '/v1/marketplace-fronts/:frontId',
    alias: 'updateMarketplaceFront',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateMarketplaceFront_Body,
      },
      {
        name: 'frontId',
        type: 'Path',
        schema: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^mkt_[0-9a-hjkmnp-tv-z]{26}$/),
            name: z.string(),
            vertical: z.string().optional(),
            takeRateBps: z.number().int().gte(0).lte(10000),
            fiatOnRampEnabled: z.boolean().optional().default(true),
            indexedOfferIds: z.array(z.string()).optional(),
            status: z.enum(['active', 'suspended']),
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
