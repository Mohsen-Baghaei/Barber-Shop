export type BarbersType = {
  address: string;
  avatar: string;
  distance: number;
  fullname: string;
  is_bookmarked: boolean;
  is_shop: boolean;
  lat: number;
  lon: number;
  phone_number: string;
  rate: number;
  reviews_count: number;
  services: string[];
  slug: string;
};

export type DataType = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: BarbersType[];
};
