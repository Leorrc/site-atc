import { DivUlNav } from "./styles";

interface Link {
  title: string;
  url: string;
}

export interface LinksProps {
  links: Link [];
}

function Links({ links }: LinksProps) {
  return (
    <DivUlNav>
      <ul>
        {
        links.map((link) => (
          <li>
            <a href={link.url}>
              {link.title}
            </a>
          </li>
        ))
        }
      </ul>
    </DivUlNav>
  );
}

export default Links;
