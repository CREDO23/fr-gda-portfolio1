export const discountData: IDiscountData[] = [
  {
    price: 12.5,
    min : 5000,
  },
  {
    price: 12.5,
    min : 3000,
    max : 4999
  },
  {
    price: 12.5,
    min: 1500,
    max : 2999
  },
  {
    min : 500,
    max : 1499,
    price: 12.5,
  },
  {
    price: 12.5,
    min : 10,
    max: 500
  },
].sort((a,b) =>  a.min - b.min );
