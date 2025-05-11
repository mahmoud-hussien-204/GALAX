export interface IDashboardData {
  title: string;
  total_income: number;
  total_coin: number;
  total_sold_coin: number;
  total_blocked_coin: number;
  total_member: number;
  bonus_distribution: number;
  total_user: number;
  active_percentage: number;
  inactive_percentage: number;
  monthly_deposit: MonthlyDeposit;
  monthly_withdrawal: MonthlyWithdrawal;
}

export interface MonthlyDeposit {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": number;
  "11": number;
  "12": number;
}

export interface MonthlyWithdrawal {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": number;
  "11": number;
  "12": number;
}
