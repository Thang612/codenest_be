
import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { DATABASE_CONNECTION } from 'src/constants';

export const userProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: [DATABASE_CONNECTION],
    },
];
