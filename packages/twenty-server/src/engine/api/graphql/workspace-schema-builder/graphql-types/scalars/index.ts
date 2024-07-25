import { FieldPathScalarType } from 'src/engine/api/graphql/workspace-schema-builder/graphql-types/scalars/field-path.scalar';

import { BigFloatScalarType } from './big-float.scalar';
import { BigIntScalarType } from './big-int.scalar';
import { CursorScalarType } from './cursor.scalar';
import { DateTimeScalarType } from './date-time.scalar';
import { DateScalarType } from './date.scalar';
import { PositionScalarType } from './position.scalar';
import { RawJSONScalar } from './raw-json.scalar';
import { TimeScalarType } from './time.scalar';
import { UUIDScalarType } from './uuid.scalar';

export * from './big-float.scalar';
export * from './big-int.scalar';
export * from './cursor.scalar';
export * from './date-time.scalar';
export * from './date.scalar';
export * from './time.scalar';
export * from './uuid.scalar';

export const scalars = [
  BigFloatScalarType,
  BigIntScalarType,
  DateScalarType,
  DateTimeScalarType,
  TimeScalarType,
  UUIDScalarType,
  CursorScalarType,
  PositionScalarType,
  RawJSONScalar,
  FieldPathScalarType,
];
