import Conference from "@/components/Conference";
import ConferenceCard from "@/components/ConferenceCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Image
        src={"/RightEllipse.svg"}
        alt="bg"
        width={412}
        height={412}
        className="select-none absolute top-0 right-0 md:z-40 -z-50"
      />
      <Image
        src={"/LeftEllipse.svg"}
        alt="bg"
        width={412}
        height={412}
        className="select-none absolute top-0 left-0 md:z-40 -z-50"
      />
      <section className="container my-14 md:grid md:grid-cols-3 gap-4 md:items-end flex flex-col items-center justify-center">
        <div className="md:col-span-2">
          <span className="relative">
            <div className="md:text-[140px] text-5xl text-primary font-bold text-right leading-none relative">
              <span className="relative">
                React
                <Image
                  src={"/crown.svg"}
                  alt="ting"
                  width={85}
                  height={82}
                  className="absolute -top-5 -left-12 hidden md:block"
                />
                <Image
                  src={"/crown.svg"}
                  alt="ting"
                  width={41}
                  height={40}
                  className="absolute -top-5 -left-8 md:hidden block"
                />
              </span>
              <Image
                src={"/line.svg"}
                alt="line"
                width={940}
                height={832}
                className="absolute top-0 right-0 translate-x-[30vw] -z-10 select-none md:block hidden"
              />
              <Image
                src={"/line.svg"}
                alt="line"
                width={342}
                height={432}
                className="absolute top-0 right-0 translate-x-[45vw] -translate-y-4 -z-10 select-none md:hidden block"
              />
            </div>
            <div className="md:text-[140px] text-5xl text-primary font-bold text-right leading-none">
              <span className="relative">Conference</span>
            </div>
          </span>
          <div className="hidden md:grid grid-cols-2 mt-8">
            <div className="relative">
              <Image
                src={"/leftHero.svg"}
                alt="left hero"
                width={330}
                height={420}
              />
              <Image
                src={"/leftHeroHelp.svg"}
                alt="help"
                width={196}
                height={189}
                className="absolute bottom-0 translate-x-full translate-y-24 -z-10"
              />
            </div>
            <div className="flex flex-col gap-20">
              <div>
                Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
                id fermentum..id fermentum.In quis diam turpis quam id
                fermentum.
              </div>
              <div className="bg-secondary w-[290px] py-[20px] px-[80px] flex items-center justify-center gap-2 rounded-full cursor-pointer font-medium">
                Buy Tickets
                <Image
                  alt="arrow"
                  src={"arrowRight.svg"}
                  width={20}
                  height={20}
                />
              </div>
              <Link
                href={"#footer"}
                className="flex items-center justify-center"
              >
                <span className="rotate-[270deg] flex">
                  <Image
                    src={"/arrowhead.svg"}
                    alt="arrow"
                    height={16}
                    width={16}
                    className="rotate-90"
                  />
                  Scroll Down
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:block hidden">
          <span className="relative">
            <Image
              src={"/rightHero.svg"}
              alt="hero"
              width={550}
              height={560}
              className="-translate-y-28"
            />
            <Image
              src={"/star.svg"}
              alt="star"
              width={132}
              height={132}
              className="absolute bottom-0 left-0 -translate-x-12 -translate-y-10"
            />
          </span>
        </div>
        <div className="md:hidden">
          <div className="font-normal">
            Lorem uis diam turpis quam id fermetum.In quis diam turpis quam id
            fermentu me.In quis diam turpis quam id fermentum.
          </div>
          <div className="flex items-center justify-center my-12">
            <div className="bg-secondary cursor-pointer z-[39] w-fit py-[16px] px-[24px] flex items-center justify-center gap-2 rounded-full font-medium">
              Buy Tickets
              <Image
                alt="arrow"
                src={"arrowRight.svg"}
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="relative">
              <Image
                src={"/rightHero.svg"}
                alt="hero"
                width={327}
                height={333}
              />
              <Image
                src={"/star.svg"}
                alt="star"
                width={94}
                height={94}
                className="absolute bottom-0 right-0 translate-x-8 translate-y-8"
              />
            </span>
          </div>
          <div className="flex items-center justify-between mt-14">
            <Image
              src={"/leftHero.svg"}
              alt="left hero"
              width={157}
              height={200}
            />
            <Image
              src={"/leftHeroHelp.svg"}
              alt="help"
              width={103}
              height={100}
              className="translate-x-1/2"
            />
          </div>
        </div>
      </section>

     <Conference/>

      <section className="bg-[#F9FAFB] py-24">
        <h1 className="md:text-5xl text-xl font-bold text-center text-primary mb-8">
          Our Sponsor
        </h1>
        <h4 className="font-medium text-xs md:text-base text-center text-[#667085] mb-8">
          🥇 Gold Sponsor
        </h4>
        <div className="flex items-center flex-wrap justify-center gap-14">
          <Image
            className="md:block hidden"
            src={"/LayersLogo.svg"}
            alt="Layers"
            width={218}
            height={65}
          />
          <Image
            className="md:hidden block"
            src={"/LayersLogo.svg"}
            alt="Layers"
            width={106}
            height={32}
          />
          <Image
            className="md:block hidden"
            src={"/sisyphus.svg"}
            alt="sisyphus"
            width={218}
            height={65}
          />
          <Image
            className="md:hidden block"
            src={"/sisyphus.svg"}
            alt="sisyphus"
            width={112}
            height={32}
          />
        </div>
        <h4 className="font-medium text-xs md:text-base text-center text-[#667085] my-8">
          🥈Silver Sponsors
        </h4>
        <div className="flex items-center flex-wrap justify-center gap-14">
          <Image
            className="md:block hidden"
            src={"/circooles.svg"}
            alt="circooles"
            width={274}
            height={66}
          />
          <Image
            className="md:hidden block"
            src={"/circooles.svg"}
            alt="circooles"
            width={133}
            height={32}
          />
          <Image
            className="md:block hidden"
            src={"/catalog.svg"}
            alt="catalog"
            width={239}
            height={66}
          />
          <Image
            className="md:hidden block"
            src={"/catalog.svg"}
            alt="catalog"
            width={116}
            height={32}
          />
          <Image
            className="md:block hidden"
            src={"/gofore.svg"}
            alt="gofore"
            width={280}
            height={48}
          />
          <Image
            className="md:hidden block"
            src={"/gofore.svg"}
            alt="gofore"
            width={122}
            height={48}
          />
        </div>
        <h4 className="font-medium text-xs md:text-base text-center text-[#667085] my-8">
          🥉Bronze Sponsors
        </h4>
        <div className="flex items-center flex-wrap justify-center gap-14">
          <Image
            className="md:block hidden"
            src={"/sis.svg"}
            alt="sisyphus"
            width={252}
            height={72}
          />
          <Image
            className="md:hidden block"
            src={"/sis.svg"}
            alt="sisyphus"
            width={112}
            height={32}
          />
          <Image
            className="md:block hidden"
            src={"/quotient.svg"}
            alt="quotient"
            width={279}
            height={66}
          />
          <Image
            className="md:hidden block"
            src={"/quotient.svg"}
            alt="quotient"
            width={135}
            height={32}
          />
          <Image
            className="md:block hidden"
            src={"/LayersLogo.svg"}
            alt="Layers"
            width={217}
            height={65}
          />
          <Image
            className="md:hidden block"
            src={"/LayersLogo.svg"}
            alt="Layers"
            width={106}
            height={32}
          />
          <Image
            className="md:block hidden"
            src={"/cir.svg"}
            alt="Layers"
            width={274}
            height={66}
          />
          <Image
            className="md:hidden block"
            src={"/cir.svg"}
            alt="Layers"
            width={133}
            height={32}
          />
        </div>
      </section>
    </div>
  );
}
