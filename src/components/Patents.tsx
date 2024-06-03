import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';

const experience = [
  {
    title: 'COMPILER AND RECOMMENDATION ENGINE FOR MULTI-CONDITION WORKFLOW CONFIGURATION',
    date: 'Filed on Dec 30, 2023',
    refno: '2412859US - INTU/0547US',
    description: [
      'Many software users configure automated workflows that can fail due to errors in complex, condition-dependent setups, leading to high costs and poor user experiences.',
      'To address this, a new method has been developed for automated workflow configuration assistance.',
      'This method checks the compatibility and redundancy of conditions before finalizing the workflow setup, alerts the user to any issues, and then makes corrections based on user feedback.',
      'The approach, implementable as a set of computer instructions or within a computer system, improves reliability and efficiency in workflow automation.'
    ],
  },
  {
    title: 'AUTOMATE WORKFLOW CREATION IN QBO ADVANCED USING GENERATIVE AI',
    date: 'Filed on Nov 1, 2023',
    refno: '2312837US - INTU/0547US',
    description: [
      'Automated workflow assistance uses generative AI to simplify the creation of workflows in systems, like those used for financial management tasks.',
      'Users can input problems in natural language, and the system uses machine learning to select appropriate templates and gather necessary data.',
      'The AI populates these templates with the data and then generates the workflow, reducing the need for specialized knowledge and making the process more user-friendly.',
      'This technology is embodied in various forms, including computer systems, software, and digital storage mediums.',
    ],
  },
];

export default function Patents() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} refno={item.refno}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, refno }: { children: React.ReactNode; title: string; date?: string; refno?: string}) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <p className="px-4 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{refno}</p>
        <p className="px-4 group-first:pt-0 text-amber-100 leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">Pending Approval</p>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
