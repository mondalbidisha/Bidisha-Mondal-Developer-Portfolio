import { AboutMe, AnimatedTitle, Border, ContactForm, Container, FadeIn, GridPattern, MyWork, Section, SectionHeader, Skills, Socials, Stars, WorkExperience } from '@/components';
import { Archive, BookOpen, BriefCase, Envelope } from '@/icons';

export const metadata = {
  title: 'Bidisha Mondal',
  description: 'Web Developer Portfolio Website',
};

export const sections = [
  { index: 0, title: 'About Me', id: 'about-me' },
  { index: 1, title: 'Work Experience', id: 'work-experience' },
  { index: 2, title: 'Skills', id: 'skills' },
  { index: 3, title: 'Project Work', id: 'my-work' },
  // { index: 4, title: 'Patents', id: 'patents' },
  // { index: 4, title: 'Contact Me', id: 'contact' },
];

interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}

const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Work Experience',
      description: (
        <div>
          <span className="text-work_experience_orange">Seasoned software professional</span> with <span className="text-work_experience_orange">5 years</span> of industry experience
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
  {
    id: sections[2].id,
    sectionHeader: {
      icon: (
        <>
          <BookOpen height="28" width="28" />
          <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Skills',
      description: (
        <div>
          <span className="text-skills_purple">Full Stack</span> software developer with experience in <span className="text-skills_purple">Front-End</span> and{' '}
          <span className="text-skills_purple">Back-End</span> technologies
        </div>
      ),
    },
    mainContent: <Skills />,
  },
  {
    id: sections[3].id,
    sectionHeader: {
      icon: (
        <>
          <Archive height="28" width="28" />
          <span className="bg-my_work_yellow icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Project Work',
      description: (
        <div>
          My <span className="text-my_work_yellow">project experience</span> as a Full-Stack Developer
        </div>
      ),
    },
    mainContent: <MyWork />,
  },
  // {
  //   id: sections[4].id,
  //   sectionHeader: {
  //     icon: (
  //       <>
  //         <Envelope height="28" width="28" />
  //         <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
  //       </>
  //     ),
  //     title: 'Patents',
  //     description: (
  //       <div>
  //         I pioneered <span className="text-blue-400"> 2 patents</span> at <span className="text-blue-400"> Intuit Inc. </span>
  //       </div>
  //     ),
  //   },
  //   mainContent: <ContactForm />,
  // },
  // {
  //   id: sections[4].id,
  //   sectionHeader: {
  //     icon: (
  //       <>
  //         <Envelope height="28" width="28" />
  //         <span className="bg-blue-400 icon-blur absolute inset-0 -z-10"></span>
  //       </>
  //     ),
  //     title: 'Contact Me',
  //     description: (
  //       <div>
  //         Let&apos;s get in <span className="text-blue-400">touch</span> and create <span className="text-blue-400">innovative software together!</span>
  //       </div>
  //     ),
  //   },
  //   mainContent: <ContactForm />,
  // },
];

export default function Index() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GridPattern />
      <Section id={sections[0].id}>
        <Container>
          <div className="min-h-screen relative">
            <FadeIn className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh]">
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
                Bidisha Mondal<span className="wave">👋</span>
              </h1>
              <div className="flex mt-3 mb-1">
                Open to work{' '}
                <span className="relative flex h-2 w-2 self-center mx-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>{' '}
                / &#8205; <AnimatedTitle />
              </div>
              <p className="max-w-3xl">A dynamic Software Engineer with a passion for leveraging cutting-edge technology to solve real-world problems. With a robust background in Computer Science, holding a Bachelor of Technology (B-Tech) degree in Computer Science and Engineering and currently pursuing a Master of Science (M.S) degree at Syracuse University, I bring both academic excellence and practical experience to the table.</p>
            </FadeIn>

            <Socials />
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>{' '}
          <Border />
          <AboutMe />
        </Container>
      </Section>

      <div id="stars-container" className="relative">
        <Container>
          <Stars id="stars-container" />
          {content.map((section: contentSection) => (
            <Section key={section.id} id={section.id} className="pt-24 mt-28">
              <Border />
              <SectionHeader {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
        </Container>
      </div>
    </div>
  );
}
