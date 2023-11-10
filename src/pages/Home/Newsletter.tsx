import Section from "../../components/Section";
import Container from "../../components/Container";

const Newsletter = () => {
  return (
    <Section>
      <Container className="flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-16 text-center">
        <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:text-left">
          <h1 className="text-4xl font-semibold md:font-bold">Keep In Touch</h1>
          <hr className="border-[1px] border-black w-2/3" />
          <p className="text-xl">
            Sign up to our newsletter and up to date on our latest deals
          </p>
        </div>
        <form className="flex justify-center gap-1">
          <input
            type="email"
            name="email"
            className="px-4 w-[230px] lg:w-[421px] text-xl flex-1 py-2 border-black border-[1px]"
            placeholder="Email Address"
          />
          <input
            type="button"
            value="Subscribe"
            className="bg-black text-lg text-white px-4 text-center"
          />
        </form>
      </Container>
    </Section>
  );
};

export default Newsletter;
