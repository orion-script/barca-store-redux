import React from "react";

function Footer() {
  return (
    <footer className="w-full h-[5rem] bg-slate-400 flex flex-col justify-end text-center">
      <p className="pb-1">
        Designed By{" "}
        <a
          href="https://github.com/Hadestech01"
          target="_blank"
          className="border-b-2 border-gray-800 italic"
        >
          HadesCodes
        </a>
      </p>
    </footer>
  );
}

export default Footer;
