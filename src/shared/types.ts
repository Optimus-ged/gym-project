export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Contact = "contact",
}

export interface BenefitsType{
  icon : JSX.Element;
  title : string;
  description : string;
}

export interface ClassType{
  name : string,
  description? : string,
  image : string
}