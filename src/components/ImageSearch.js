import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm-7.363 18.764c1.828 1.989 4.451 3.236 7.363 3.236h.004l-4.618-7.998-2.749 4.762zm16.023-1.764h-9.233l2.749 4.762c2.767-.615 5.104-2.378 6.484-4.762zm-18.201-8c-.298.947-.459 1.955-.459 3 0 1.823.489 3.533 1.343 5.005l2.889-5.003-.001-.002.003-.002 1.731-2.998h-5.506zm18.203-1.997l-4.617 7.997h5.496c.298-.947.459-1.955.459-3 0-1.82-.487-3.526-1.338-4.997zm-6.927 1.997h-3.461l-1.733 3.002 1.731 2.998h3.464l1.731-2.999-1.732-3.001zm2.887 1.001l2.747-4.758c-1.828-1.992-4.452-3.242-7.366-3.243l4.619 8.001zm-6.792-7.764c-2.769.613-5.109 2.377-6.49 4.763h9.24l-2.75-4.763z" />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Image Search</span>
      </div>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-white py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search..."
          />

          <button
            class="bg-blue-600  text-white rounded-full p-2 hover:bg-teal-500 focus:outline-none w-12 h-12 flex items-center justify-center"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
