
import { Connection } from 'mongoose';
import { CourseSchema } from './schemas/course.schema';
import { DATABASE_CONNECTION } from 'src/constants';

export const courseProviders = [
    {
        provide: 'COURSE_MODEL',
        useFactory: (connection: Connection) => connection.model('Course', CourseSchema),
        inject: [DATABASE_CONNECTION],
    },
];
