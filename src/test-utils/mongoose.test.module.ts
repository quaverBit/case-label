import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule, MongooseModuleOptions } from "@nestjs/mongoose";
import MongoMemoryServer from "mongodb-memory-server-core";

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) => MongooseModule.forRootAsync({
  useFactory: async () => {
    mongod = new MongoMemoryServer();
    const mongoUri = await mongod.getUri();
    return {
      uri: mongoUri,
      ...options,
    }
  },
  inject: []
});

export const closeInMongodConnection = async () => {
  if (mongod) await mongod.stop();
}