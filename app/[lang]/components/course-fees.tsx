import { Paragraph } from "@/app/components/typography";

export const CourseFees = ({ courseFees }: { courseFees?: string }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Paragraph>
          {courseFees ??
            "You will be able to finance your Diploma course from as little as € 75 per month. The course fees can be paid per month or per semester. If all course fees are paid up front and in full you can save up to 20%. You will find an overview of our course fees in our free information brochure. Our team on site will be happy to help you plan your training or study course during a personal advisory meeting."}
        </Paragraph>
      </div>
    </div>
  );
};
