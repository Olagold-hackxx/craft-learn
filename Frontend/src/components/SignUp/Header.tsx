import ConnectWallet from "../ConnectWallet";
// import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary h-full w-screen flex justify-between z-50 border-b border-[#F9F9F7] shadow-md px-4 md:p-4 md:px-16 items-center font-chivo">
      <div className="">
        <img src="/logo.png" alt="CraftLink logo" />
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Header;
