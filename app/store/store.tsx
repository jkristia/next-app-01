// Server-side store: provide configuration and data loaders for Server Components

// Define the config object type
export interface Config {
  propA: string;
  propB: string;
}

const defaultConfig: Config = {
  propA: 'defaultA',
  propB: 'defaultB',
};

export class Store {
  private _config: Config;

  public get config(): Config {
    return this._config;
  }

  constructor(config?: Config) {
    this._config = config || defaultConfig;
  }
}
const _store = new Store();

// In a real app this could read from DB, file, env, or remote API.
export async function getStore(): Promise<Store> {
  // Simulate async server work; replace with real data access as needed
  return _store;
}
