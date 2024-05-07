import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '969a3e26-aae9-4312-9eb2-8a19742d2400',
};

export const sampleWithPartialData: IAuthority = {
  name: '603a0bf9-d503-43ee-b301-c9c9dc6cf9ca',
};

export const sampleWithFullData: IAuthority = {
  name: 'b59d89f0-17e0-4f3e-93a2-91337257a63e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
