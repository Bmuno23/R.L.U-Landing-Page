import { InfoSection } from "../Layouts/InfoSection";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../Layouts/PageHeader";

export default function Home() {
  return (
    <div className="flex-grow">
      <InfoSection
        headerTxt="One Club, One Family: United"
        aboutText="About us:"
        descriptionText="We are Richmond Latino United, an organization that stems from family, passion, and respect."
        descriptionSpanishText="--Somos Richmond Latino United, una organización que nace de la familia, la pasión y el respeto."
        buttonTxt="Learn More About Us"
        imageURL="https://static.wixstatic.com/media/6fbfc3_f880a713131a46f4b8afbbcf4dd7e7d8~mv2.jpg/v1/fill/w_3250,h_1636,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6fbfc3_f880a713131a46f4b8afbbcf4dd7e7d8~mv2.jpg"
        icon={<ArrowRight></ArrowRight>}
        link="/about"
      ></InfoSection>{" "}
    </div>
  );
}
