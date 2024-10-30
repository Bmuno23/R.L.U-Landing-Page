import { ArrowRight } from "lucide-react";
import { InfoPills } from "./components/InfoPills";
import { Footer } from "./Layouts/Footer";
import { InfoSection } from "./Layouts/InfoSection";
import { PageHeader } from "./Layouts/PageHeader";
import { Title } from "./Layouts/Title";
import { InfoSectionNoImage } from "./Layouts/InfoSectionNoImage";
import { Text } from "./components/Text";
import { Sidebar, SidebarItem } from "./Layouts/Sidebar";
import { motion } from "framer-motion";

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <FadeInSection>
      <Title
        text1="The Official Home of"
        text2="Richmond Latino United"
        imageUrl="http://localhost:5173/src/assets/RLUimgno3br.jpg"
      ></Title>
      <div className="flex">
        <Sidebar>
          <SidebarItem text="Home"></SidebarItem>
          <SidebarItem text="Registration"></SidebarItem>
          <SidebarItem text="About"></SidebarItem>
          <SidebarItem text="Schedule"></SidebarItem>
          <SidebarItem text="Tournaments"></SidebarItem>
          <SidebarItem text="Contact"></SidebarItem>
          <SidebarItem text="Media"></SidebarItem>
        </Sidebar>
        <div className="flex-grow">
          <PageHeader></PageHeader>
          <div className="flex-col">
            <InfoSection
              headerTxt="One Club, One Family: United"
              aboutText="About us:"
              descriptionText="We are Richmond Latino United, an organization that stems from family, passion, and respect."
              descriptionSpanishText="--Somos Richmond Latino United, una organización que nace de la familia, la pasión y el respeto."
              buttonTxt="Learn More About Us"
              imageURL="https://static.wixstatic.com/media/6fbfc3_f880a713131a46f4b8afbbcf4dd7e7d8~mv2.jpg/v1/fill/w_3250,h_1636,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6fbfc3_f880a713131a46f4b8afbbcf4dd7e7d8~mv2.jpg"
              icon={<ArrowRight></ArrowRight>}
              link="/about"
            ></InfoSection>
            </div>
            </div>
          </div>
          <Text
            text="Some of our teams:"
            variant="header"
            className="text-center pt-10 font-bold"
          ></Text>
          <div className="shadow-sm pt-1">
            <InfoPills></InfoPills>
          </div>
          <div className="flex">
            <InfoSectionNoImage
              headerTxt="Philosophy--"
              aboutText="From our founder:"
              descriptionText='"Hello, my name is Santa Cruz Munoz, director of Richmond Latino United, we are a soccer club organization that was founded in 2019 with the purpose of helping children learn a little more about this sport. This includes teaching them discipline, respect, responsibility, and how to work as a team. Our mission is to guide children to learn the game and improve their skills on the field. Our Club is a good start to a better future for our community and we invite everyone who wants to be part of this organization."'
              writer="-Santa C. Munoz Ortiz"
            ></InfoSectionNoImage>
          </div>
          <Footer></Footer>
          </FadeInSection>
    </div>
  );
}
