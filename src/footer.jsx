import { LinkedIn, Mail, React, Tailwind, Twitter } from "./svgs";

export const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col items-center ">
      <div className="social-links flex flex-row items-center justify-between w-24">
        <a href="https://www.linkedin.com/in/victor-immanuel-81363a216/">
          <LinkedIn />
        </a>
        <a href="https://twitter.com/chrollo1402">
          <Twitter />
        </a>
        <a href="mailto: Victor20030214@gmail.com">
          <Mail />
        </a>
      </div>
      <div className="rights-reserved flex gap-3 mt-3 mb-5">
        Built with
        <Tailwind /> and <React />
      </div>
    </footer>
  );
};
