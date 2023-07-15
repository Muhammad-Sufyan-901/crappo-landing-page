import icons from "../constant/icons";
import images from "./images";

const { HiChartBar, HiGlobe, HiUser, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } = icons;
const { bitcoin2: BitconImg, ethereum: EthereumImg, litecoin: LitecoinImg, visa: VisaImg, mastercard: MastercardImg, bitcoin1: BitcoinImg, featureImage1, featureImage2, featureImage3 } = images;

const navData = [
  {
    name: "Products",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const statsData = [
  {
    Icon: HiChartBar,
    nominal: "$30B",
    name: "Digital Currency Exchanged",
  },
  {
    Icon: HiUser,
    nominal: "$10M+",
    name: "Trusted Wallets Investor",
  },
  {
    Icon: HiGlobe,
    nominal: "195",
    name: "Countries Supported",
  },
];

const cryptoValues = [
  {
    name: "BTC",
    value: 22925.9,
  },
  {
    name: "ETH",
    value: 1619.29,
  },
  {
    name: "USDC",
    value: 0.999,
  },
  {
    name: "SOL",
    value: 38.7,
  },
  {
    name: "XRP",
    value: 0.37,
  },
];

const currency = [
  {
    image: BitconImg,
    name: "Bitcoin",
    abbr: "BTC",
    description: "Digital currency in which a record of transactions is maintained.",
  },
  {
    image: EthereumImg,
    name: "Ethereum",
    abbr: "ETH",
    description: "Blockchain technology to create and run decentralized digital applications.",
  },
  {
    image: LitecoinImg,
    name: "Litecoin",
    abbr: "LTC",
    description: "Cryptocurrency that enables instant payments to anyone in the world.",
  },
];

const featuresData = [
  {
    image: featureImage1,
    title: "Invest Smart",
    description: "Get full statistic information about the behavior of buyers and sellers will help you make the decision.",
  },
  {
    image: featureImage2,
    title: "Detailed Statistics",
    description: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
  },
  {
    image: featureImage3,
    title: "Grow your profit and track your investments",
    description: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
  },
];

const footerData = {
  quickLinks: [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Products",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ],
  resourcesLinks: [
    {
      name: "Download Whitepapper",
      href: "#",
    },
    {
      name: "Smart Token",
      href: "#",
    },
    {
      name: "Blockchain Explore",
      href: "#",
    },
    {
      name: "Crypto API",
      href: "#",
    },
    {
      name: "Interest",
      href: "#",
    },
  ],
  paymentLinks: [
    {
      image: VisaImg,
      alt: "Visa Pics",
    },
    {
      image: MastercardImg,
      alt: "Mastercard Pics",
    },
    {
      image: BitcoinImg,
      alt: "Bitcoin Pics",
    },
  ],
  socialLinks: [
    {
      Icon: IoLogoYoutube,
      href: "https://youtube.com",
    },
    {
      Icon: IoLogoInstagram,
      href: "https://instagram.com",
    },
    {
      Icon: IoLogoTwitter,
      href: "https://twitter.com",
    },
    {
      Icon: IoLogoLinkedin,
      href: "https://linkedin.com",
    },
  ],
};

const data = {
  navData,
  statsData,
  cryptoValues,
  currency,
  featuresData,
  footerData,
};

export default data;
