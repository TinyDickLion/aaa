import {
  useEffect,
  useState,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";
import { PeraWalletContext } from "../PeraWalletContext";

const PeraWalletButton = forwardRef(({ onConnect }: any, ref) => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const isConnectedToPeraWallet = !!accountAddress;

  const peraWallet = useContext(PeraWalletContext);

  useImperativeHandle(ref, () => ({
    disconnectWallet: handleDisconnectWalletClick, // Expose the disconnect function
  }));

  useEffect(() => {
    try {
      if (peraWallet) {
        peraWallet
          .reconnectSession()
          .then((accounts) => {
            peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

            if (accounts.length) {
              const address = accounts[0];
              setAccountAddress(address);
              onConnect(address);
            }
          })
          .catch((e: any) => console.log(e));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleConnectWalletClick() {
    try {
      if (peraWallet) {
        peraWallet
          .connect()
          .then((newAccounts: any) => {
            peraWallet.connector?.on("disconnect", handleDisconnectWalletClick);

            const address = newAccounts[0];
            setAccountAddress(address);
            onConnect(address);
          })
          .catch((error: any) => {
            if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
              console.log(error);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleDisconnectWalletClick() {
    if (peraWallet) {
      peraWallet.disconnect();
    }
    setAccountAddress(null);
    onConnect(null);
  }

  return (
    <button
      style={{
        width: "25%",
        padding: "10px",
        backgroundColor: isConnectedToPeraWallet ? "red" : "black",
        borderRadius: "8px",
        cursor: "pointer",
        border: "none",
      }}
      onClick={
        isConnectedToPeraWallet
          ? handleDisconnectWalletClick
          : handleConnectWalletClick
      }
    >
      <h2
        style={{
          color: "white",
          fontSize: "16px",
          margin: "0",
          textAlign: "center",
        }}
      >
        {isConnectedToPeraWallet
          ? "Disconnect Wallet"
          : "Connect Wallet to Sign up / Log in"}
      </h2>
    </button>
  );
});

export default PeraWalletButton;