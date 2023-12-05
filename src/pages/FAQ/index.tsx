import Accordion from "../../components/Accordion";
import PageInfo from "../../components/PageInfo";

const FAQ = () => {
  const accordions = [
    {
      title: "Eco Friendly",
      content:
        "Our clothes use only the most eco friendly production methods & materials ensuring we sustain a beautiful planet for us and future genrations.",
    },
    {
      title: "Shipping Times",
      content:
        "The delivery time depends on your location. Typically, orders are processed and shipped within 5 business days. You can find estimated delivery times for each shipping option at the checkout.",
    },
    {
      title: "Can I track my order?",
      content:
        "Yes, we provide tracking information for all shipped orders. Once your order is dispatched, you will receive an email with a tracking number and instructions on how to track your package.",
    },
    {
      title: "What materials are used?",
      content:
        "We only use highest quality materials for all of our pieces. We take pride in providing you with clothing that is stylish and comfortable",
    },
  ];
  return (
    <PageInfo
      pageTitle="FAQ"
      pageDescription="We value transparency. From questions about our production ethics to international shipping, you can find answers to all your questions here."
    >
      {accordions.map((item, key) => {
        return (
          <Accordion key={key} title={item.title} content={item.content} />
        );
      })}
    </PageInfo>
  );
};

export default FAQ;
