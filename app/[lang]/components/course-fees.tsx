import { ISbRichtext } from "@storyblok/react"

import { TableStoryblok } from "@/types"
import { RichText } from "@/app/components/rich-text"
import { H5, Paragraph } from "@/app/components/typography"
import { Divider } from "@/app/components/structure"

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
      <table className="hidden md:block w-full text-left overflow-x-scroll md:table-auto">
        <thead className="text-secondary font-normal">
          <tr className="border-b border-gray-800">
            {thead?.map(({ value }, index) => (
              <th
                scope="col"
                className="py-5 text-sm text-secondary font-normal"
                key={index}
              >
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

      <div className="md:hidden flex flex-col gap-8">
        {tbody?.map((row, index) => (
          <div key={index} className="flex flex-col gap-4">
            {row?.body.map(({ value }, index) => {
              return (
                <div key={index}>
                  {index === 0 ? (
                    <Paragraph className="text-sm" variant="secondary">
                      {value}
                    </Paragraph>
                  ) : (
                    <>
                      <Paragraph className="font-semibold">
                        {thead?.[index]?.value}
                      </Paragraph>
                      <Paragraph variant="secondary">{value}</Paragraph>
                    </>
                  )}
                </div>
              )
            })}

            <div className="mt-4">
              <Divider />
            </div>
          </div>
        ))}
      </div>

      <RichText document={feesNotes} />
    </div>
  )
}
