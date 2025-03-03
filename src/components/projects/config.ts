/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSkill, Skill } from "../skills/config";
import SimpleChat from "./../../images/simple-chat.png";
import Portfolio from "./../../images/portfolio.png";
import Web3UIKit from "./../../images/web3-ui.png";
import Crypto from "./../../images/crypto-tracker.png";
import Diamond from "./../../images/diamond-hands.png";
import Coin from "./../../images/coin-flip.png";
import Mobile from "./../../images/wallet.png";
import Whiteboard from "./../../images/whiteboard-app-preview.png";
import Cardix from "./../../images/cardix3.png";
import BullFolio from "./../../images/bullfolio.png";
import BananaPayV1 from "./../../images/bananapay.png";
import BananaPay from "./../../images/bananapay-new.png";
import TicTacToe from "./../../images/tictactoe.png";
import TerminalGame from "./../../images/2048.png";


export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projectsEn: Project[] = [
  {
    name: "Cardix",
    description: "Create your own personalized Gift Cards as NFTs and lock some money into them. Surprise your friends and family!",
    image: Cardix,
    url: "https://cardix.tijan.dev/",
    github: "",
    technologies: getSkill(["React", "chianlink", "typescript", "css", "solidity"])
  },
  {
    name: "BananaPay",
    description: "Complete copy of Stripe, but for cryptocurrencies. The most customizable solution for receiving automated recurring payments in cryptocurrencies.",
    image: BananaPay,
    url: "https://bananapay.tijan.dev/",
    github: "",
    technologies: getSkill(["react", "typescript", "css", "solidity", "chainlink", "hardhat", "firebase"])
  },
  {
    name: "BullFolio",
    description: "Crypto portfolio tracker that allows users to create strategies and alerts based on technical analysis and never miss a move again.",
    image: BullFolio,
    url: "https://bullfolio.tijan.dev/",
    github: "",
    technologies: getSkill(["react", "typescript", "firebase", "css"])
  },
  {
    name: "Tic Tac Toe AI",
    description: "A command-line Tic Tac Toe AI game built with Rust. Multiple game modes, including AI algorithms like Minimax and Monte Carlo Tree Search (MCTS).",
    image: TicTacToe,
    url: "https://github.com/0xTijan/tic-tac-toe-ai",
    github: "https://github.com/0xTijan/tic-tac-toe-ai",
    technologies: getSkill(["rust"])
  },
  {
    name: "Web3UIKit",
    description: "Open-source contributor to the Web3UIKit - Beautiful and lightweight UI components for web3 developers.",
    image: Web3UIKit,
    url: "https://web3uikit.com/",
    github: "https://github.com/web3ui/web3uikit",
    technologies: getSkill(["Open-Source Contribution", "react", "typescript", "css"])
  },
  {
    name: "Portfolio",
    description: "Developer portfolio showing my blockchain projects.",
    image: Portfolio,
    url: "https://tijan.dev/",
    github: "https://github.com/0xTijan/portfolio",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  {
    name: "Collaborative Whiteboard",
    description: "An online collaborative whiteboard app, with private and public rooms for people to chat and draw in real-time. They can also mint NFTs!",
    image: Whiteboard,
    url: "https://projects.tijan.dev/whiteboard",
    github: "https://github.com/0xTijan/collaborative-canvas",
    technologies: getSkill(["react", "typescript", "nodejs", "socket.io" , "solidity"])
  },
  {
    name: "Terminal 2048",
    description: "A terminal-based implementation of the popular 2048 game, written in Rust. Playable on different grid sizes - difficulties.",
    image: TerminalGame,
    url: "https://github.com/0xtijan/terminal-2048",
    github: "https://github.com/0xtijan/terminal-2048",
    technologies: getSkill(["rust"]),
  },
  {
    name: "Token-Gated Chat",
    description: "Chat groups with limitations based on your token balances, built in Moralis 7-day challenge.",
    image: SimpleChat,
    url: "https://projects.tijan.dev/simple-chat",
    github: "https://github.com/0xTijan/simple-crypto-chat",
    technologies: getSkill(["html", "css", "javascript"])
  },
  {
    name: "Coin Flip",
    description: "Multiplayer Coin Flip game using smart contracts and chainlink VRF to determine a winner in decentralized way.",
    image: Coin,
    url: "https://projects.tijan.dev/coin-flip",
    github: "https://github.com/0xTijan/coin-flip",
    technologies: getSkill(["react", "solidity", "hardhat", "typescript", "chainlink" ])
  },
  {
    name: "Diamond Hands",
    description: "Funny blockchain game that prevents you to panic sell your cryptos by locking them in smart contract.",
    image: Diamond,
    url: "https://projects.tijan.dev/diamond-hands",
    github: "https://github.com/0xTijan/diamond-hands",
    technologies: getSkill(["solidity", "hardhat", "react", "javascript" ])
  },
  {
    name: "Crypto Tracker",
    description: "Users can see all statistics about top 250 cryptos and create their own personal portfolio.",
    image: Crypto,
    url: "https://projects.tijan.dev/crypto-tracker",
    github: "https://github.com/0xTijan/crypto-tracker",
    technologies: getSkill(["react", "javascript" , "css", "html", "git", "npm"])
  },
  {
    name: "Mobile Wallet",
    description: "Shows on-chain stats off user's address. User can add personal contacts for easy assets transfer.",
    image: Mobile,
    url: "",
    github: "https://github.com/0xTijan/mobile-wallet",
    technologies: getSkill(["react native", "javascript" , "css", "npm"])
  },
  {
    name: "BananaPay V1",
    description: "A payment system for receiving recurring payments in cryptocurrencies. (first version)",
    image: BananaPayV1,
    url: "https://bananapay-v1.tijan.dev/",
    github: "",
    technologies: getSkill(["react", "typescript", "css", "solidity", "chainlink", "hardhat"])
  },
];

export const projectsSl: Project[] = [
  {
    name: "Cardix",
    description: "Ustvarite svoje prilagojene darilne kartice v obliki NFT-ja in v njih zaklenite nekaj žetonov. Presenetite svoje prijatelje in družino!",
    image: Cardix,
    url: "https://cardix.tijan.dev/",
    github: "https://cardix.tijan.dev/",
    technologies: getSkill(["React", "chianlink", "typescript", "css", "solidity"])
  },
  {
    name: "BananaPay",
    description: "Celostna kopija plačilnega sistema Stripe, vendar za kripto valute. Najbolj prilagodljiva rešitev za prejemanje avtomatiziranih ponavljajočih se plačil v kriptovalutah.",
    image: BananaPay,
    url: "https://bananapay.tijan.dev/",
    github: "",
    technologies: getSkill(["react", "typescript", "css", "solidity", "chainlink", "hardhat", "firebase"])
  },
  {
    name: "BullFolio",
    description: "Sledilnik kripto portfelja, ki uporabnikom omogoča ustvarjanje strategij in opozoril na podlagi tehnične analize in jim omogoča, da nikoli več ne zamudijo premika na trgu.",
    image: BullFolio,
    url: "https://bullfolio.tijan.dev/",
    github: "",
    technologies: getSkill(["react", "typescript", "firebase", "css"])
  },
  {
    name: "Križci in krožci AI",
    description: "Igra križci in krožci AI v terminalu, zgrajena z Rustom. Več načinov igre, vključno z algoritmi AI, kot sta Minimax in Monte Carlo Tree Search (MCTS).",
    image: TicTacToe,
    url: "https://github.com/0xTijan/tic-tac-toe-ai",
    github: "https://github.com/0xTijan/tic-tac-toe-ai",
    technologies: getSkill(["rust"])
  },
  {
    name: "Web3UIKit",
    description: "Odprtokodni sodelavec za Web3UIKit – čudovite in lahke komponente uporabniškega vmesnika za razvijalce web3 aplikacij.",
    image: Web3UIKit,
    url: "https://web3uikit.com/",
    github: "https://github.com/web3ui/web3uikit",
    technologies: getSkill(["Open-Source Contribution", "react", "typescript", "css"])
  },
  {
    name: "Osebna Stran",
    description: "Osebna stran, ki prikazuje moje blockhain projekte in dosežke.",
    image: Portfolio,
    url: "https://tijan.dev/",
    github: "https://github.com/0xTijan/portfolio",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  {
    name: "Sodelovalna Aplikacija",
    description: "Spletna sodelovalna aplikacija z zasebnimi ter javnimi sobami za klepet in risanje po beli tabli v realnem času. Lahko tudi minta NFT-je!",
    image: Whiteboard,
    url: "https://projects.tijan.dev/whiteboard",
    github: "https://github.com/0xTijan/collaborative-canvas",
    technologies: getSkill(["react", "typescript", "nodejs", "socket.io" , "solidity"])
  },
  {
    name: "Terminal 2048",
    description: "Izvedba priljubljene igre 2048 v terminalu, napisana v Rustu. Igranje na različnih velikostih mreže - težavnosti.",
    image: TerminalGame,
    url: "https://github.com/0xtijan/terminal-2048",
    github: "https://github.com/0xtijan/terminal-2048",
    technologies: getSkill(["rust"]),
  },
  {
    name: "Token-Gated Klepet",
    description: "Skupine za klepet z omejitvami na podlagi stanja uporabnikovih tokenov ('token-gating'), narejeno v 7-dnevnem Moralis izzivu.",
    image: SimpleChat,
    url: "https://projects.tijan.dev/simple-chat",
    github: "https://github.com/0xTijan/simple-crypto-chat",
    technologies: getSkill(["html", "css", "javascript" ])
  },
  {
    name: "Met Kovanca",
    description: "Igra met kovanca za več igralcev, ki uporablja pametne pogodbe in Chainlink VRF za določitev zmagovalca na decentraliziran način.",
    image: Coin,
    url: "https://projects.tijan.dev/coin-flip",
    github: "https://github.com/0xTijan/coin-flip",
    technologies: getSkill(["react", "solidity", "hardhat", "typescript", "chainlink" ])
  },
  {
    name: "Diamond Hands",
    description: "Zabaven blockchain aplikacija, ki vam prepreči panično prodajo kriptovalut tako, da jih zaklenete v pametno pogodbo.",
    image: Diamond,
    url: "https://projects.tijan.dev/diamond-hands",
    github: "https://github.com/0xTijan/diamond-hands",
    technologies: getSkill(["solidity", "hardhat", "react", "javascript" ])
  },
  {
    name: "Crypto Sledilnik",
    description: "Uporabniki si lahko ogledajo vse statistike o 250 najboljših kriptovalutah in ustvarijo svoj osebni portfelj.",
    image: Crypto,
    url: "https://projects.tijan.dev/crypto-tracker",
    github: "https://github.com/0xTijan/crypto-tracker",
    technologies: getSkill(["react", "javascript" , "css", "html", "git", "npm"])
  },
  {
    name: "Mobilna Denarnica",
    description: "Prikazuje on-chain statistiko uporabnika. Uporabnik lahko doda osebne kontakte za enostaveno pošiljanje žetonov.",
    image: Mobile,
    url: "",
    github: "https://github.com/0xTijan/mobile-wallet",
    technologies: getSkill(["react native", "javascript" , "css", "npm"])
  },
  {
    name: "BananaPay V1",
    description: "Plačilni sistem za prejemanje ponavljajočih se plačil v kriptovalutah. (prva verzija)",
    image: BananaPayV1,
    url: "https://bananapay-v1.tijan.dev/",
    github: "",
    technologies: getSkill(["react", "typescript", "css", "solidity", "chainlink", "hardhat"])
  },
];