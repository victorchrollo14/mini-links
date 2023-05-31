import { ExtLink, Github } from "./svgs";
import { itemsList } from "./data";

export const Body = () => {
  return (
    <section className="main-body my-5">
      <ul className="flex flex-col gap-5 cursor-pointer">
        {itemsList.map(({ name, githubLink, liveLink }) => {
          return (
            <li
              className="flex flex-row w-full justify-between bg-drkBlue
              text-white py-2 px-3 rounded-nd border-white border-2 
              hover:-translate-x-3 hover:-translate-y-2 hover:shadow-nd transition-transform duration-75 ease-linear"
            >
              <h1 className="font-mono" >{name}</h1>
              <div className="links-section flex flex-row gap-5">
                <div className="github cursor-pointer">
                  <a href={githubLink}>
                    {" "}
                    <Github />
                  </a>
                </div>
                <div className="ext-link w-6">
                  <a href={liveLink}>
                    <ExtLink />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
