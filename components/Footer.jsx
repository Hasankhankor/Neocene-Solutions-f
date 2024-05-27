import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black">
      {/* Copy Right */}
      <div className="py-10 bg-black text-white text-center lg:justify-between lg:flex">
        <div className="pb-4 lg:pb-0">
          <p>&copy;2024 Neocene Solutions rights reserved </p>
        </div>
        <div className="">
          <Link className="p-4 hover:underline" href="/privacy">
            Privacy
          </Link>
          <Link className="p-4 hover:underline" href="/terms">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}