import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useMoralisQuery, useMoralis } from "react-moralis";
import NFTBox from "../components/NFTBox";

export default function Home() {
  const { isWeb3Enabled } = useMoralis();
  const { data: listedNfts, isFetching } = useMoralisQuery(
    // Table Name
    "ActiveItem",
    // Function for the query
    (query) => query.limit(10).descending("tokenId")
  );

  console.log(listedNfts);

  return (
    <div className="container mx-auto">
      <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
      <div className="flex flex-wrap">
        {isWeb3Enabled ? (
          isFetching ? (
            <div>Loading...</div>
          ) : (
            listedNfts.map((nft) => {
              console.log(nft.attributes);
              const { price, nftAddress, tokenId, marketplaceAddress, seller } =
                nft.attributes;
              return (
                <div>
                  <NFTBox
                    key={`${nftAddress}${tokenId}`}
                    marketplaceAddress={marketplaceAddress}
                    price={price}
                    nftAddress={nftAddress}
                    tokenId={tokenId}
                    seller={seller}
                  />
                </div>
              );
            })
          )
        ) : (
          <div>Web3 Not Enabled</div>
        )}
      </div>
    </div>
  );
}
