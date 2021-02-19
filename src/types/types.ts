export enum ActionIconTypes {
  ok = 'ok',
  add = 'add',
  warn = 'warn',
  close = 'close'
}

export interface Hobby {
  id: string;
  name: string;
  isAdded?: boolean;
}
