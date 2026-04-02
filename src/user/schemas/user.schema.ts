import * as mongoose from 'mongoose';
import { ERole } from 'src/common/enums/role.enum';

export const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        username: {
            type: String,
            unique: true,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        roles: {
            type: String,
            enum: Object.values(ERole),
            default: ERole.STUDENT,
        },

        dob: {
            type: Date,
        },

        email: {
            type: String,
            required: true,
        },

        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // 🔥 tự tạo createdAt + updatedAt
    }
);