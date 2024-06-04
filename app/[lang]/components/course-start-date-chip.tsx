import { MetaDataChip } from "@/app/components/chip";
import { formatDate } from "@/utils";

export const CourseStartDateChip = ({
  size = "medium",
  date,
}: {
  size?: "small" | "medium" | "large";
  date: string;
}) => {
  return (
    <MetaDataChip variant="secondary" size={size}>
      {date}
    </MetaDataChip>
  );
};

export const CourseStartDates = ({ dates }: { dates: Date[] }) => {
  return (
    <div className="flex gap-2 items-center mb-3">
      {dates.map((date, index) => (
        <CourseStartDateChip
          key={index}
          date={formatDate({ date, lang: "en" })}
        />
      ))}
    </div>
  );
};
