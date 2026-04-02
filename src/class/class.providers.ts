
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION } from 'src/constants';
import { ClassSchema } from './schemas/classes.schema';

export const classProviders = [
    {
        provide: 'CLASS_MODEL',
        useFactory: (connection: Connection) => connection.model('Classes', ClassSchema),
        inject: [DATABASE_CONNECTION],
    },
];
