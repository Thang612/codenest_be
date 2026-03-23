
import * as mongoose from 'mongoose';
import { ERole } from 'src/types';

export const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    roles: {
        type: String,
        enum: ERole,
        default: ERole.STUDENT,
    }
});
