import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Intuit Inc. | Senior Software Engineer',
    date: 'Aug 2022 - Aug 2023',
    description: [
      'Architected a Spring Boot based backend framework for multi-condition support in workflows, with 90% test coverage. Introduced extensive code to facilitate backward-compatible create, read, update and delete (CRUD) operations.',
      'Spearheaded the design and development of 3 AI features: a workflow template recommendation engine, a Gen-AI powered chatbot for automatic workflow creation built using Natural Language Processing, and a email reminder service.',
      'Implemented database modifications - column indexing for 30% faster read operations using Spring Data Elasticsearch.',
      'Established integration patterns for connecting to third-party CRM applications from QuickBooks Online (QBO) that brought down the development time from 2 quarters to 2 sprints.',
      'Owned the design and development of the end-to-end DATA-IN pipeline for Salesforce integration with QBO Advanced.',
      'Mentored interns and junior engineers, helped them with product, codebase ramp-up as well as guided them on code reviews and system design decisions.'
    ],
    image: { url: '/work/intuit.jpeg', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Intuit Inc. | Software Engineer 2',
    date: 'Nov 2020 - Aug 2022',
    description: [
      'Engineered and open-sourced 15+ scalable UI components using Next.js, Styled Components, Storybook and Webpack.',
      'Orchestrated the design and deployment of a reusable form builder framework using React.js, TailwindCSS and Vercel.',
      'Enhanced Intuit’s analytical ML model to predict payment defaulters based on prior usage behavior, with 87% accuracy.',
      'Performed network waterfall analysis and optimized the page load times of 2 core QBO workflows (30% reduction in TP99 metric).',
      'Built a workflow that enables QBDT payments customers to set up OAuth 2 identities using invitation & request access flows.'
    ],
    image: { url: '/work/intuit.jpeg', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Talview | Software Engineer - Frontend',
    date: 'Jun 2018 - Nov 2020',
    description: [
      'Refactored legacy code and introduced 10+ UI features, including question bank management, assessment creation tool, and incorporated client-side AI-based face detection using React.js, Node.js GraphQL, TensorFlow.js and WebRTC.',
      'Revamped existing code to remove errors while introducing new feature and functionalities; interface upgrade to enhance performance, scalability, and user experience.',
      'Collaborated with cross-functional stakeholders to deliver features on time while maintaining high code quality.',
      'Developed and optimized interactive, user-friendly, feature-rich, and data-driven web applications.',
      'Brainstormed the technical feasibility of product and design requirements with respective stakeholders to ensure designs were efficient, feasible, technically sound, and valuable to the consumer.',
    ],
    image: { url: '/work/talview.jpeg', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Talview | Software Engineer Intern',
    date: 'Jan 2018 - May 2018',
    description: [
      'Enhanced application experience by delivering crucial bug fixes within strict timelines.',
      'Utilised React.js, Node.js, and PDFKit libraries to single-handedly implement a PDF report generation micro-service.',
      'Introduced extensive functional test cases using Jest and Mocha along with Cypress and Playwright for automation tests.',
      'Authored and maintained proper documentation, change-logs for all features.',
    ],
    image: { url: '/work/talview.jpeg', height: 96, width: 96, className: 'rounded-none' },
  },
];

export default function WorkExperience() {
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
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
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

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
