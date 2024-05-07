import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 3156,
  login: 'CiF{@q\\mdj9dX\\vH\\hWMXh',
};

export const sampleWithPartialData: IUser = {
  id: 10049,
  login: 'f$ON2@UTxm',
};

export const sampleWithFullData: IUser = {
  id: 29947,
  login: 'k1Ht6',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
