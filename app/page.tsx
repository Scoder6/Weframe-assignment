import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import {UpperFooter} from "@/app/components/Upperfooter";
import MiddleContent from "@/app/components/middle-content";
import BelowNavComponent from "@/app/components/Below-Nav-component";
import BelowSewing from "@/app/components/Below-sewing";
import Frame from "@/app/components/frame";
import BelowDescription from "@/app/components/Below-description";

export default function Home() {
  return (
      <div>
          <div>
              <Navbar/>
          </div>
          <div>
              <BelowNavComponent/>
          </div>
          <div>
              <BelowSewing/>
          </div>
          <div>
              <Frame/>
          </div>
          <div>
              <BelowDescription/>
          </div>
          <div>
              <MiddleContent/>
          </div>
          <div>
              <UpperFooter/>
          </div>
          <div>
              <Footer/>
          </div>
      </div>

  );
}
