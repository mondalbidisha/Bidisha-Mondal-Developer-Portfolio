import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components';
import { Accounts } from '@/icons';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            I am a <span className="text-about_me_green">Software Engineer</span> specializing in <span className="text-about_me_green">Web Application Development</span>
          </div>
        }
      />
      <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-3xl mb-5 font-semibold leading-8 tracking-tight text-white">Bidisha Mondal</h3>
            <p className="text-lg leading-7 text-about_me_green">Full-Stack Developer and AI/ML Enthusiast</p>
            <p className="mt-4 text-base text-gray-500">I am a seasoned software professional with five years of industry experience, currently pursuing a Master's degree in Computer Science at Syracuse University. My expertise lies in developing scalable, robust, and intuitive web applications as well as software infrastructure that solve complex real-world problems and enhance user experience.</p>
            <p className="mt-4 text-base text-gray-500">My collaborative spirit, innovative mindset, and proven problem-solving abilities ensure that I deliver impactful software solutions within critical timelines.</p>
            <p className="mt-4 text-base text-gray-500"> I am enthusiastic about leveraging my skills and experiences to contribute to forward-thinking projects and drive technological excellence.</p>
          </div>
          <div className="flex-none mx-auto">
            <Image className="rounded-2xl object-cover" src="/bidisha_profile_picture.png" alt="" height={280} width={280} />
            <Socials />
          </div>
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <FadeIn
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <GlowCard className="mb-5 hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image className="rounded-2xl object-fill" src="/syracuse.jpeg" alt="Syracuse University Logo" width={110} height={110} />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Master of Science in Computer Science</h3>
                    <p className="text-base leading-7 text-about_me_green">Syracuse University</p>
                    <p className="text-base leading-7 text-about_me_yellow">August 2023 - May 2025</p>
                  </div>
                </div>
              </GlowCard>
              <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image className="rounded-2xl object-fill" src="/smit.jpeg" alt="Sikkim Manipal Institute of Technology Logo" width={110} height={110} />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Bachelor of Technology in Computer Science and Engineering</h3>
                    <p className="text-base leading-7 text-about_me_green">Sikkim Manipal Institute of Technology</p>
                    <p className="text-base leading-7 text-about_me_yellow">August 2014 - May 2018</p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
