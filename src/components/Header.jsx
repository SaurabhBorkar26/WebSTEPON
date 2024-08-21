import React from 'react';

function Header({ title, desc }) {
  return (
    <div className="my-16 flex items-center justify-center flex-col px-4 sm:px-16 text-center">
      <h2 className="font-main text-4xl font-bold text-[#534998]">{title}</h2>
      <span className="-mt-3 mb-2 text-green2 text-h2">━━━</span>
      <p className="text-pageHeader tracking-wide text-[#534998]">
        {desc}
      </p>
    </div>
  );
}

export default Header;
