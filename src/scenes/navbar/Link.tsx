import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: String;
  selectedPage: SelectedPage;
  isMenuToggled?: boolean;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled?: (value: boolean) => void;
};

function Link({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
  isMenuToggled,
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const buttonClicked = () => {
    setSelectedPage(lowerCasePage);
    if (isMenuToggled) setIsMenuToggled!(!isMenuToggled);
  };

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
                transition duration-500 hover:text-primary-300`}
      onClick={buttonClicked}
      href={`#${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
