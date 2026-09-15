import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const generateSettlementStatement_Body = z
  .object({
    participantId: z.string(),
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
    currency: z.string(),
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
const SettlementStatementId = z.string();
const SettlementLineItem = z
  .object({
    kind: z.enum([
      'purchase',
      'refund',
      'access',
      'marketplaceTakeRate',
      'keeperPenalty',
      'commonsIncentive',
    ]),
    referenceId: z.string().optional(),
    amount: z.number(),
    currency: z.string(),
    description: z.string().optional(),
  })
  .passthrough();
const SettlementStatement = z
  .object({
    id: z.string().regex(/^set_[0-9a-hjkmnp-tv-z]{26}$/),
    participantId: z.string(),
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
    currency: z.string(),
    netAmount: z.number(),
    lineItems: z
      .array(
        z
          .object({
            kind: z.enum([
              'purchase',
              'refund',
              'access',
              'marketplaceTakeRate',
              'keeperPenalty',
              'commonsIncentive',
            ]),
            referenceId: z.string().optional(),
            amount: z.number(),
            currency: z.string(),
            description: z.string().optional(),
          })
          .passthrough()
      )
      .optional(),
    exportUri: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const SettlementStatementListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^set_[0-9a-hjkmnp-tv-z]{26}$/),
          participantId: z.string(),
          periodStart: z.string().datetime({ offset: true }),
          periodEnd: z.string().datetime({ offset: true }),
          currency: z.string(),
          netAmount: z.number(),
          lineItems: z
            .array(
              z
                .object({
                  kind: z.enum([
                    'purchase',
                    'refund',
                    'access',
                    'marketplaceTakeRate',
                    'keeperPenalty',
                    'commonsIncentive',
                  ]),
                  referenceId: z.string().optional(),
                  amount: z.number(),
                  currency: z.string(),
                  description: z.string().optional(),
                })
                .passthrough()
            )
            .optional(),
          exportUri: z.string().optional(),
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
const SettlementStatementListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^set_[0-9a-hjkmnp-tv-z]{26}$/),
              participantId: z.string(),
              periodStart: z.string().datetime({ offset: true }),
              periodEnd: z.string().datetime({ offset: true }),
              currency: z.string(),
              netAmount: z.number(),
              lineItems: z
                .array(
                  z
                    .object({
                      kind: z.enum([
                        'purchase',
                        'refund',
                        'access',
                        'marketplaceTakeRate',
                        'keeperPenalty',
                        'commonsIncentive',
                      ]),
                      referenceId: z.string().optional(),
                      amount: z.number(),
                      currency: z.string(),
                      description: z.string().optional(),
                    })
                    .passthrough()
                )
                .optional(),
              exportUri: z.string().optional(),
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
const SettlementStatementCreate = z
  .object({
    participantId: z.string(),
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
    currency: z.string(),
  })
  .passthrough();
const SettlementStatementResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^set_[0-9a-hjkmnp-tv-z]{26}$/),
        participantId: z.string(),
        periodStart: z.string().datetime({ offset: true }),
        periodEnd: z.string().datetime({ offset: true }),
        currency: z.string(),
        netAmount: z.number(),
        lineItems: z
          .array(
            z
              .object({
                kind: z.enum([
                  'purchase',
                  'refund',
                  'access',
                  'marketplaceTakeRate',
                  'keeperPenalty',
                  'commonsIncentive',
                ]),
                referenceId: z.string().optional(),
                amount: z.number(),
                currency: z.string(),
                description: z.string().optional(),
              })
              .passthrough()
          )
          .optional(),
        exportUri: z.string().optional(),
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
  generateSettlementStatement_Body,
  Problem,
  SettlementStatementId,
  SettlementLineItem,
  SettlementStatement,
  SettlementStatementListData,
  ResponseMeta,
  SettlementStatementListResponse,
  SettlementStatementCreate,
  SettlementStatementResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/settlements',
    alias: 'listSettlementStatements',
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
        name: 'participantId',
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
                  id: z.string().regex(/^set_[0-9a-hjkmnp-tv-z]{26}$/),
                  participantId: z.string(),
                  periodStart: z.string().datetime({ offset: true }),
                  periodEnd: z.string().datetime({ offset: true }),
                  currency: z.string(),
                  netAmount: z.number(),
                  lineItems: z
                    .array(
                      z
                        .object({
                          kind: z.enum([
                            'purchase',
                            'refund',
                            'access',
                            'marketplaceTakeRate',
                            'keeperPenalty',
                            'commonsIncentive',
                          ]),
                          referenceId: z.string().optional(),
                          amount: z.number(),
                          currency: z.string(),
                          description: z.string().optional(),
                        })
                        .passthrough()
                    )
                    .optional(),
                  exportUri: z.string().optional(),
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
    path: '/v1/settlements',
    alias: 'generateSettlementStatement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: generateSettlementStatement_Body,
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
            id: z.string().regex(/^set_[0-9a-hjkmnp-tv-z]{26}$/),
            participantId: z.string(),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            currency: z.string(),
            netAmount: z.number(),
            lineItems: z
              .array(
                z
                  .object({
                    kind: z.enum([
                      'purchase',
                      'refund',
                      'access',
                      'marketplaceTakeRate',
                      'keeperPenalty',
                      'commonsIncentive',
                    ]),
                    referenceId: z.string().optional(),
                    amount: z.number(),
                    currency: z.string(),
                    description: z.string().optional(),
                  })
                  .passthrough()
              )
              .optional(),
            exportUri: z.string().optional(),
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
    path: '/v1/settlements/:statementId',
    alias: 'getSettlementStatement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'statementId',
        type: 'Path',
        schema: z.string().regex(/^set_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^set_[0-9a-hjkmnp-tv-z]{26}$/),
            participantId: z.string(),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            currency: z.string(),
            netAmount: z.number(),
            lineItems: z
              .array(
                z
                  .object({
                    kind: z.enum([
                      'purchase',
                      'refund',
                      'access',
                      'marketplaceTakeRate',
                      'keeperPenalty',
                      'commonsIncentive',
                    ]),
                    referenceId: z.string().optional(),
                    amount: z.number(),
                    currency: z.string(),
                    description: z.string().optional(),
                  })
                  .passthrough()
              )
              .optional(),
            exportUri: z.string().optional(),
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
