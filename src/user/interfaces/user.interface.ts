
import { Document } from 'mongoose';
import { ERole } from 'src/types/role.enum';

export interface User extends Document {
    readonly name: string;
    readonly username: string;
    readonly password: string
    readonly roles: ERole;
    readonly dob: Date;
    readonly email: string;
    readonly isDeleted: boolean;
    readonly deletedAt?: Date;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
