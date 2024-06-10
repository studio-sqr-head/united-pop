import { ISbRichtext } from "@storyblok/react"

import { TableStoryblok } from "@/types"
import { RichText } from "@/app/components/rich-text"

export const CourseFees = ({
  feesTable,
  feesNotes,
}: {
  feesNotes?: ISbRichtext
  feesTable: TableStoryblok
}) => {
  const { tbody, thead } = feesTable ?? {}
  return (
    <div className="flex flex-col gap-8 overflow-x-auto">
      <table className="w-full text-left overflow-x-scroll md:table-auto">
        <thead className="text-secondary font-normal">
          <tr className="border-b border-gray-800">
            {thead?.map(({ value }, index) => (
              <th scope="col" className="py-5 font-normal" key={index}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody?.map((row, index) => (
            <tr key={index} className="border-b border-gray-800">
              {row?.body.map(({ value }, index) => {
                if (index === 0) {
                  return (
                    <th scope="row" className="py-5 min-w-80" key={index}>
                      {value}
                    </th>
                  )
                }
                if (index === 3) {
                  return (
                    <td className="py-4 min-w-128" key={index}>
                      {value}
                    </td>
                  )
                }
                return (
                  <td className="py-4 min-w-40" key={index}>
                    {value}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <RichText document={feesNotes} />
    </div>
  )
}
