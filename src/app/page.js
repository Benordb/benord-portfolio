import Card from "../components/Card";
import { Services } from "../components/Services";
import { About } from "../components/About-card";
import { Content } from "../components/Content";
import { Head } from "../components/Head";
import { Carousel } from "../components/Carousel";
import { TemplateX, TemplateY } from "../components/Template";
import { Footer } from "../components/Footer.js";
import { Works } from "../components/works";
const data = [
  {
    title: "1",
    desc: "Hello",
    bool: true,
    background: "bg-green-200",
  },
  {
    title: "2",
    desc: "Hello2",
    bool: true,
    background: "bg-red-200",
  },
  {
    title: "3",
    desc: "Hello2",
    bool: true,
    background: "bg-cyan-200",
  },
  {
    title: "4",
    desc: "Hello2",
    bool: true,
    background: "bg-red-200",
  },
];
export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black items-center">
      <div className="w-11/12 py-8">
        <Head />
        <Services />
        {/* {data.map((item, index) => (
        <Card key={index} {...item}>
          {item.bool.toString()}
        </Card>
      ))} */}
        <Content />
        <Works />
        <Carousel />
        <Footer />
        <About />
        <TemplateY />
      </div>
    </main>
  );
}
