export interface PersonDto {
  personId: number;
  relationship: string;
  job: string;
  status: PersonStatus;
  canCuocCongDan: string;
  address: string;
  dateOfBirth: string;
  firstName: string;
  gender: string;
  lastName: string;
}

export enum PersonStatus {
  LIVE = 'Đang cư trú',
  TEMPORARY_LIVE = 'Tạm trú',
  TEMPORARY_ABSENT = 'Tạm vắng',
  DIE = 'Đã qua đời',
}
