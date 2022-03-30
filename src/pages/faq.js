import React from "react";
import Faq from 'react-faq-component';
import { Navbar, Footerr } from "../components";
import { Layout } from "antd";
import "../App.css";
import "./faq.css";
const { Content } = Layout;


export default function Faqq() {
    const data = {
        title: "ELEM Explains",
        rows: [
          {
            title: "What is ELEM?",
            content: "At its most basic, ELEM is India’s first Household Net Zero Accelerator. ELEM will allow Indian households to earn by being Carbon Conscious. ELEM has the vision of establishing a ubiquitous global carbon economy that endorses the spirit of ELEM, that of Economic benefit from Ecological effort: Emit Less Earn More."
          },
          {
            title: "How do I earn from ELEM?",
            content: "It is straightforward. Sign-up with ELEMoney, and allow us at ELEM to set up a smart emission monitor for your household. Once you start reducing your household emissions, you’ll begin earning carbocredits automatically. Let the cutting-edge technology of ELEM make your life greener in all regards."
          },
          {
            title: "Will carbocredits be redeemable for INR?",
            content: "Yes. Carbocredits have a well-defined value in INR. Once earned through ELEMoney, carbocredits will also be eligible for various provisions under the ELEMoney Umbrella."
          },
          {
            title: "Can ELEMart purchases be made through Carbocredits only?",
            content: "Yes, all ELEMart purchases have to be through carbocredits only. You can earn Carbocredits through ELEMoney or by purchasing Carbocredits through WELEM."
          },
          {
            title: "How do I list my products and services on ELEMart?",
            content: "All you have to do is sign-up on the ELEMart portal as a DSP vendor, and the rest of the procedure will be discussed with you by our special ELEM professionals. It’s a straightforward sign-up process with simple directives and favorable listing terms for all vendors."
          },
          {
            title: "Does my household need to meet a set of requirements for it to have an ELEMoney account?",
            content: "No. All households can sign-up with ELEMoney regardless of their current energy consumption. They have to sign up with ELEMoney, and ELEM professionals will take care of the rest."
          },
          {
            title: "What can ELEMoney help me achieve?",
            content: "Apart from substantiating your household income by incentivizing you to adopt carbon-conscious practices, ELEM also allows you to impact the environment at large in a positive manner by reducing your carbon footprint."
          }
        ]
      }
      
    return (
        <>
            <Navbar />
            <Layout style={{ minHeight: "100vh" }}>
                <Layout className="site-layout">
                    <Content className="site-layout-content" style={{background:"linear-gradient(to bottom, #8BDFC7 20%, #458986 60%, #3c7875 80%, #346765 100%)"}}>
                    <div style={{padding:"6% 8%", color:"white"}}>
                        <Faq data={data}/>
                    </div>
                    </Content>
                    <Footerr className="site-layout-footer" />
                </Layout>
            </Layout>
        </>
    );
}
