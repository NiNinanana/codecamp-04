export interface IDetailItemUIProps {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  image: string;
  createdAt: string;
  seller: string;
  address: string;
  update: () => void;
  list: () => void;
  delete: () => void;
  basket: () => void;
  buy: () => void;
  pick: () => void;
}
