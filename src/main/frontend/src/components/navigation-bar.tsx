import React from "react";
import styles from "../../public/Nav.module.css";
import * as data from "./links.json";
import { Link } from "../model/link";
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

interface NavigationBarProps {
  links: Link[];
}

function Links({ links }: NavigationBarProps): JSX.Element {
  return (
    <div className={styles["links-container"]}>
      {links.map((link: Link) => {
        return (
          <div key={link.href} className={styles["link"]}>
            <a href={link.href}>{link.label}</a>
          </div>
        );
      })}
    </div>
  );
}

export default function NavigationBar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <Links links={links} />
    </nav>
  );
}
