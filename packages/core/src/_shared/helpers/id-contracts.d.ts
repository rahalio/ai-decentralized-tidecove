/**
 * ID Contracts — Tidecove
 *
 * Format: {prefix}_{ulid} (lowercase Crockford base32 ULID).
 */
export declare const DOMAIN_PREFIX_MAP: {
    readonly tenant: "tnt";
    readonly auth: "aut";
    readonly apiKey: "key";
    readonly identity: "idn";
    readonly assets: "ast";
    readonly licences: "lic";
    readonly entitlements: "ent";
    readonly accessCredential: "acr";
    readonly computeJob: "cjd";
    readonly marketplace: "mkt";
    readonly keepers: "kpr";
    readonly keeperPenalty: "kpp";
    readonly settlements: "set";
    readonly participants: "ptc";
    readonly dispute: "dsp";
    readonly compliance: "cmp";
    readonly purposeGate: "pgd";
};
export type DomainCode = keyof typeof DOMAIN_PREFIX_MAP;
export type DomainPrefix = (typeof DOMAIN_PREFIX_MAP)[DomainCode];
export declare function isValidDomainId(value: string): boolean;
export declare function extractDomainFromId(id: string): DomainCode | null;
//# sourceMappingURL=id-contracts.d.ts.map