import * as React from "react";

export interface ILogoProps {
  size: number;
}


export function Logo(props: ILogoProps) {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 132.292 132.292"
    >
      <text
        xmlSpace="preserve"
        x="86.179"
        y="92.982"
        style={{
          fontSize: "10.5833px",
          lineHeight: "1.25",
          fontFamily: "Futura",
          strokeWidth: ".264583",
        }}
        transform="translate(-27.214 -77.863)"
      />
      <path
        d="M127.366 171.45q0-2.881-.68-5.255-.664-2.392-2.113-4.661-1.431-2.287-3.84-4.906l3.212-2.897q2.898 2.496 4.87 5.132 1.99 2.636 3.055 5.76 1.083 3.108 1.083 6.826 0 3.718-1.083 6.843-1.065 3.107-3.055 5.743-1.972 2.636-4.87 5.132l-3.212-2.897q2.549-2.776 3.98-5.028 1.432-2.252 2.042-4.556.611-2.304.611-5.237zm-31.05 14.383h17.457v4.33H96.316Zm-20.942 0H92.83v4.33H75.374Zm-20.943 0h17.457v4.33H54.43Zm-17.382-30.688 14.646 30.461-4.311 1.973-14.646-30.462zm117.929-31.962-11.33 6.616 11.33 6.494-2.497 3.928-13.598-8.45v-3.91l13.686-8.483zm-27.612 5.36q0-2.88-.68-5.255-.664-2.391-2.113-4.66-1.431-2.288-3.84-4.906l3.212-2.898q2.898 2.496 4.87 5.132 1.99 2.636 3.055 5.761 1.083 3.107 1.083 6.825 0 3.719-1.083 6.843-1.065 3.108-3.055 5.744-1.972 2.636-4.87 5.132l-3.212-2.898q2.549-2.776 3.98-5.027 1.432-2.252 2.042-4.557.611-2.304.611-5.237zm-26.214 8.92q0-1.048.524-1.938.523-.89 1.414-1.414.907-.541 1.955-.541 1.047 0 1.937.541.908.524 1.432 1.414.524.89.524 1.938 0 1.047-.524 1.937-.524.89-1.432 1.414-.89.542-1.937.542-1.048 0-1.955-.542-.89-.523-1.414-1.414-.524-.89-.524-1.937zm-18.43-8.92q0 2.932.612 5.236.61 2.305 2.042 4.557 1.432 2.251 3.98 5.027l-3.212 2.898q-2.897-2.496-4.887-5.132-1.973-2.636-3.055-5.744-1.065-3.124-1.065-6.843 0-3.718 1.065-6.825 1.082-3.125 3.055-5.76 1.99-2.637 4.887-5.133l3.212 2.898q-2.409 2.618-3.857 4.905-1.432 2.27-2.113 4.661-.663 2.374-.663 5.254zm-49.239 14.384h38.405v4.329H33.483Zm62.833-42.907h17.457v4.33H96.316Z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontSize: "34.0402px",
          lineHeight: "1.25",
          fontFamily: '"Fira Code"',
          strokeWidth: ".851007",
        }}
        transform="translate(-27.214 -77.863)"
      />
    </svg>
  );
}
