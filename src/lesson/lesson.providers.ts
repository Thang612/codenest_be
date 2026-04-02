
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION } from 'src/constants';
import { LessonSchema } from './schemas/lesson.schema';

export const lessonProviders = [
    {
        provide: 'LESSON_MODEL',
        useFactory: (connection: Connection) => connection.model('Lesson', LessonSchema),
        inject: [DATABASE_CONNECTION],
    },
];
