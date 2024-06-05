import { ReactNode } from "react"
import { CalendarIcon } from "@heroicons/react/24/solid"

import { Paragraph } from "@/app/components/typography"
import { List, ListItem } from "@/app/components/list"

const TIMELINE = [
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
]

export const CourseTimetable = () => {
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
  )
}

const TimeLine = ({
  timeline,
}: {
  timeline: {
    date: string
    items: { title: string; description: string; children?: ReactNode }[]
  }[]
}) => {
  return (
    <ol className="relative border-s border-gray-500">
      {timeline.map((item, index) => (
        <TimeLineItem key={index} {...item} />
      ))}
    </ol>
  )
}

const TimeLineItem = ({
  date,
  items,
  children,
}: {
  date?: string
  items: { title: string; description: string }[]
  children?: ReactNode
}) => {
  return (
    <li className="mb-8 ml-8">
      <div className="absolute -start-3 flex items-center justify-center w-6 h-6 rounded-full bg-gray-500">
        <CalendarIcon className="w-4 h-4 text-white" />
      </div>
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
  )
}
