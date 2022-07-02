import { getSkill, Skill, skills } from "../skills/config"
import SimpleChat from "./../../images/simple-chat.png";
import Portfolio from "./../../images/portfolio.png";
import Avatar from "./../../images/hardhat-logo.png";
import Crypto from "./../../images/crypto-tracker.png";
import Diamond from "./../../images/diamond-hands.png";
import Coin from "./../../images/coin-flip.png";
import Mobile from "./../../images/wallet.png";


export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: "Developer portfolio showing my blockchain projects, skillset and certificates.",
    image: Portfolio,
    url: "https://tijan.dev/",
    github: "https://github.com/0xTijan/portfolio",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  {
    name: "Simple Chat",
    description: "Chat groups with limitations based on your token balances, built in Moralis 7-day challenge.",
    image: SimpleChat,
    url: "https://projects.tijan.dev/simple-chat",
    github: "https://github.com/0xTijan/simple-crypto-chat",
    technologies: getSkill(["html", "css", "javascript", "moralis"])
  },
  {
    name: "Coin Flip",
    description: "Multiplayer Coin Flip game using smart contracts and chainlink VRF to determine a winner in decentralized way.",
    image: Coin,
    url: "https://jaw6r7frvcwq.usemoralis.com",
    github: "https://github.com/0xTijan/coin-flip",
    technologies: getSkill(["react", "solidity", "hardhat", "typescript", "chainlink", "moralis"])
  },
  {
    name: "Diamond Hands",
    description: "Funny blockchain game that prevents you to panic sell your cryptos by locking them in smart contract.",
    image: Diamond,
    url: "https://kivt14y98mje.usemoralis.com",
    github: "https://github.com/0xTijan/diamond-hands",
    technologies: getSkill(["solidity", "hardhat", "react", "javascript", "moralis"])
  },
  {
    name: "Crypto Tracker",
    description: "Users can see all statistics about top 250 cryptos and create their own personal portfolio.",
    image: Crypto,
    url: "https://projects.tijan.dev/crypto-tracker",
    github: "https://github.com/0xTijan/crypto-tracker",
    technologies: getSkill(["react", "javascript", "moralis", "css", "html", "git", "npm"])
  },
  {
    name: "Mobile Wallet",
    description: "Shows on-chain stats off user's address. User can add personal contacts for easy assets transfer.",
    image: Mobile,
    url: "https://github.com/0xTijan/mobile-wallet",
    github: "https://github.com/0xTijan/mobile-wallet",
    technologies: getSkill(["react native", "javascript", "moralis", "css", "npm"])
  },
]