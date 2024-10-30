


//for text without image or button
import { Text } from "../components/Text";

    type InfoSectionProps = {
        headerTxt?: string,
        aboutText?: string,
        descriptionText?: string,
        descriptionSpanishText?: string,
        writer?: string,
        link?: string,
        className?: string,
    }
    
    export function InfoSectionNoImage({headerTxt = "", aboutText = "", writer="",  descriptionText ="", descriptionSpanishText=""}:InfoSectionProps) {
        return (

            <div className="flex flex-wrap justify-center bg-primary-default">
              <div className="shadow-md py-10 px-10 rounded">
                <Text variant="header" text={headerTxt} className="py-4" />
                <Text variant="subPara" text={aboutText} className="py-4 font-bold" />
                <Text variant="subPara" text={descriptionText} className="py-3" />
                <Text variant="subPara" text={descriptionSpanishText} className="pb-10" />
                <Text variant="signed" text={writer} className="pb-10" />
              </div>
            </div>
          );
    } 
