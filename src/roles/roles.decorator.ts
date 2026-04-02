// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { ERole } from '../../types/role.enum';
export const ROLES_KEY = 'roles';
export const Roles = (...roles: ERole[]) =>
    SetMetadata(ROLES_KEY, roles);