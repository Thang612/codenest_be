import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Tên lớp là bắt buộc'],
            trim: true,
        },

        code: {
            type: String,
            required: [true, 'Mã lớp là bắt buộc'],
            unique: true,
            uppercase: true,
            trim: true,
        },

        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true,
        },

        homeroomTeacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);