import {
  render,
  NODE_HEADING,
  NODE_PARAGRAPH,
  MARK_LINK,
} from "storyblok-rich-text-react-renderer";

import { AddressDetails } from "@/app/[lang]/components/course-contact-details";
import { H1, H2, H3, H4, H5, H6, Paragraph } from "@/app/components/typography";
import { START_DATES, TypeEnum, TYPES } from "@/constants";
import { CourseStartDates } from "@/app/[lang]/components/course-start-date-chip";
import { Link } from "@/app/components/button";

import { RichtextStoryblok } from "@/types";

function RichText({ document }: { document: any }) {
  return (
    <div>
      {render(document, {
        markResolvers: {
          [MARK_LINK](children, { href }) {
            return <Link href={href}>{children}</Link>;
          },
        },
        nodeResolvers: {
          [NODE_PARAGRAPH](children) {
            return <Paragraph>{children}</Paragraph>;
          },
          [NODE_HEADING](children, props) {
            const { level } = props;
            if (level === 1) return <H1>{children}</H1>;
            if (level === 2) return <H2>{children}</H2>;
            if (level === 3) return <H3>{children}</H3>;
            if (level === 4) return <H4>{children}</H4>;
            if (level === 5) return <H5>{children}</H5>;
            if (level === 6) return <H6>{children}</H6>;

            return null;
          },
        },
      })}
    </div>
  );
}

export const CourseOverview = ({
  courseOverview,
  type,
}: {
  courseOverview?: RichtextStoryblok;
  type: TypeEnum;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <RichText document={courseOverview} />

      <div className="md:max-w-sm full-w">
        <CourseMetaData type={type} />
      </div>
    </div>
  );
};

const CourseMetaData = ({ type }: { type?: TypeEnum }) => {
  return (
    <div className="p-8 bg-slate rounded flex-1 h-fit border-2 border-gray-800">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Paragraph variant="secondary" className="text-sm">
              Start Dates
            </Paragraph>
          </div>
          <CourseStartDates dates={START_DATES} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Paragraph variant="secondary" className="text-sm">
              Location
            </Paragraph>
          </div>
          <AddressDetails />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Paragraph variant="secondary" className="text-sm">
              Course Duration
            </Paragraph>
          </div>
          <Paragraph>
            The {TYPES.find((t) => t.id === type)?.title} programme runs for 3
            years.
          </Paragraph>
        </div>

        {type === TypeEnum.BACHELOR && (
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Paragraph variant="secondary" className="text-sm">
                In collaboration with
              </Paragraph>
            </div>

            <Paragraph>
              The Bachelor (Hons) programmes delivered by United POP are
              validated by the University of West London and comply with the
              requirements of the UK Quality Assurance Agency for Higher
              Education and the Framework for Qualifications of the European
              Higher Education Area (FQ-EHEA).
            </Paragraph>
          </div>
        )}
      </div>
    </div>
  );
};
