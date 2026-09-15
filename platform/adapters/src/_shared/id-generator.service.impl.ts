/**
 * ID Generator Service Implementation — Tidecove prefixes.
 */

import type { DomainCode } from '@tidecove/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@tidecove/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@tidecove/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`,
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  astId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.assets);
  }
  licId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.licences);
  }
  entId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.entitlements);
  }
  acrId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.accessCredential);
  }
  cjdId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.computeJob);
  }
  mktId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.marketplace);
  }
  kprId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.keepers);
  }
  kppId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.keeperPenalty);
  }
  setId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.settlements);
  }
  ptcId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.participants);
  }
  dspId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.dispute);
  }
  cmpId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.compliance);
  }
  pgdId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.purposeGate);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
