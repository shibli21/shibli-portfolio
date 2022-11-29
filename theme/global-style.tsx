import { Roboto_Mono, Secular_One } from "@next/font/google";

const primary = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const secondary = Secular_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const GlobalStyle = () => {
  return (
    <style jsx global>
      {`
        :root {
          --primary-font: ${primary.style.fontFamily};
          --secondary-font: ${secondary.style.fontFamily};
        }
      `}
    </style>
  );
};
