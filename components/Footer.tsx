import Image from "next/image";
import WebFooterLogo from "../public/footer_logo_web.svg";
import FbLogo from "../public/fb.svg";
import TwitterLogo from "../public/twitter.svg";
import LinkedinLogo from "../public/linkedin.svg";
import DribbleLogo from "../public/dribble.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-primary flex items-center justify-center md:py-[70px] py-10 text-white">
      <div className="flex items-center flex-col md:gap-[78px] gap-[48px]">
        <Image
          src={WebFooterLogo}
          alt="Footer logo"
          width={175}
          height={48}
          className="hidden md:block"
        />
        <Image
          src={WebFooterLogo}
          alt="Footer logo"
          width={116}
          height={32}
          className="block md:hidden"
        />
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-8">
            <Link href={"/"} className="block">
              <Image src={TwitterLogo} alt="Twitter" width={24} height={24} />
            </Link>
            <Link href={"/"} className="block">
              <Image src={LinkedinLogo} alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href={"/"} className="block">
              <Image src={FbLogo} alt="Facebook" width={24} height={24} />
            </Link>
            <Link href={"/"} className="block">
              <Image src={DribbleLogo} alt="Dribble" width={24} height={24} />
            </Link>
          </div>
          <div className="mt-6 text-base font-normal">
            &copy; 2023 Lemonhive. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
