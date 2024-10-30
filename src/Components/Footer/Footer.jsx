import { Link } from "react-router-dom";

export const Footer = () => {
    return (
      <div className="">
        <footer className="flex flex-col md:flex-row justify-around py-4 w-full items-center px-4 md:px-6 border-y-2 dark:border-[#5e5e5e] ">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Akhil Kumar. All rights reserved.
          </p>
          <nav className=" hidden fle flex-col md:flex-row items-center sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#terms-of-services"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#privacy"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    );
}
