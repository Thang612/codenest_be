import * as mongoose from 'mongoose';
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb+srv://dangtrungthang6122003_db_user:hB7CJu8z2ld9ufFP@ignite.yyvjr0a.mongodb.net/', {
                dbName: "codenest"
            }),
    },
];