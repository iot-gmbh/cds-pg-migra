import cds from '@sap/cds';

interface migrations {
  multitenant?: boolean;
  schema?: {
    default: string;
    clone: string;
    reference: string;
    tenants?: string[];
  };
  database?: {
    default: string;
    reference: string;
  };
  deploy: {
    tmpFile: string;
    undeployFile: string;
  };
  migrations?: {
    path: string;
  };
}

interface credentials {
  host?: string;
  hostname?: string;
  port?: number;
  database?: string;
  dbname?: string;
  user?: string;
  username?: string;
  password?: string;
  sslcert?: string;
  sslrootcert?: string;
}

interface service {
  name: string;
  kind?: string;
  label?: string;
  dialect?: string;
  model: string[];
  tags?: string[];
  impl?: string;
  credentials: credentials;
}

interface config {
  service: service;
}

const config = async (service: string): Promise<config> => {
  console.log('hi du');
  
  await cds.connect();
  const serviceOptions = cds.env.requires[service];

  // const migrationOptions = cds.env.migrations[service];

  return {
    service: serviceOptions,
  };
};

export {
  config as configOptions,
  credentials,
  migrations as migrationOptions,
  config,
};