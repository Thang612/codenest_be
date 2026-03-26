import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        minAge: {
            type: Number,
            default: 0,
        },
        maxAge: {
            type: Number,
            default: 100,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)