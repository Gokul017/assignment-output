import Section1 from "../../components/Home/section1/page";
import Section2 from "../../components/Home/section2/page";
import Section3 from "../../components/Home/section3/page";
import Section4 from "../../components/Home/section4/page";
import Section5 from "../../components/Home/section5/page";
import Section6 from "../../components/Home/section6/page";
import Section7 from "../../components/Home/section7/page";

export default function Home() {
  return (
    <>
    <main>
      { /* Section 1 : Banner Image */ }
      <Section1 />

      { /* Section 2 : Our Trending Publications  */ }
      <Section2 />

      { /* Section 3 : What Makes us unique...  */ }
      <Section3 />

      { /* Section 4 : ...Best Policy  */ }
      <Section4 />

      { /* Section 5 : Latest Publications  */ }
      <Section5 />
      
      { /* Section 6 : ..help  */ }
      <Section6 />

      { /* Section 7 : Get Notification  */ }
      <Section7 />    
    </main>
  </>
  );
}
