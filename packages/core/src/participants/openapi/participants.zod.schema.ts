import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const registerParticipant_Body = z
  .object({
    displayName: z.string(),
    legalName: z.string().optional(),
    role: z.enum([
      'seller',
      'buyer',
      'marketplaceOperator',
      'keeper',
      'masher',
      'auditor',
      'platform',
    ]),
    jurisdiction: z.string().optional(),
    disputeContactEmail: z.string().email().optional(),
  })
  .passthrough();
const updateParticipant_Body = z
  .object({
    displayName: z.string(),
    legalName: z.string(),
    jurisdiction: z.string(),
    vettingStatus: z.enum(['unvetted', 'pending', 'vetted', 'rejected']),
    disputeContactEmail: z.string().email(),
    status: z.enum(['active', 'suspended']),
  })
  .partial()
  .passthrough();
const openDispute_Body = z
  .object({
    openedByParticipantId: z.string(),
    againstParticipantId: z.string().optional(),
    subjectType: z.enum([
      'entitlement',
      'attestation',
      'settlement',
      'licence',
    ]),
    subjectId: z.string(),
    summary: z.string(),
  })
  .passthrough();
const resolveDispute_Body = z
  .object({
    status: z.enum(['resolved', 'dismissed']),
    resolutionNotes: z.string().optional(),
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
const ParticipantId = z.string();
const Participant = z
  .object({
    id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
    displayName: z.string(),
    legalName: z.string().optional(),
    role: z.enum([
      'seller',
      'buyer',
      'marketplaceOperator',
      'keeper',
      'masher',
      'auditor',
      'platform',
    ]),
    jurisdiction: z.string().optional(),
    vettingStatus: z.enum(['unvetted', 'pending', 'vetted', 'rejected']),
    disputeContactEmail: z.string().email().optional(),
    status: z.enum(['active', 'suspended']),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ParticipantListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
          displayName: z.string(),
          legalName: z.string().optional(),
          role: z.enum([
            'seller',
            'buyer',
            'marketplaceOperator',
            'keeper',
            'masher',
            'auditor',
            'platform',
          ]),
          jurisdiction: z.string().optional(),
          vettingStatus: z.enum(['unvetted', 'pending', 'vetted', 'rejected']),
          disputeContactEmail: z.string().email().optional(),
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
const ParticipantListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
              displayName: z.string(),
              legalName: z.string().optional(),
              role: z.enum([
                'seller',
                'buyer',
                'marketplaceOperator',
                'keeper',
                'masher',
                'auditor',
                'platform',
              ]),
              jurisdiction: z.string().optional(),
              vettingStatus: z.enum([
                'unvetted',
                'pending',
                'vetted',
                'rejected',
              ]),
              disputeContactEmail: z.string().email().optional(),
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
const ParticipantCreate = z
  .object({
    displayName: z.string(),
    legalName: z.string().optional(),
    role: z.enum([
      'seller',
      'buyer',
      'marketplaceOperator',
      'keeper',
      'masher',
      'auditor',
      'platform',
    ]),
    jurisdiction: z.string().optional(),
    disputeContactEmail: z.string().email().optional(),
  })
  .passthrough();
const ParticipantResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
        displayName: z.string(),
        legalName: z.string().optional(),
        role: z.enum([
          'seller',
          'buyer',
          'marketplaceOperator',
          'keeper',
          'masher',
          'auditor',
          'platform',
        ]),
        jurisdiction: z.string().optional(),
        vettingStatus: z.enum(['unvetted', 'pending', 'vetted', 'rejected']),
        disputeContactEmail: z.string().email().optional(),
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
const ParticipantUpdate = z
  .object({
    displayName: z.string(),
    legalName: z.string(),
    jurisdiction: z.string(),
    vettingStatus: z.enum(['unvetted', 'pending', 'vetted', 'rejected']),
    disputeContactEmail: z.string().email(),
    status: z.enum(['active', 'suspended']),
  })
  .partial()
  .passthrough();
const DisputeId = z.string();
const Dispute = z
  .object({
    id: z.string().regex(/^dsp_[0-9a-hjkmnp-tv-z]{26}$/),
    openedByParticipantId: z.string(),
    againstParticipantId: z.string().optional(),
    subjectType: z.enum([
      'entitlement',
      'attestation',
      'settlement',
      'licence',
    ]),
    subjectId: z.string(),
    summary: z.string().optional(),
    status: z.enum(['open', 'underReview', 'resolved', 'dismissed']),
    resolutionNotes: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const DisputeListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^dsp_[0-9a-hjkmnp-tv-z]{26}$/),
          openedByParticipantId: z.string(),
          againstParticipantId: z.string().optional(),
          subjectType: z.enum([
            'entitlement',
            'attestation',
            'settlement',
            'licence',
          ]),
          subjectId: z.string(),
          summary: z.string().optional(),
          status: z.enum(['open', 'underReview', 'resolved', 'dismissed']),
          resolutionNotes: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const DisputeListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^dsp_[0-9a-hjkmnp-tv-z]{26}$/),
              openedByParticipantId: z.string(),
              againstParticipantId: z.string().optional(),
              subjectType: z.enum([
                'entitlement',
                'attestation',
                'settlement',
                'licence',
              ]),
              subjectId: z.string(),
              summary: z.string().optional(),
              status: z.enum(['open', 'underReview', 'resolved', 'dismissed']),
              resolutionNotes: z.string().optional(),
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
const DisputeCreate = z
  .object({
    openedByParticipantId: z.string(),
    againstParticipantId: z.string().optional(),
    subjectType: z.enum([
      'entitlement',
      'attestation',
      'settlement',
      'licence',
    ]),
    subjectId: z.string(),
    summary: z.string(),
  })
  .passthrough();
const DisputeResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^dsp_[0-9a-hjkmnp-tv-z]{26}$/),
        openedByParticipantId: z.string(),
        againstParticipantId: z.string().optional(),
        subjectType: z.enum([
          'entitlement',
          'attestation',
          'settlement',
          'licence',
        ]),
        subjectId: z.string(),
        summary: z.string().optional(),
        status: z.enum(['open', 'underReview', 'resolved', 'dismissed']),
        resolutionNotes: z.string().optional(),
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
const DisputeResolve = z
  .object({
    status: z.enum(['resolved', 'dismissed']),
    resolutionNotes: z.string().optional(),
  })
  .passthrough();

export const schemas: any = {
  registerParticipant_Body,
  updateParticipant_Body,
  openDispute_Body,
  resolveDispute_Body,
  Problem,
  ParticipantId,
  Participant,
  ParticipantListData,
  ResponseMeta,
  ParticipantListResponse,
  ParticipantCreate,
  ParticipantResponse,
  ParticipantUpdate,
  DisputeId,
  Dispute,
  DisputeListData,
  DisputeListResponse,
  DisputeCreate,
  DisputeResponse,
  DisputeResolve,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/disputes',
    alias: 'listDisputes',
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
                  id: z.string().regex(/^dsp_[0-9a-hjkmnp-tv-z]{26}$/),
                  openedByParticipantId: z.string(),
                  againstParticipantId: z.string().optional(),
                  subjectType: z.enum([
                    'entitlement',
                    'attestation',
                    'settlement',
                    'licence',
                  ]),
                  subjectId: z.string(),
                  summary: z.string().optional(),
                  status: z.enum([
                    'open',
                    'underReview',
                    'resolved',
                    'dismissed',
                  ]),
                  resolutionNotes: z.string().optional(),
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
    path: '/v1/disputes',
    alias: 'openDispute',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: openDispute_Body,
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
            id: z.string().regex(/^dsp_[0-9a-hjkmnp-tv-z]{26}$/),
            openedByParticipantId: z.string(),
            againstParticipantId: z.string().optional(),
            subjectType: z.enum([
              'entitlement',
              'attestation',
              'settlement',
              'licence',
            ]),
            subjectId: z.string(),
            summary: z.string().optional(),
            status: z.enum(['open', 'underReview', 'resolved', 'dismissed']),
            resolutionNotes: z.string().optional(),
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
    method: 'post',
    path: '/v1/disputes/:disputeId/resolve',
    alias: 'resolveDispute',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: resolveDispute_Body,
      },
      {
        name: 'disputeId',
        type: 'Path',
        schema: z.string().regex(/^dsp_[0-9a-hjkmnp-tv-z]{26}$/),
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
            id: z.string().regex(/^dsp_[0-9a-hjkmnp-tv-z]{26}$/),
            openedByParticipantId: z.string(),
            againstParticipantId: z.string().optional(),
            subjectType: z.enum([
              'entitlement',
              'attestation',
              'settlement',
              'licence',
            ]),
            subjectId: z.string(),
            summary: z.string().optional(),
            status: z.enum(['open', 'underReview', 'resolved', 'dismissed']),
            resolutionNotes: z.string().optional(),
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
    path: '/v1/participants',
    alias: 'listParticipants',
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
        name: 'role',
        type: 'Query',
        schema: z
          .enum([
            'seller',
            'buyer',
            'marketplaceOperator',
            'keeper',
            'masher',
            'auditor',
            'platform',
          ])
          .optional(),
      },
      {
        name: 'vettingStatus',
        type: 'Query',
        schema: z
          .enum(['unvetted', 'pending', 'vetted', 'rejected'])
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
                  id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
                  displayName: z.string(),
                  legalName: z.string().optional(),
                  role: z.enum([
                    'seller',
                    'buyer',
                    'marketplaceOperator',
                    'keeper',
                    'masher',
                    'auditor',
                    'platform',
                  ]),
                  jurisdiction: z.string().optional(),
                  vettingStatus: z.enum([
                    'unvetted',
                    'pending',
                    'vetted',
                    'rejected',
                  ]),
                  disputeContactEmail: z.string().email().optional(),
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
    path: '/v1/participants',
    alias: 'registerParticipant',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: registerParticipant_Body,
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
            id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
            displayName: z.string(),
            legalName: z.string().optional(),
            role: z.enum([
              'seller',
              'buyer',
              'marketplaceOperator',
              'keeper',
              'masher',
              'auditor',
              'platform',
            ]),
            jurisdiction: z.string().optional(),
            vettingStatus: z.enum([
              'unvetted',
              'pending',
              'vetted',
              'rejected',
            ]),
            disputeContactEmail: z.string().email().optional(),
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
    path: '/v1/participants/:participantId',
    alias: 'getParticipant',
    requestFormat: 'json',
    parameters: [
      {
        name: 'participantId',
        type: 'Path',
        schema: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
            displayName: z.string(),
            legalName: z.string().optional(),
            role: z.enum([
              'seller',
              'buyer',
              'marketplaceOperator',
              'keeper',
              'masher',
              'auditor',
              'platform',
            ]),
            jurisdiction: z.string().optional(),
            vettingStatus: z.enum([
              'unvetted',
              'pending',
              'vetted',
              'rejected',
            ]),
            disputeContactEmail: z.string().email().optional(),
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
    path: '/v1/participants/:participantId',
    alias: 'updateParticipant',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateParticipant_Body,
      },
      {
        name: 'participantId',
        type: 'Path',
        schema: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
            displayName: z.string(),
            legalName: z.string().optional(),
            role: z.enum([
              'seller',
              'buyer',
              'marketplaceOperator',
              'keeper',
              'masher',
              'auditor',
              'platform',
            ]),
            jurisdiction: z.string().optional(),
            vettingStatus: z.enum([
              'unvetted',
              'pending',
              'vetted',
              'rejected',
            ]),
            disputeContactEmail: z.string().email().optional(),
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
    method: 'post',
    path: '/v1/participants/:participantId/suspend',
    alias: 'suspendParticipant',
    requestFormat: 'json',
    parameters: [
      {
        name: 'participantId',
        type: 'Path',
        schema: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
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
            id: z.string().regex(/^ptc_[0-9a-hjkmnp-tv-z]{26}$/),
            displayName: z.string(),
            legalName: z.string().optional(),
            role: z.enum([
              'seller',
              'buyer',
              'marketplaceOperator',
              'keeper',
              'masher',
              'auditor',
              'platform',
            ]),
            jurisdiction: z.string().optional(),
            vettingStatus: z.enum([
              'unvetted',
              'pending',
              'vetted',
              'rejected',
            ]),
            disputeContactEmail: z.string().email().optional(),
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
