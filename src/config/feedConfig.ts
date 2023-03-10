import { IFeedConfigItem } from "../interfaces/IFeedConfigItem";

export const feedConfig: Array<IFeedConfigItem> = [
  {
    title: "Market Wide News",
    subtitle: "A medley of news from the entire market.",
    feedName: "market-wide",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "SPX Momentum Plays",
    subtitle: "A sub second latency feed for large second by second changes in SPX (>0.15%). Catch the momentum.",
    feedName: "spx-momentum",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "U.S. Economic Prints",
    subtitle:
      "U.S. CPI, PMI, jobless claims, inventories, etc.",
    feedName: "us-economic-prints",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Eurozone Economic Prints",
    subtitle:
      "Eurozone CPI, PMI, jobless claims, inventories, etc.",
    feedName: "eu-economic-prints",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Chinese Economic Prints",
    subtitle:
      "China's CPI, PMI, jobless claims, inventories, etc.",
    feedName: "cny-economic-prints",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Option Flows",
    subtitle:
      "Gamma, Vanna, and Charm exposures, as well as put / call ratios and put / call walls.",
    feedName: "option-flows",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "U.S. Bond Auctions",
    subtitle: "Auction results for U.S. Treasury bonds.",
    feedName: "us-bond-auctions",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Currencies",
    subtitle: "News, volume, price, and option action on the major currencies.",
    feedName: "currencies",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "SPX",
    subtitle: "News, volume, price, and option action on the SPX index.",
    feedName: "spx",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "SPY",
    subtitle: "News, volume, price, and option action on the SPDR S&P 500 ETF.",
    feedName: "spy",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "QQQ",
    subtitle:
      "News, volume, price, and option action on the Invesco QQQ Trust.",
    feedName: "qqq",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "IWM",
    subtitle:
      "News, volume, price, and option action on the iShares Russell 2000 ETF.",
    feedName: "iwm",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "BTC",
    subtitle: "Bitcoin price action and news.",
    feedName: "btc",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "ETH",
    subtitle: "Ethereum price action and news.",
    feedName: "etc",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "TSLA",
    subtitle: "Tesla - apparently everyone's favorite stock.",
    feedName: "tsla",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Unusual Trading Volume",
    subtitle: "Stocks, ETFs, and instruments with unusual trading volume.",
    feedName: "unusual-trading-volume",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Most volatile",
    subtitle: "Instruments with a high percentage change in price today.",
    feedName: "move-volatile",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Crypto News",
    subtitle: "News from all around the crypto world. We're sorry its in the 'popular' feed section.",
    feedName: "crypto",
    isPopular: true,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Most Active",
    subtitle: "Stocks, ETFs, and instruments with the most trading volume.",
    feedName: "most-active",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "New Highs",
    subtitle: "Instruments reaching new 52 week highs.",
    feedName: "new-highs",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "New Lows",
    subtitle: "Instruments reaching new 52 week lows.",
    feedName: "new-lows",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Overbought",
    subtitle: "Instruments overbought according to RSI(14).",
    feedName: "overbought",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Oversold",
    subtitle: "Instruments oversold according to RSI(14).",
    feedName: "oversold",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Top Gainers",
    subtitle: "Instruments with a high percentage gain.",
    feedName: "top-gainers",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Top Losers",
    subtitle: "Instruments with a high percentage loss.",
    feedName: "top-losers",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: false,
    isLowLatency: false
  },
  {
    title: "Unusual Options Volume",
    subtitle: "Stocks, ETFs, and instruments with unusual options volume.",
    feedName: "unusual-options-volume",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },

  {
    title: "Top Insider Buying",
    subtitle: "Stocks and ETFs with large amounts of insider buying.",
    feedName: "insider-buying",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Top Insider Selling",
    subtitle: "Stocks and ETFs with large amounts of insider selling.",
    feedName: "insider-selling",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Upcoming Earnings",
    subtitle: "Companies with upcoming earnings, expected earnings, and moves.",
    feedName: "upcoming-earnings",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Earnings Reports",
    subtitle: "Earnings reports and significant moves after earnings.",
    feedName: "earnings-reports",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Analysts - All",
    subtitle:
      "Latest institutional upgrades, downgrades, initiations, reiterations, and resumes.",
    feedName: "analysts-all",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Analyst Upgrades",
    subtitle: "Stocks that have received analyst upgrades.",
    feedName: "analyst-upgrades",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Analyst Downgrades",
    subtitle: "Stocks that have received analyst downgrades.",
    feedName: "analyst-downgrades",
    isPopular: false,
    hasSymbolInput: false,
    isComingSoon: true,
    isLowLatency: false
  },
  {
    title: "Custom",
    subtitle: "Track desired information for a specific instrument.",
    feedName: "custom",
    isPopular: false,
    hasSymbolInput: true,
    isComingSoon: true,
    isLowLatency: false
  },
];
