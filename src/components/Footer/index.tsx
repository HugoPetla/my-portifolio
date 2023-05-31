import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <div className="py-8 px-16 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <span>
          Built with <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link href="/" className="underline" target="_blank">
            Hugo Petla
          </Link>
        </span>
        <Link href="/" className="underline" target="_blank">
          Say hello
        </Link>
      </div>
    </footer>
  );
};
