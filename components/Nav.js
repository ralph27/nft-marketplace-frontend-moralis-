import Link from "next/link";
import ManualHeader from "./Header";

function Nav() {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
      <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
      <div className="flex flex-row items-center">
        <Link href="/">
          <a className="mr-3 p-6">Home</a>
        </Link>
        <Link href={"/sell-nft"}>
          <a className="mr-3 p-6">Sell NFT</a>
        </Link>
        <ManualHeader />
      </div>
    </nav>
  );
}

export default Nav;
