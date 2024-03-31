import Image from "next/image";

const Brand = ({ ...props }) => (
  <Image
    src="/techkareer.svg"
    alt="Split logo"
    {...props}
    width={150}
    height={300}
    priority
  />
);
export default Brand;
