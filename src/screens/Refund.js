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

export default ({ headingText = "Refund policy" }) => {
  return (
 

      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>

            <p>Last updated: May 21, 2021</p>
            <h1>
              Returns
            </h1>
            <p>
            Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.

            </p>
            <p>
            To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.

            </p>
            <p>
            Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
Additional non-returnable items:
            <ul>
              <ui>
              Gift cards
              </ui>
              <ui>
              Downloadable software products
              </ui>
              <ui>
              Some health and personal care items
              </ui>
            </ul>
<br>
</br>
To complete your return, we require a receipt or proof of purchase.
            </p>
            <p>
            Please do not send your purchase back to the manufacturer.

            </p>
            <p>
            There are certain situations where only partial refunds are granted: (if applicable)
Book with obvious signs of use
CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.

            </p>
            <p>
            Any item not in its original condition, is damaged or missing parts for reasons not due to our error.
            </p>
            <p>
            Any item that is returned more than 30 days after delivery
            </p>
            <h1>
            Refunds (if applicable)

            </h1>
            <p>
              Refunds for e-tickets for an event can be processed only if the event gets cancelled. The time taken to refund the amount can be anywhere in between 30-45 days. Under certain circumstances refund for an e-ticket can be processed under the authority of the organizers.   
              </p>
              <p>
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p>
              If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
              </p>
              <h1>
              Late or missing refunds (if applicable)
              </h1>
              <p>
              If you haven’t received a refund yet, first check your bank account again.

              </p>
              <p>
              Then contact your credit card company, it may take some time before your refund is officially posted.
              </p>
              <p>
              Next contact your bank. There is often some processing time before a refund is posted.
If you’ve done all of this and you still have not received your refund yet, please contact us at info@raveindia.in.
              </p>
              <h1>
              Sale items (if applicable)
              </h1>
              <p>
              Only regular priced items may be refunded, unfortunately sale items cannot be refunded.
              </p>
              <h1>
              Exchanges (if applicable)
              </h1>
              <p>
              We only replace items if they are defective or damaged.  If you need to exchange it for the same item, send us an email at info@raveindia.in .
              </p>
              <h1>
                Gifts
              </h1>
              <p>
              If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
              </p>
              <p>
              If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.
              </p>
              <h1>
              Shipping
              </h1>
              <p>
              To return your product, you should contact us at info@raveindia.in
              </p>
              <p>
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.

              </p>
              <p>
              Depending on where you live, the time it may take for your exchanged product to reach you, may vary.

              </p>
              <p>
              If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.

              </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      
  );
};
