import { H2, Subheading, Paragraph } from "@/app/components/typography";
import { Button } from "@/app/components/button";
import { Container } from "@/app/components/structure";

const NotFound = () => {
  return (
    <Container className="flex flex-col items-center justify-center h-screen gap-4">
      <H2>404 - Page Not Found</H2>
      <Subheading>
        Sorry, the page you are looking for does not exist.
      </Subheading>
      <Paragraph>
        Try going back to the previous page or visit our Home page.
      </Paragraph>
      <div className="flex gap-4 mt-4">
        <Button href={{ pathname: "/", query: { lang: "en" } }} as="a">
          Go back home
        </Button>
      </div>
    </Container>
  );
};
export default NotFound;
