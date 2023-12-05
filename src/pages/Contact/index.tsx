import Section from "../../components/Section";
import Container from "../../components/Container";
import useForm from "../../utils/hooks/useForm";
import { useState } from "react";
import Modal from "../../components/Modal";
import useAos from "../../utils/hooks/useAos";

const Contact = () => {
  useAos();
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);

  const { bind } = useForm(initialState);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <Section className="pt-10" id="contact-main">
      {modal && (
        <Modal close={closeModal} bgClick={closeModal}>
          {" "}
          Thank you for getting in contact with us. Our team will reply to you
          via email shortly.
        </Modal>
      )}
      <Container className="flex-col-reverse md:flex-row gap-20">
        <div className="flex flex-col justify-center gap-12 md:gap-8 md:w-2/5">
          <div className="flex flex-col gap-4">
            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-anchor="#contact-main"
              className="text-4xl font-bold"
            >
              Contact Us
            </h1>
            <p>
              Send us a message and one of our friendly reprensentives will be
              in touch shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-grow gap-4">
              <input
                type="text"
                className="border-[0.5px] border-black py-2 px-3 bg-transparent min-w-0"
                placeholder="Your name"
                name="name"
                {...bind}
              />
              <input
                type="email"
                className="border-[0.5px] border-black py-2 px-3 bg-transparent min-w-0"
                placeholder="Your email"
                name="email"
                {...bind}
              />
            </div>
            <textarea
              name="message"
              {...bind}
              placeholder="Your message"
              rows={5}
              className="px-3 py-4 bg-transparent border-[0.5px] w-full border-black"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="py-2 px-8 rounded cursor-pointer bg-black text-white w-fit"
            />
          </form>
        </div>
        <div className="relative w-full h-[500px] md:h-[550px]">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor="#contact-main"
            className="absolute z-10 top-0 left-0 w-3/5 h-[400px] bg-[url('/images/contact-hero-2.webp')] bg-cover bg-no-repeat bg-top rounded-[8rem]"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
            data-aos-anchor="#contact-main"
            className="absolute z-10 bottom-0 right-0 w-3/5 h-[400px] bg-[url('/images/contact-hero.webp')] bg-cover bg-no-repeat bg-center rounded-[8rem]"
          />
        </div>
        <img
          src="/assets/triangle.svg"
          alt="triangle"
          className="absolute top-0 right-56 opacity-30"
        />
        <img
          src="/assets/star-3.svg"
          alt="triangle"
          className="absolute bottom-0 right-96 rotate-[42deg] w-[200px] "
        />
      </Container>
    </Section>
  );
};

export default Contact;
