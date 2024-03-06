export interface IQrc {
  value: string;
}

export const qrcDetailes: IQrc[] = [
  { value: "غار علی صدر همدان" },
  { value: "مواد غذایی" },
  { value: "کارخانه سحر" },
];

export interface IQrcInfo {
  label: string;
  text: string;
}

export const qrcInfo: IQrcInfo[] = [
  { label: "وضعیت", text: "فعال" },
  { label: "تعداد پاسخ", text: "125" },
  { label: "تعداد اسکن", text: "1254" },
  { label: "تاریخ اعتبار", text: "1 / 2 / 1400" },
];
