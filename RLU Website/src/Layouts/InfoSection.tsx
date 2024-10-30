import { ReactNode } from "react";
import { Button } from "../components/Button";
import { Text } from "../components/Text";

type InfoSectionProps = {
    headerTxt?: string,
    aboutText?: string,
    descriptionText?: string,
    descriptionSpanishText?: string,
    buttonTxt?: string,
    icon?: ReactNode,
    imageURL?: string,
    link?: string,
}

export function InfoSection({headerTxt = "", aboutText = "", descriptionText ="", descriptionSpanishText="", buttonTxt, imageURL=undefined, link, icon}:InfoSectionProps) {
    return (
        <div className="flex flex-wrap justify-evenly bg-primary-default ">
          <div className="shadow-md py-10 px-10 rounded ">
            <Text variant="header" text={headerTxt} className="py-4" />
            <Text variant="subPara" text={aboutText} className="py-4 font-bold" />
            <Text variant="subPara" text={descriptionText} className="py-3" />
            <Text variant="subPara" text={descriptionSpanishText} className="pb-10" />
    
            <a href={link}>
              <Button variant="PtoB" className="flex transform transition duration-300 ease-in-out hover:scale-105">
                {buttonTxt}
                {icon && <span className="ml-2">{icon}</span>} {/* Conditionally render the icon */}
              </Button>
            </a>
          </div>
          <div className="flex items-center border-2">
            <img
              src={imageURL}
              className="h-auto max-h-80 w-auto border-2 shadow-lg rounded-xl transform transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      );
}







// export function InfoSection() {
//   return (
//     <div className="flex flex-wrap justify-evenly bg-primary-default ">
//       <div className="shadow-md py-10 px-10 rounded">
//         <Text variant="header" text="One Club, One Family: United" className="py-4"></Text>
//         <Text variant="subPara" text="About us:" className="py-4 font-bold"></Text>
//         <Text variant="subPara" text="We are Richmond Latino United, an organization that stems from family, passion and respect." className="py-3"></Text>
//         <Text variant="subPara" text="--Somos Richmond Latino United, una organización que nace de la familia, la pasión y el respeto." className="pb-10"></Text>

//         <a href="/">
//         <Button variant="PtoB" className="flex transform transition duration-300 ease-in-out hover:scale-105">Learn More About Us 
//             <ArrowRight />
//         </Button>
//         </a>
//       </div>
//       <div className="flex items-center border-2">
//         <img src={image} className="h-80 w-auto border-2 shadow-lg rounded-xl transform transition duration-300 ease-in-out hover:scale-105 " />
//       </div>
//     </div>
//   );
// }
