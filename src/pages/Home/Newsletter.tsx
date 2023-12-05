import Section from "../../components/Section";
import Container from "../../components/Container";
import { useState } from "react";
import Modal from "../../components/Modal";

const Newsletter = () => {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModal(true);
  };
  return (
    <Section>
      {modal && (
        <Modal close={closeModal} bgClick={closeModal}>
          {" "}
          You are signed up for our newsletter now!
        </Modal>
      )}
      <Container className="flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-16 text-center">
        <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:text-left">
          <h1 className="text-4xl font-semibold md:font-bold">Keep In Touch</h1>
          <hr className="border-[1px] border-black w-2/3" />
          <p className="text-xl">
            Sign up to our newsletter and up to date on our latest deals
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center gap-1">
          <input
            type="email"
            name="email"
            className="px-4 w-[200px] lg:w-[421px] md:text-xl flex-shrink md:flex-1 py-2 border-black border-[1px]"
            placeholder="Email Address"
          />
          <input
            type="submit"
            name="subscribe"
            value="Subscribe"
            className="bg-black md:text-lg text-white px-4 text-center cursor-pointer"
          />
        </form>
      </Container>
    </Section>
  );
};

export default Newsletter;
