export enum AITaskType {
  PROFIT_ANALYSIS = 'PROFIT_ANALYSIS',
  STARTUP_QNA = 'STARTUP_QNA'
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  cost: number;
  margin: number;
  image: string;
  badge?: string;
}

export interface RevenueData {
  name: string;
  before: number;
  after: number;
}