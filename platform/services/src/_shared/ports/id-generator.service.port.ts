/**
 * IdGeneratorService Port — Tidecove domain prefixes.
 */

import type { DomainCode } from '@tidecove/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  astId(): string;
  licId(): string;
  entId(): string;
  acrId(): string;
  cjdId(): string;
  mktId(): string;
  kprId(): string;
  kppId(): string;
  setId(): string;
  ptcId(): string;
  dspId(): string;
  cmpId(): string;
  pgdId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
