import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { projects, Project } from "./config";
import { AiFillGithub } from "react-icons/ai"
import { Skill } from "../skills/config";
import "./Problem.css";

const Problem = () => {
  return(
    <div className="bg-projects">
      <p className="heading">Why Web3</p>
      <p className="text">Why I'm so passionate about blockchains ...</p>
      <br></br>
      <Text fontSize="3xl">
        TLDR: crypto matter because, in an increasingly digital society, it
        enables
      </Text>
      <br></br>
      <UnorderedList>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              Robust guarantees of trust between strategic actors
            </Text>
          </div>
        </ListItem>
        <ListItem>
          <div className="about-text-desc">
            <Text fontSize="3xl">
              Transparency which enables accountability in participants
            </Text>
          </div>
        </ListItem>
      </UnorderedList>
      <br></br>
      <Text fontSize="3xl">
        Consider the prisoner’s dilemma. Two inmates who don’t necessarily know
        what the other will do, perhaps even have a conflict of interest -
        always snitch on each other. There is no retribution, so they optimise
        for individual interest, not collective welfare. Overall, both suffer
        more than they would have if they had coordinated, been able to trust
        each other reliably, and not snitched.
      </Text>
      <br></br>
      <Text fontSize="3xl">
        If we look around, a lot of the same happens in situations like Nuclear
        Disarmament. A nuclear war cannot be won, so it shouldn’t be fought. The
        only value in having nukes – to ensure they will never be used. And no
        country can trust another to reduce their stockpile first. Maybe this is
        a bit much. Just think about why college dorms are filthy despite the
        roommates “knowing” they should clean up.
      </Text>
      <br></br>
      <Text fontSize="3xl">
        This problem becomes 1000X online. There, many of our interactions are
        between strangers who can’t trust each other and have no expectation of
        seeing each other again or facing the consequences of making the group
        worse off. This makes it a one-off game – you care about maximising
        returns for yourself ONLY.
      </Text>
      <br></br>
      <Text fontSize="3xl">
        Solving this, to me, is the real promise of blockchain, crypto and DAOs.
        A bedrock of digital, cryptographic truth. For when we need truth over
        trust, transparency-enabled accountability. So, we can organize more
        freely around our causes and beliefs.
      </Text>
    </div>
  )
}

export default Problem;