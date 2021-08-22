import React, { ButtonHTMLAttributes } from "react";

import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  text: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { loading, text, onClick, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className="p-2 rounded-lg bg-blueGray-800 shadow-sm hover:bg-blueGray-900 focus:outline-none focus:ring-2 focus:ring-blueGray-400"
      onClick={onClick}
    >
      {loading ? (
        <Spinner text="loading" />
      ) : (
        <p className="font-sans text-sm sm:text-base font-normal text-white">
          {text}
        </p>
      )}
    </button>
  );
}

export default Button;
