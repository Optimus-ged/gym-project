import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-100 py-20">
      <div className="mx-auto w-5/6 gap-8 md:flex">
        <div className="basis-1/2">
          <img src={Logo} alt={`${Logo}`} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            consequuntur, distinctio eaque hic soluta impedit quia ad fuga
            eligendi necessitatibus, laboriosam a sunt dolor architecto ea
            dolorem sit aut et.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-20 basis-1/4 md:mt-0">
          <p className="font-bold">Links</p>
          <p className="my-5">Lorem ipsum dolor</p>
          <p className="my-5">Lorem ipsum dolor</p>
          <p className="my-5">Lorem ipsum dolor</p>
        </div>
        <div className="mt-20 basis-1/4 md:mt-0">
          <p className="font-bold">Contact us</p>
          <p className="my-5">Lorem ipsum dolor eaque hic soluta imped</p>
          <p className="my-5">(243) 971 945 367</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
