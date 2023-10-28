import { useAddress, useSDK } from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import SignIn from "../components/SignIn";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const { data: session } = useSession();
  const sdk = useSDK();

  return (
    <div>
      <div className={styles.container} style={{ marginTop: 0 }}>
        <SignIn />

        {address && session && (
          <div className={styles.collectionContainer}>    
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;