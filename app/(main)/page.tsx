import Image from "next/image";
import GamersCarousel from "../components/GamersCarousel";
import OmoriCarousel from "../components/OmoriCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner1Full from "../../public/img/collection1_sm_small1_2000x.jpg";
import Banner2Full from "../../public/img/211008_Omocat_0197_collab_2000x.jpg";
import Banner3Full from "../../public/img/drawfest_banner_4_2000x.png";
import Banner4Full from "../../public/img/220321_OMOCAT__8244_small_c4b70499-8bcb-4bfb-a897-de69ee563931_2000x.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <GamersCarousel />
        <OmoriCarousel />
      </div>
      <div className="relative">
        <Link
          href="/collections/omori"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white w-24 p-4 text-center text-sm"
        >
          OMORI
        </Link>
        <Image
          src={Banner1Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="relative">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white w-60 p-4 text-center text-sm">
          OMOCAT x hololive Engish
        </p>
        <Image
          src={Banner2Full}
          alt="holomyth"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="relative">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white w-48 p-4 text-center text-sm">
          OMOCAT ORIGINAL
        </p>
        <Image
          src={Banner3Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="relative">
        <a
          href="https://www.pokemoncenter.com/omocat"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white w-60 p-4 text-center text-sm"
        >
          OMOCAT x Pokémon© Center
        </a>
        <Image
          src={Banner4Full}
          alt="pkmn"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
