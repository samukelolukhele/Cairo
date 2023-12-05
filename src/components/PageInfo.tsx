import { ReactNode } from "react";
import Container from "./Container";
import Section from "./Section";

type Props = {
  children: ReactNode;
  pageTitle: string;
  pageDescription: string;
};

const PageInfo = ({ children, pageTitle, pageDescription }: Props) => {
  return (
    <Section>
      <Container className="flex flex-col font-light text-xl gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-3xl">{pageTitle}</h1>
          <p>{pageDescription}</p>
        </div>
        <div className="flex flex-col">{children}</div>
      </Container>
    </Section>
  );
};

export default PageInfo;
