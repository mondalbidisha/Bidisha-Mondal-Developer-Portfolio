'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
  { skill: 'Languages', buttonClassNames: 'rounded-tl-full', textClassNames: '-translate-x15' },
  { skill: 'Frontend', buttonClassNames: 'rounded-tr-full', textClassNames: 'translate-x1 translate-y-1' },
  { skill: 'Backend', buttonClassNames: 'rounded-bl-full', textClassNames: 'translate-x-5 -translate-y-3' },
  { skill: 'AI/ML', buttonClassNames: 'rounded-br-full', textClassNames: 'translate-x-8 translate-y-15' },
];

const skillsLogos = {
  ['Languages' as string]: [
    {
      name: 'JavaScript',
      image: '/logos/js-logo.png',
    },
    {
      name: 'TypeScript',
      image: '/logos/ts-logo.png',
    },
    {
      name: 'Python',
      image: '/logos/python-logo.png',
    },
    {
      name: 'Java',
      image: '/logos/java-logo-1.png',
    },
    {
      name: 'C++',
      image: '/logos/cpp-logo.png',
    },
    { 
      name: 'SQL', 
      image: '/logos/sql-logo.jpeg' 
    },
  ],
  ['Frontend' as string]: [
    {
      name: 'HTML5',
      image: '/logos/html5-logo.png',
    },
    {
      name: 'CSS3',
      image: '/logos/css-logo.png',
    },
    {
      name: 'ReactJS',
      image: '/logos/react-logo.png',
    },
    {
      name: 'NextJS',
      image: '/logos/nextjs-logo.png',
    },
    {
      name: 'Gatsby',
      image: '/logos/gatsby-logo.jpeg',
    },
    { 
      name: 'EmberJS', 
      image: '/logos/ember-logo.svg' 
    },
    { 
      name: 'BackboneJS', 
      image: '/logos/backbone-logo.png' 
    },
    { 
      name: 'Jest', 
      image: '/logos/jest-logo-1.png' 
    },
    { 
      name: 'Mocha', 
      image: '/logos/mocha-logo.png' 
    },
    { 
      name: 'Cypress', 
      image: '/logos/cypress-logo.jpeg' 
    },
    { 
      name: 'Playwright', 
      image: '/logos/playwright-logo.png' 
    },
    {
      name: 'React-Redux',
      image: '/logos/redux-logo.png',
    },
    {
      name: 'TailwindCSS',
      image: '/logos/tailwindcss-logo.jpg',
    },
    {
      name: 'Sass',
      image: '/logos/sass-logo.png',
    },
    {
      name: 'JQuery',
      image: '/logos/jquery-logo.webp',
    },
    {
      name: 'Bootstrap',
      image: '/logos/bootstrap-logo.svg',
    },
    {
      name: 'MaterialUI',
      image: '/logos/materialui-logo.png',
    },
    {
      name: 'WebRTC',
      image: '/logos/webrtc-logo-1.svg',
    },
    {
      name: 'EsLint',
      image: '/logos/eslint-logo.png',
    },
    {
      name: 'Sentry',
      image: '/logos/getsentry-logo.jpeg',
    },
  ],
  ['Backend' as string]: [
    {
      name: 'NodeJS',
      image: '/logos/nodejs-logo.png',
    },
    {
      name: 'ExpressJS',
      image: '/logos/express-logo.png',
    },
    {
      name: 'MongoDB',
      image: '/logos/mongodb-logo.webp',
    },
    {
      name: 'PostgresSql',
      image: '/logos/postgres-logo.png',
    },
    {
      name: 'Firebase',
      image: '/logos/firebase-logo.jpg',
    },
    {
      name: 'MySQL',
      image: '/logos/mysql-logo.png',
    },
    {
      name: 'Spring-Boot',
      image: '/logos/spring-boot-logo-1.png',
    },
    {
      name: 'Karate',
      image: '/logos/karate-logo.png',
    },
    {
      name: 'Mockito',
      image: '/logos/mockito-logo.png',
    },
    {
      name: 'GraphQL',
      image: '/logos/graphql-logo.png',
    },
    { 
      name: 'ELK Stack', 
      image: '/logos/elk-stack-logo.png' 
    },
    { 
      name: 'Kafka', 
      image: '/logos/kafka-logo.png' 
    },
    {
      name: 'AWS-S3',
      image: '/logos/s3-logo.png',
    },
    {
      name: 'SocketIO',
      image: '/logos/socketio-logo.webp',
    },
    {
      name: 'Terraform',
      image: '/logos/terraform-logo.svg',
    },
    {
      name: 'Splunk',
      image: '/logos/splunk-logo.jpeg',
    },
    {
      name: 'Camunda',
      image: '/logos/camunda-logo.png',
    },
    { 
      name: 'Docker', 
      image: '/logos/docker-logo.png' 
    },
    { 
      name: 'Kubernetes', 
      image: '/logos/kubernetes-logo.png' 
    },
    { 
      name: 'Linux', 
      image: '/logos/linux-logo.png' 
    },
  ],
  ['AI/ML' as string]: [
    {
      name: 'Numpy',
      image: '/logos/numpy-logo.png',
    },
    {
      name: 'Jupyter',
      image: '/logos/jupyter-logo.png',
    },
    { 
      name: 'PyTorch', 
      image: '/logos/pytorch-logo.webp' 
    },
    {
      name: 'Pandas',
      image: '/logos/pandas-logo.png',
    },
    {
      name: 'Matplotlib',
      image: '/logos/matplotlib-logo.png',
    },
    {
      name: 'Scikit-Learn',
      image: '/logos/scikit-learn-logo.png',
    },
    { 
      name: 'TensorFlow', 
      image: '/logos/tensorflow-logo.png' 
    },
    { 
      name: 'Keras', 
      image: '/logos/keras-logo.png' 
    },
    { 
      name: 'NLTK', 
      image: '/logos/nltk-logo.png' 
    },
    { 
      name: 'Seaborn', 
      image: '/logos/seaborn-logo.png' 
    },
  ],
};

const skillsTitles = {
  ['Languages' as string]: 'Programming Languages',
  ['Frontend' as string]: 'Frontend',
  ['Backend' as string]: 'Backend',
  ['AI/ML' as string]: 'AI/ML',
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('Languages');
  const controls = useAnimationControls();

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start('hidden');
    await controls.start('visible');
  };

  return (
    <div className="@container">
      <FadeInStagger animate={controls} className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8" faster>
        <div className="row-start-4 col-span-3 h-[115px] flex items-center justify-center @2xl:col-start-4 @2xl:row-start-1 @3xl:col-start-4 @4xl:col-start-4 @4xl:col-span-5 @3xl:justify-start @2xl:h-[40px] @3xl:mt-auto">
          <h2 className="text-center text-3xl font-semibold @2xl:ml-[32px]">{skillsTitles[activeSkill]}</h2>
        </div>
        <div className="skills-picker w-[325px] m-[10px] h-[325px] col-span-3 row-span-3 place-self-center isolate">
          <div className="rounded-full inset-6 absolute grid grid-cols-2 p-2 gap-2 rotate-45">
            {skills.map((skill) => (
              <button onClick={handleChangeSkill} key={skill.skill} className={clsx('rounded-[500px] skills-buttons', skill.buttonClassNames, activeSkill === skill.skill && 'skills-buttons-active')}>
                <p className={clsx('text-xl text-white font-semibold tracking-wide w-min -rotate-45', skill.textClassNames)}>
                  {skill.skill}
                  <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === skill.skill ? 'h-[18px]' : 'h-[2px]')}></span>
                </p>
              </button>
            ))}
          </div>
        </div>
        {skillsLogos[activeSkill].map((skill, index) => {
          if (!skill.name) return <div key={index} className="h-[95px] w-20" />;

          return (
            <FadeIn key={skill.name} className="h-[115px] w-24 place-self-center flex flex-col">
              <div className="mt-auto text-center">
                <Image
                  src={skill.image}
                  className="object-contain rounded-md m-auto"
                  alt=""
                  height={64}
                  width={64}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
                <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-max px-2 m-2 mx-auto">{skill.name}</h3>
              </div>
            </FadeIn>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
