import { buildClient } from "@xata.io/client";
import type { BaseClientOptions } from "@xata.io/client";

export type DatabaseSchema = {};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://nasih-cp-s-workspace-rklmve.eu-west-1.xata.sh/db/nas_snapcast",
   apiKey: process.env.XATA_API_KEY,
  branch: 'man'
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options });
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
