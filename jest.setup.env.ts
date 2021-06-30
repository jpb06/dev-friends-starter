import { loadEnvConfig } from '@next/env';

const setupEnv = async (): Promise<void> => {
  loadEnvConfig('.');
};
export default setupEnv;
