import {ConfigType, registerAs} from '@nestjs/config';
import * as process from "node:process";

const appConfig = registerAs('app', () => {
    return {
        nodeEnv: process.env.NODE_ENV!,

        app: {
            port: process.env.PORT || 8183,
            nodeEnv: process.env.NODE_ENV || 'development',
            logLevel: process.env.LOG_LEVEL || 'debug',
        },
        security: {
            jwtSecret: process.env.JWT_SECRET!,
        },

        adminCredential: {
            adminUsername: process.env.ADMIN_USERNAME,
            adminPassword: process.env.ADMIN_PASSWORD,
        }
    };
});

export default appConfig;
export type AppConfig = ConfigType<typeof appConfig>;
