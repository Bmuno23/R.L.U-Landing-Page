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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Schedule from "./pages/schedule";
import Tournaments from "./pages/tournaments";
import Contact from "./pages/contact";
import Media from "./pages/Media";

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
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
      <Title
        text1="The Official Home of"
        text2="Richmond Latino United"
        imageUrl="http://localhost:5173/src/assets/RLUimgno3br.jpg"
        link="/"
      ></Title>
      <PageHeader></PageHeader>

      <FadeInSection>
        <div className="flex">
          <Sidebar>
            <a href="/home">
            <SidebarItem text="Home"></SidebarItem>
            </a>
            <a href="/about">
            <SidebarItem text="About"></SidebarItem>
            </a>
            <a href="/register">
            <SidebarItem text="Registration"></SidebarItem>
            </a>
            <a href="/schedule">
            <SidebarItem text="Schedule"></SidebarItem>
            </a>
            <a href="/tournaments">
            <SidebarItem text="Tournaments"></SidebarItem>
            </a>
            <a href="/contact">
            <SidebarItem text="Contact"></SidebarItem>
            </a>
            <a href="/media">
            <SidebarItem text="Media"></SidebarItem>
            </a>
          </Sidebar>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/media" element={<Media />} />
            </Routes>
          </BrowserRouter>
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
        {/* home page end */}

        {/* About */}
        {/* About end */}
        <Footer></Footer>
      </FadeInSection>
    </div>
  );
}
