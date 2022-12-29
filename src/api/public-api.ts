import { AxiosResponse } from 'axios';

import { instance } from './http';

export const publicApi = {
  getPublicApi() {
    return instance.get<IEntries, AxiosResponse<IEntries>>('entries');
  },
};

export interface IEntryItem {
  API: string;
  Auth: string;
  Category: string;
  Cors: string;
  Description: string;
  HTTPS: boolean;
  Link: string;
}

export interface IEntries {
  count: number;
  entries: IEntryItem[];
}
