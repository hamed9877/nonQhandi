export interface UserData {
  user: {
    role: string;
    phone: string;
    name: string;
    family: string;
    gen: string;
    idCode: string;
    date: string;
    email: string;
    city: string;
  }[];
  qrc: {
    id: string;
    org: string;
    title: string;
    subject: string;
    address: string;
    comments: { name: string; comment: string; src?: string; date?: string }[];
    tag: string;
  }[];
  dashboard: Array<{ name: string; request: string; amt: string }>[];
}
