export type Order = {
  id?: number;
  userId: number;
};

export type DetailedOrder = {
  id?: number;
  userId: number;
  productsIds: number[];
};