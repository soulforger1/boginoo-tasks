import React from "react";

export const DownArrow = ({ className }) => {
  /*
		Figma дээрх зураас icon -ний svg файлыг export хийж хуулж тавих

		return (
			<svg >
				<path >
			</svg>
		)
	*/

  return (
    <svg
      className={className}
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L10.5 10.5L19 2"
        stroke="#02B589"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
