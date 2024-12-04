import React from "react";
import {
  FaWallet,
  FaExchangeAlt,
  FaDownload,
  FaHandPointRight,
} from "react-icons/fa";
import styles from "../css_modules/BuySellAAAStyles.module.css";

const BuySellAAA: React.FC = () => {
  return (
    <div className={styles.buySellContainer}>
      <header className={styles.pageHeader}>
        <h1>Buy and Sell AAA Tokens</h1>
        <p>
          Follow these four simple steps to acquire, manage, and trade your AAA
          tokens. Learn how to interact with Algorand Standard Assets (ASAs)
          with detailed guides and video tutorials.
        </p>
      </header>

      {/* Step 1: Acquire ALGO */}
      <section className={styles.section}>
        <h2>
          <FaHandPointRight className={styles.sectionIcon} /> Step 1: Acquire
          Algorand (ALGO)
        </h2>
        <p>
          Start by acquiring Algorand (ALGO), which is required for buying AAA
          tokens. Use one of the trusted cryptocurrency wallets or exchanges
          listed below:
        </p>
        <div className={styles.videoContainer}>
          <h3>Video Tutorial: How to Acquire ALGO</h3>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/exampleVideo1"
            title="Acquire ALGO"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Step 2: Download a Wallet */}
      <section className={styles.section}>
        <h2>
          <FaDownload className={styles.sectionIcon} /> Step 2: Select and
          Download an Algorand DeFi-Compatible Wallet
        </h2>
        <p>
          Choose a secure wallet that supports Algorand Standard Assets. Follow
          the walkthroughs below to set up your wallet and store your private
          keys safely:
        </p>
        <ul className={styles.walletList}>
          <li>
            <FaWallet className={styles.icon} />{" "}
            <a
              href="https://perawallet.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pera Wallet
            </a>
          </li>
          <li>
            <FaWallet className={styles.icon} />{" "}
            <a
              href="https://defly.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Defly Wallet
            </a>
          </li>
          <li>
            <FaWallet className={styles.icon} />{" "}
            <a
              href="https://www.ledger.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ledger Nano X
            </a>
          </li>
          <li>
            <FaWallet className={styles.icon} />{" "}
            <a
              href="https://www.exodus.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Exodus Wallet
            </a>
          </li>
          <li>
            <FaWallet className={styles.icon} />{" "}
            <a
              href="https://lute.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lute Wallet
            </a>
          </li>
        </ul>
        <div className={styles.videoContainer}>
          <h3>Video Tutorial: Wallet Setup</h3>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/exampleVideo2"
            title="Wallet Setup"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Step 3: Send ALGO and Opt Into ASA */}
      <section className={styles.section}>
        <h2>
          <FaHandPointRight className={styles.sectionIcon} /> Step 3: Send ALGO
          and Opt Into Your Chosen ASA
        </h2>
        <p>
          Once your wallet is set up, send ALGO to it. Use the wallet interface
          to opt into the AAA token by sending an opt-in transaction.
        </p>
        <div className={styles.videoContainer}>
          <h3>Video Tutorial: Opt Into ASA</h3>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/exampleVideo3"
            title="Opt Into ASA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Step 4: Swap ALGO for ASA */}
      <section className={styles.section}>
        <h2>
          <FaExchangeAlt className={styles.sectionIcon} /> Step 4: Swap Your
          Algorand to ASA, or ASA to Algorand
        </h2>
        <p>
          Use a decentralized exchange such as Tinyman or AlgoFi to swap ALGO
          for AAA tokens. Always verify the token ID before transacting.
        </p>
        <div className={styles.swapButtonContainer}>
          <a
            href="https://app.tinyman.org/swap?asset_in=0&asset_out=2004387843&use_router=true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Swap on Tinyman <FaExchangeAlt className={styles.icon} />
          </a>
          <a
            href="https://vestige.fi/asset/2004387843"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Swap on Vestige <FaExchangeAlt className={styles.icon} />
          </a>
        </div>
        <div className={styles.videoContainer}>
          <h3>Video Tutorial: Swapping Tokens</h3>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/exampleVideo4"
            title="Swapping Tokens"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default BuySellAAA;
