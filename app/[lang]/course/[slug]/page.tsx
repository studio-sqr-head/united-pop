import { ReactNode } from "react";
import {
  ChevronDownIcon,
  MapPinIcon,
  ClockIcon,
  BookOpenIcon,
} from "@heroicons/react/20/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ISbStory } from "@storyblok/react";

import { Container, HeroSection } from "@/app/components/structure";
import { H2, Paragraph, H6 } from "@/app/components/typography";
import { Button, IconButton } from "@/app/components/button";
import { Tab, TabGroup, TabList, TabPanel } from "@/app/components/tabs";
import { List, ListItem } from "@/app/components/list";
import { CourseStoryblok } from "@/types";
import { env } from "@/env";
import { MetaDataChip } from "@/app/components/chip";
import { CourseStartDateChip } from "@/app/[lang]/components/course-list";
import {
  TABS,
  TYPES,
  START_DATES,
  TypeEnum,
  STORYBLOK_BASE_URL,
} from "@/constants";
import { getClosestFutureDateToToday } from "@/utils";

const getCourse = async ({
  slug,
  lang,
}: {
  slug: string;
  lang: "en" | "nl";
}): Promise<ISbStory["data"]> => {
  const version = "published";
  const token = env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN;
  const url = `${STORYBLOK_BASE_URL}/courses/${slug}?&version=${version}&token=${token}`;

  try {
    const response = await fetch(url, { next: { revalidate: 10 } });

    if (!response.ok) {
      throw new Error("Failed to fetch course");
    }

    const data: ISbStory["data"] = await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch course");
  }
};

export default async function CoursePage({
  params,
}: {
  params: { lang: "en" | "nl"; slug: string };
}) {
  const { story: course } = await getCourse({
    slug: params?.slug,
    lang: params.lang,
  });
  const { content } = course;
  const { title, description, image, type, fulltime, parttime } =
    content as CourseStoryblok;

  return (
    <div className="mb-16">
      {image != null && (
        <HeroSection
          height={"banner"}
          src={image?.filename}
          alt={image?.alt ?? title ?? "Course Image"}
          imageClassName="filter brightness-75"
        />
      )}

      <TabGroup>
        <div className="full-w text-white pt-4 gradient bg-slate">
          <Container as="section" className="max-w-5xl pt-8">
            <div className="mb-4 flex items-center gap-4">
              {fulltime && (
                <MetaDataChip variant="default" size="medium">
                  Full-time
                </MetaDataChip>
              )}
              {parttime && (
                <MetaDataChip variant="default" size="medium">
                  Part-time
                </MetaDataChip>
              )}
              {type && (
                <MetaDataChip variant="secondary" size="medium">
                  {TYPES.find((t) => t.id === type)?.title}
                </MetaDataChip>
              )}
            </div>

            <div className="flex justify-between items-start gap-4 mb-12 md:flex-row flex-col">
              <div className="flex flex-col gap-4">
                <H2>{title}</H2>
                <Paragraph variant="secondary">{description}</Paragraph>
              </div>

              <div>
                <Button
                  variant="primary"
                  size="medium"
                  as="a"
                  href={{
                    pathname: "/contact",
                    query: { lang: params.lang },
                  }}
                >
                  Enroll
                </Button>
              </div>
            </div>

            <TabList>
              {TABS.map((tab, index) => (
                <Tab key={index} name={tab.name} />
              ))}
            </TabList>
          </Container>
        </div>

        <Container as="section" className="max-w-5xl pt-8">
          {TABS.map(({ id }, index) => (
            <TabPanel key={index}>
              {id === "overview" && <Overview courseOverview={description} />}
              {id === "structure" && <Structure />}
              {id === "faq" && <Faq />}
              {id === "contact" && <Contact courseName={title} />}
              {id === "fees" && <Fees />}
            </TabPanel>
          ))}
        </Container>
      </TabGroup>
    </div>
  );
}

const Address = () => {
  return (
    <div className="flex gap-2 flex-col">
      <Paragraph>United POP B.V.</Paragraph>
      <Paragraph>Q-Factory, Atlantisplein 1</Paragraph>
      <Paragraph>1093 NE Amsterdam</Paragraph>
    </div>
  );
};

const COURSE_METADATA = {
  startDates: START_DATES,
  location: <Address />,
  collaboration:
    "The Bachelor (Hons) programmes delivered by United POP are validated by the University of West London and comply with the requirements of the UK Quality Assurance Agency for Higher Education and the Framework for Qualifications of the European Higher Education Area (FQ-EHEA).",
};

const MetaDataItem = ({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        {icon}
        <Paragraph variant="secondary" className="text-sm">
          {title}
        </Paragraph>
      </div>

      <div>{value}</div>
    </div>
  );
};

const CourseMetaData = ({
  location,
  collaboration,
  type,
}: {
  location: ReactNode;
  collaboration: string;
  type?: TypeEnum;
}) => {
  return (
    <div className="p-8 bg-slate rounded flex-1 h-fit">
      <div className="flex flex-col gap-8">
        <MetaDataItem
          icon={<MapPinIcon className="w-4 h-4 text-secondary" />}
          title="Location"
          value={location}
        />
        <MetaDataItem
          icon={<ClockIcon className="w-4 h-4 text-secondary" />}
          title="Next start date"
          value={<CourseStartDateChip size="medium" />}
        />
        {type === TypeEnum.BACHELOR && (
          <MetaDataItem
            icon={<BookOpenIcon className="w-4 h-4 text-secondary" />}
            title="Collaboration"
            value={<Paragraph className="text-sm">{collaboration}</Paragraph>}
          />
        )}
      </div>
    </div>
  );
};

const Fees = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Paragraph>
          The Music & Sound program costs $500 per semester. There are 3
          semesters in total, so the total cost of the program is $1500.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-2">
        <H6>Payment Options</H6>
        <Paragraph>
          We offer a variety of payment options including credit card, bank
          transfer, and PayPal.
        </Paragraph>
      </div>
    </div>
  );
};
const Overview = ({ courseOverview }: { courseOverview?: string }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex flex-col gap-2 flex-1">
        <Paragraph>{courseOverview}</Paragraph>
      </div>
      <div className="flex-1">
        <CourseMetaData {...COURSE_METADATA} />
      </div>
    </div>
  );
};

const FAQ_ITEMS = [
  {
    question: "Is team pricing available?",
    answer:
      "Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes! You can get a refund within 30 days of purchase.",
  },
  {
    question: "Can I upgrade my license?",
    answer: "Yes! You can upgrade your license at any time.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! You can try out our software for free for 14 days.",
  },
  {
    question: "Do you offer discounts for students?",
    answer:
      "Yes! We offer discounts for students who can provide a valid student ID.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes! You can cancel your subscription at any time.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes! You can cancel your subscription at any time.",
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Paragraph>
          Here are some frequently asked questions about the Music & Sound
          program.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-6">
        {FAQ_ITEMS.map((item, index) => (
          <FaqItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Disclosure
      as="div"
      className="flex flex-col divide-gray-500 hover:opacity-70"
    >
      <DisclosureButton className="group flex gap-2" as="div">
        <div className="flex-grow flex items-center">
          <H6>{question}</H6>
        </div>
        <div>
          <IconButton
            variant="secondary"
            size="small"
            iconDescription="Toggle Answer"
            className="border-none"
            icon={
              <ChevronDownIcon className="w-8 group-data-[open]:rotate-180 stroke-2" />
            }
          />
        </div>
      </DisclosureButton>
      <DisclosurePanel>
        <Paragraph variant="secondary">{answer}</Paragraph>
      </DisclosurePanel>
    </Disclosure>
  );
};

const Contact = ({ courseName }: { courseName?: string }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Paragraph>
          If you specific questions about the {courseName} program, feel free to
          contact us. We are happy to help!
        </Paragraph>
      </div>

      <div className="flex flex-col gap-2">
        <Paragraph className="text-sm" variant="secondary">
          Address
        </Paragraph>
        <Address />
      </div>

      <div className="flex flex-col gap-2">
        <Paragraph className="text-sm" variant="secondary">
          Phone
        </Paragraph>
        <Paragraph>+31 20 760 6780</Paragraph>
      </div>

      <div className="flex flex-col gap-2">
        <Paragraph className="text-sm" variant="secondary">
          Email
        </Paragraph>
        <Paragraph>
          <a href="mailto:amsterdam@united-pop.nl">amsterdam@united-pop.nl</a>
        </Paragraph>
      </div>

      <div className="flex gap-2">
        <Button
          variant="primary"
          size="small"
          as="a"
          href={{ pathname: "/contact", query: { lang: "en" } }}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

const TIMELINE = [
  {
    date: "August 1",
    items: [
      {
        title: "Enrol",
        description: "Enrol in the Music & Sound program.",
      },
    ],
    children: (
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="small"
          as="a"
          href={{ pathname: "/contact", query: { lang: "en" } }}
        >
          Sign up now for the next course
        </Button>
      </div>
    ),
  },
  {
    date: "Semester 1",
    items: [
      {
        title: "Introduction to Electronic Music Production",
        description: "Learn the basics of electronic music production.",
      },
      {
        title: "Advanced Electronic Music Production",
        description:
          "Learn advanced techniques in electronic music production.",
      },
    ],
  },
  {
    date: "Semester 2",
    items: [
      {
        title: "Advanced Electronic Music Production",
        description:
          "Learn advanced techniques in electronic music production.",
      },
      {
        title: "Advanced Electronic Music Production",
        description:
          "Learn advanced techniques in electronic music production.",
      },
    ],
  },
  {
    date: "Semester 3",
    items: [
      {
        title: "Sound Design",
        description: "Learn how to design sounds for electronic music.",
      },
      {
        title: "Advanced Electronic Music Production",
        description:
          "Learn advanced techniques in electronic music production.",
      },
    ],
  },

  {
    date: "December 1",
    items: [
      {
        title: "Graduation",
        description: "Graduate from the Music & Sound program.",
      },
    ],
  },
];

const Structure = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Paragraph>
          The Music & Sound program is divided into 3 semesters. Each semester
          covers a different topic related to music and sound production.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-6 justify-between w-full">
        <TimeLine timeline={TIMELINE} />
      </div>
    </div>
  );
};

const TimeLine = ({
  timeline,
}: {
  timeline: {
    date: string;
    items: { title: string; description: string; children?: ReactNode }[];
  }[];
}) => {
  return (
    <ol className="relative border-s border-gray-500">
      {timeline.map((item, index) => (
        <TimeLineItem key={index} {...item} />
      ))}
    </ol>
  );
};

const TimeLineItem = ({
  date,
  items,
  children,
}: {
  date?: string;
  items: { title: string; description: string }[];
  children?: ReactNode;
}) => {
  return (
    <li className="mb-8 ml-4">
      <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-black"></div>
      <div className="flex items-center gap-2">
        <time className="text-secondary text-sm">{date}</time>
      </div>

      <List className="my-4">
        {items.map((item, index) => (
          <ListItem
            textPrimary={item.title}
            textSecondary={item.description}
            key={index}
          />
        ))}
      </List>

      {children}
    </li>
  );
};
