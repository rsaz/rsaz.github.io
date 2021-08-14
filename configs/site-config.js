import {
  FaGithub,
  FaDev,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Richard Zampieri. All Rights Reserved.`,
  author: {
    name: "Richard Zampieri",
    accounts: [
      {
        url: "https://github.com/rsaz",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://dev.to/rsaz",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://www.linkedin.com/in/richardzampieri/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:br.developer@gmail.com",
        label: "Richard Zampieri",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
