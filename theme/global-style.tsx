import { Poppins } from "@next/font/google";

const customFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const GlobalStyle = () => {
  return (
    <style jsx global>
      {`
        :root {
          --custom-font: ${customFont.style.fontFamily};
        }
        html {
          font-family: var(--custom-font);
        }
      `}
    </style>
  );
};
