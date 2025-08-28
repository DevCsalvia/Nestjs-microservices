import { JobMetadata } from '../interfaces/jobMetadata.interface';
import { applyDecorators, Injectable, SetMetadata } from '@nestjs/common';

export const JOB_METADATA_KEY = 'job_meta';

export const Job = (meta: JobMetadata) =>
  applyDecorators(SetMetadata(JOB_METADATA_KEY, meta), Injectable());
