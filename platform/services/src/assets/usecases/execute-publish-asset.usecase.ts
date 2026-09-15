/**
 * ExecutePublishAsset Use Case
 *
 * Hand-maintained after Mode A scaffold (operationId publishAsset ≠ create).
 */

import type { PublishAssetInput, PublishAssetOutput } from "../dto/asset.dto";
import type {
  ExecutionContextService,
  IdGeneratorService,
} from "@tidecove/services/_shared/index.js";
import type { AssetRepository } from "../ports";
import { ValidationError } from "../errors";

export class ExecutePublishAsset {
  constructor(
    private readonly context: ExecutionContextService,
    private readonly idGenerator: IdGeneratorService,
    private readonly assetRepository: AssetRepository,
  ) {}

  async execute(input: PublishAssetInput): Promise<PublishAssetOutput> {
    const correlationId = this.idGenerator.astId();
    if (!input) {
      throw new ValidationError("Input is required");
    }
    if (!(input as any).ownerParticipantId) {
      throw new ValidationError("ownerParticipantId is required");
    }
    if (!(input as any).title) {
      throw new ValidationError("title is required");
    }
    const id = this.idGenerator.astId();
    return this.assetRepository.publishAsset({
      ...(input as object),
      id,
      orgId: this.context.getOrgId?.() ?? "tnt_local",
      correlationId,
    } as any);
  }
}
