import { defaultContext, useQuery } from "@tanstack/react-query";

interface CoinStat {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  websiteUrl: string;
  redditUrl: string;
  twitterUrl: string;
  exp: string[];
}

const API_URL = "https://api.coinstats.app/public/v1/coins";

const fetchCoinStats = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.coins;
};

const useCoinStats = () => {
  const { data, isLoading, isError, refetch } = useQuery<CoinStat[]>({
    queryKey: ["coin-stats"],
    queryFn: fetchCoinStats,
    context: defaultContext,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export type { CoinStat };
export { useCoinStats };
