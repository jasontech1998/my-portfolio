import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LinkItem {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
}

const linkItems: LinkItem[] = [
  {
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1739056238859-317dfe7ac0c6?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Web3 Hackathon Event",
    category: "Press",
    title:
      "Decrypt: Breakthrough in Smart Contract Security Could Prevent 95% of Common Vulnerabilities",
  },
  {
    href: "#",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1725984169207-057f47befaa6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Press",
    imageAlt: "Crypto Mining Facility",
    title:
      "Cointelegraph: Sustainable Mining Initiative Transforms Bitcoin's Energy Consumption Profile",
  },
  {
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1739056352870-17df21abfab8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Press",
    imageAlt: "Blockchain Development Team",
    title:
      "The Block: Revolutionary Zero-Knowledge Protocol Makes Cross-Chain Trading 10x More Efficient",
  },
  {
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1703602028618-254e40bbe790?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Press",
    imageAlt: "DeFi Summit Conference",
    title:
      "CoinDesk: New Layer-2 Solution Achieves Record-Breaking Transaction Speeds on Ethereum",
  },
];

export function ListArticleLink() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {linkItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="group flex flex-col overflow-hidden"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col flex-1 min-h-[200px] justify-between">
            <div>
              <div className="text-sm font-medium text-muted-foreground mt-4">
                {item.category}
              </div>
              <h4 className="mt-2 text-lg font-semibold line-clamp-3">
                {item.title}
              </h4>
            </div>
            <>
              <div className="relative h-px w-full my-4">
                <div className="absolute inset-0 bg-gray-300" />
                <div className="absolute inset-0 w-0 bg-[#0e2b2f] transition-all duration-700 ease-in-out group-hover:w-full" />
              </div>
              <div className="flex items-center text-sm font-medium text-primary justify-between">
                <span>Read more</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </>
          </div>
        </Link>
      ))}
    </div>
  );
}
