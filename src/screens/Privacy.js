import React from "react";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Privacy Policy" }) => {
  return (
   
     
      <Container >
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Last updated: MAY 21, 2021</p>

            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p>
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
              collection and use of information in accordance with this Privacy Policy.
            </p>

            <h1>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h1>
            
            <p>
            When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.
When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
Email marketing `(if applicable)`: With your permission, we may send you emails about our store, new products and other updates.
            </p>

            <h1>SECTION 2 - CONSENT</h1>
            <h2>How do you get my consent?</h2>
            <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.
If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
</p>

          
            <h2>How do I withdraw my consent?</h2>
            <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at contact@raveindia.in or mailing us at: G-Floor,Modern Profound Tech Park, White Field Rd, Whitefields, Kondapur, Telangana 500084</p>

            <h1>SECTION 3 - DISCLOSURE</h1>
            
            <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
           
            <h1>SECTION 4 - PAYMENT</h1>
            
            <p>We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
            Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
            PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
            For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com</p>           

            <h1>SECTION 5 - THIRD-PARTY SERVICES</h1>
            <p>
            In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.

            </p>
            <p>
            For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.

            </p>
            <p>
            Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
Links

            </p>
            <p>
            When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
            </p>

            <h1>
            SECTION 6 - SECURITY
            </h1>

            <p>
            To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
            </p>

            <h1>
            SECTION 7 - COOKIES
            </h1>
            <p>
            We use cookies to maintain the session of your user. It is not used to personally identify you on other websites.
            </p>

            <h1>
            SECTION 8 - AGE OF CONSENT
            </h1>
            <p>
            By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            </p>

            <h1>
            SECTION 9 - CHANGES TO THIS PRIVACY POLICY
            </h1>

            <p>
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
            </p>

            <p>
            If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
QUESTIONS AND CONTACT INFORMATION

            </p>
            <p>
            If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at contact@raveindia.in or by mail at G-Floor,Modern Profound Tech Park, White Field Rd, Whitefields, Kondapur, Telangana 500084
            </p>

            <p>
              Anisetty anudeep<br>
              </br>
              Privacy Compliance Officer<br>
              </br>
              G-Floor,Modern Profound Tech Park, White Field Rd, Whitefields, Kondapur, Telangana 500084
            </p>


          </Text>
        </ContentWithPaddingXl>
      </Container>
     
    
  );
};
