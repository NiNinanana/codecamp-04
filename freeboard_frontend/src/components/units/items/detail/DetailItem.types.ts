export interface IDetailItemUIProps {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  image: string;
  createdAt: string;
  seller: string;
  update: () => void;
  list: () => void;
  delete: () => void;
  basket: () => void;
}
