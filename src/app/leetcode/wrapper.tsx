import { AppIntro, FadeIn, FadeInStagger, PageLinks, Section } from '@/components';
import { Leetcode } from '@/lib/mdx';
import Image from 'next/image';

export default async function AppsLayout({ leetData, children }: { leetData: Leetcode; children: React.ReactNode }) {

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden @container">
      <article>
        <header>
     
        </header>

        <FadeIn>{children}</FadeIn>
      </article>
    </div>
  );
}
