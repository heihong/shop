export interface BookItemList {
  id: number;
  title: string;
  price: number;
};


export interface BookList {
  id: number;
  title: string;
  cover: string;
  bookItemList: BookItemList[];
};
