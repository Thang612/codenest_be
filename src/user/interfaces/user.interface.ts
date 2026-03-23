
import { Document } from 'mongoose';
import { ERole } from 'src/types';

export interface User extends Document {
    readonly name: string;
    readonly username: string;
    readonly password: string;
    readonly roles: ERole
}
