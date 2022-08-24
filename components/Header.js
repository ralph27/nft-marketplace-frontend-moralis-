import { useEffect } from "react";
import { useMoralis } from "react-moralis";

function ManualHeader() {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (window.localStorage.getItem("connected")) {
      enableWeb3();
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`account changed to ${account}`);
      if(account === null) {
         window.localStorage.removeItem("connected")
         deactivateWeb3()
         console.log("Null account found");
      }
    });
  }, []);

  return (
    <nav>
      {account ? (
        <div>
          Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
        </div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            window.localStorage.setItem("connected", "injected");
          }}
          disabled={isWeb3EnableLoading}
        >
          Connect
        </button>
      )}
    </nav>
  );
}

export default ManualHeader;