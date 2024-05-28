import WalletTable from "@/components/wallet";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <ul className="p-5">
        <li>
          <Link href="/wallet">Wallet Page</Link>
        </li>
      </ul>
    </main>
  );
}
