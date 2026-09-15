import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createLicenceOffer_Body = z
  .object({
    assetId: z.string(),
    licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
    priceAmount: z.number().gte(0),
    currency: z.string(),
    purposeTags: z.array(z.string()).optional(),
    lawfulBasis: z.string().optional(),
    revokeSlaHours: z.number().int().optional(),
    grandfatherActiveEntitlements: z.boolean().optional(),
    marketplaceFrontIds: z.array(z.string()).optional(),
  })
  .passthrough();
const amendLicenceOffer_Body = z
  .object({
    priceAmount: z.number(),
    purposeTags: z.array(z.string()),
    lawfulBasis: z.string(),
    revokeSlaHours: z.number().int(),
    grandfatherActiveEntitlements: z.boolean(),
    marketplaceFrontIds: z.array(z.string()),
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
const LicenceOfferId = z.string();
const LicenceOffer = z
  .object({
    id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
    assetId: z.string(),
    licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
    priceAmount: z.number().gte(0),
    currency: z.string().min(3).max(3),
    purposeTags: z.array(z.string()).optional(),
    lawfulBasis: z.string().optional(),
    revokeSlaHours: z.number().int().gte(0).optional(),
    grandfatherActiveEntitlements: z.boolean().optional().default(true),
    marketplaceFrontIds: z.array(z.string()).optional(),
    status: z.enum(['active', 'amended', 'revoked']),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const LicenceOfferListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
          assetId: z.string(),
          licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
          priceAmount: z.number().gte(0),
          currency: z.string().min(3).max(3),
          purposeTags: z.array(z.string()).optional(),
          lawfulBasis: z.string().optional(),
          revokeSlaHours: z.number().int().gte(0).optional(),
          grandfatherActiveEntitlements: z.boolean().optional().default(true),
          marketplaceFrontIds: z.array(z.string()).optional(),
          status: z.enum(['active', 'amended', 'revoked']),
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
const LicenceOfferListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
              assetId: z.string(),
              licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
              priceAmount: z.number().gte(0),
              currency: z.string().min(3).max(3),
              purposeTags: z.array(z.string()).optional(),
              lawfulBasis: z.string().optional(),
              revokeSlaHours: z.number().int().gte(0).optional(),
              grandfatherActiveEntitlements: z
                .boolean()
                .optional()
                .default(true),
              marketplaceFrontIds: z.array(z.string()).optional(),
              status: z.enum(['active', 'amended', 'revoked']),
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
const LicenceOfferCreate = z
  .object({
    assetId: z.string(),
    licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
    priceAmount: z.number().gte(0),
    currency: z.string(),
    purposeTags: z.array(z.string()).optional(),
    lawfulBasis: z.string().optional(),
    revokeSlaHours: z.number().int().optional(),
    grandfatherActiveEntitlements: z.boolean().optional(),
    marketplaceFrontIds: z.array(z.string()).optional(),
  })
  .passthrough();
const LicenceOfferResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
        assetId: z.string(),
        licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
        priceAmount: z.number().gte(0),
        currency: z.string().min(3).max(3),
        purposeTags: z.array(z.string()).optional(),
        lawfulBasis: z.string().optional(),
        revokeSlaHours: z.number().int().gte(0).optional(),
        grandfatherActiveEntitlements: z.boolean().optional().default(true),
        marketplaceFrontIds: z.array(z.string()).optional(),
        status: z.enum(['active', 'amended', 'revoked']),
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
const LicenceOfferAmend = z
  .object({
    priceAmount: z.number(),
    purposeTags: z.array(z.string()),
    lawfulBasis: z.string(),
    revokeSlaHours: z.number().int(),
    grandfatherActiveEntitlements: z.boolean(),
    marketplaceFrontIds: z.array(z.string()),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  createLicenceOffer_Body,
  amendLicenceOffer_Body,
  Problem,
  LicenceOfferId,
  LicenceOffer,
  LicenceOfferListData,
  ResponseMeta,
  LicenceOfferListResponse,
  LicenceOfferCreate,
  LicenceOfferResponse,
  LicenceOfferAmend,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/licence-offers',
    alias: 'listLicenceOffers',
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
      {
        name: 'licenceClass',
        type: 'Query',
        schema: z.enum(['priced', 'commons', 'computeOnly']).optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['active', 'amended', 'revoked']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
                  assetId: z.string(),
                  licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
                  priceAmount: z.number().gte(0),
                  currency: z.string().min(3).max(3),
                  purposeTags: z.array(z.string()).optional(),
                  lawfulBasis: z.string().optional(),
                  revokeSlaHours: z.number().int().gte(0).optional(),
                  grandfatherActiveEntitlements: z
                    .boolean()
                    .optional()
                    .default(true),
                  marketplaceFrontIds: z.array(z.string()).optional(),
                  status: z.enum(['active', 'amended', 'revoked']),
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
    path: '/v1/licence-offers',
    alias: 'createLicenceOffer',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createLicenceOffer_Body,
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
            id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
            priceAmount: z.number().gte(0),
            currency: z.string().min(3).max(3),
            purposeTags: z.array(z.string()).optional(),
            lawfulBasis: z.string().optional(),
            revokeSlaHours: z.number().int().gte(0).optional(),
            grandfatherActiveEntitlements: z.boolean().optional().default(true),
            marketplaceFrontIds: z.array(z.string()).optional(),
            status: z.enum(['active', 'amended', 'revoked']),
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
    ],
  },
  {
    method: 'get',
    path: '/v1/licence-offers/:offerId',
    alias: 'getLicenceOffer',
    requestFormat: 'json',
    parameters: [
      {
        name: 'offerId',
        type: 'Path',
        schema: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
            priceAmount: z.number().gte(0),
            currency: z.string().min(3).max(3),
            purposeTags: z.array(z.string()).optional(),
            lawfulBasis: z.string().optional(),
            revokeSlaHours: z.number().int().gte(0).optional(),
            grandfatherActiveEntitlements: z.boolean().optional().default(true),
            marketplaceFrontIds: z.array(z.string()).optional(),
            status: z.enum(['active', 'amended', 'revoked']),
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
    path: '/v1/licence-offers/:offerId',
    alias: 'amendLicenceOffer',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: amendLicenceOffer_Body,
      },
      {
        name: 'offerId',
        type: 'Path',
        schema: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
            priceAmount: z.number().gte(0),
            currency: z.string().min(3).max(3),
            purposeTags: z.array(z.string()).optional(),
            lawfulBasis: z.string().optional(),
            revokeSlaHours: z.number().int().gte(0).optional(),
            grandfatherActiveEntitlements: z.boolean().optional().default(true),
            marketplaceFrontIds: z.array(z.string()).optional(),
            status: z.enum(['active', 'amended', 'revoked']),
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
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
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
    path: '/v1/licence-offers/:offerId/revoke',
    alias: 'revokeLicenceOffer',
    requestFormat: 'json',
    parameters: [
      {
        name: 'offerId',
        type: 'Path',
        schema: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
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
            id: z.string().regex(/^lic_[0-9a-hjkmnp-tv-z]{26}$/),
            assetId: z.string(),
            licenceClass: z.enum(['priced', 'commons', 'computeOnly']),
            priceAmount: z.number().gte(0),
            currency: z.string().min(3).max(3),
            purposeTags: z.array(z.string()).optional(),
            lawfulBasis: z.string().optional(),
            revokeSlaHours: z.number().int().gte(0).optional(),
            grandfatherActiveEntitlements: z.boolean().optional().default(true),
            marketplaceFrontIds: z.array(z.string()).optional(),
            status: z.enum(['active', 'amended', 'revoked']),
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
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
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
