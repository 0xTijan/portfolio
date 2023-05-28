import Filecoin from "./../../images/moralis-filecoin.png";
import Google from "./../../images/moralis-google.png";
import Chainlink from "./../../images/chainlink-hackathon.png";

export type Hackathon = {
  name: string,
  hackathonUrl: string,
  description: string,
  image: any,
  url: string,
  project: string,
  prizes: { name: string }[],
}

export const hackathons: Hackathon[] = [
  {
    name: "Moralis & Filecoin",
    hackathonUrl: "https://moralis.io/filecoin-hackathon/",
    description: "Create your own personalized Gift Cards as NFTs and lock some money into them. Surprise your friends and family!",
    image: Filecoin,
    url: "https://cardix.tijan.dev/",
    project: "Cardix",
    prizes: [{name: "Chainlink Cloning Web2"}, {name: "XMTP - most innovative"}, {name: "Polygon Prize Pool"}, {name: "Ledger Nano S Plus"}]
  },
  {
    name: "Moralis & Google",
    hackathonUrl: "https://moralis.io/google-hackathon/",
    description: "The most customizable solution for receiving automated recurring payments in cryptocurrencies.",
    image: Google,
    url: "https://bananapay.tijan.dev/",
    project: "BananaPay",
    prizes: [{name: "BNB - Traditional Finance #1"}, {name: "Fantom - DeFi++ #2"}, {name: "Polygon Prize Pool"}]
  },
  {
    name: "Chainlink Fall 2022",
    hackathonUrl: "https://chainlinkfall2022.devpost.com/",
    description: "The most customizable solution for receiving automated recurring payments in cryptocurrencies.",
    image: Chainlink,
    url: "https://bananapay.tijan.dev/",
    project: "BananaPay",
    prizes: [{name: "Polygon Prize Pool"}]
  },
];