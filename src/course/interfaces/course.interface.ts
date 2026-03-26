import { Document } from 'mongoose';

export interface Course extends Document {
    readonly title: string;
    readonly slug: string;

    readonly minAge?: number;
    readonly maxAge?: number;

    readonly isDeleted: boolean;

    readonly createdAt: Date;
    readonly updatedAt: Date;
}