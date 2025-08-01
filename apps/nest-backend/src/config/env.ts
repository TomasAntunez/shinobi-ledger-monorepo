import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, Max, Min, validateSync } from 'class-validator';

export enum Environment {
  LOCAL = 'local',
  PRODUCTION = 'production',
}

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV!: Environment;

  @IsNumber()
  @Min(0)
  @Max(65535)
  @IsOptional()
  BACKEND_PORT: number = 3000;
}

export const validateConfig = (config: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};
