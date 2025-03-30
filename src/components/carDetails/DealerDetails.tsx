import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const DealerDetails = () => {
  return (
    <div>
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        Dealer
      </h2>
      <div className="pt-3 flex flex-col justify-center gap-2">
        <Link href="/">
          <h3 className="text-xl leading-7 text-text-heading font-bold underline">
            Glassman Automotive Group
          </h3>
        </Link>

        <p className="font-medium text-base leading-5  text-text-body">
          Close Today
        </p>
        <Link href="/">
          <p className="font-medium text-base leading-5   text-[#0D3C61] underline">
            (855) 493-0537
          </p>
        </Link>
        <Link href="/" className="flex gap-1 items-center">
          <p className="font-medium text-base leading-5  text-[#0D3C61] underline">
            28000 Telegraph Rd, Southfield, MI 48034
          </p>
          <FiExternalLink className="text-[#0D3C61] " size={16} />
        </Link>
        <Link href="/">
          <p className="font-medium text-base leading-5   text-[#0D3C61] underline">
            View inventory
          </p>
        </Link>
        <Link href="/" className="flex gap-1 items-center">
          <p className="font-medium text-base leading-5  text-[#0D3C61] underline">
            Dealer Website
          </p>
          <FiExternalLink className="text-[#0D3C61] " size={16} />
        </Link>
      </div>
      <h3 className="text-text-heading text-2xl font-bold leading-7 pt-4 ">
        Dealer
      </h3>
      <div className="flex gap-2 items-center mt-3">
        <AiFillStar size={40} color="#FFA500" />
        <div className="flex items-center justify-center">
          <h4 className="text-2xl leading-7 text-text-heading font-bold">
            4.0
          </h4>
          <p className="font-medium text-base leading-5 text-text-body">
            {`(1 review)`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealerDetails;
