import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/app/components/Border'
import { Button } from '@/app/components/Button'
import { ContactSection } from '@/app/components/ContactSection'
import { Container } from '@/app/components/Container'
import { FadeIn } from '@/app/components/FadeIn'
import { PageIntro } from '@/app/components/PageIntro'
import { formatDate } from '@/app/lib/formatDate'
import { loadArticles } from '@/app/lib/mdx'

export const metadata: Metadata = {
  title: 'Новини',
  description:
    'Події, майстер класи Ужгород, Dance Line Studio',
}

export default async function Blog() {
  let articles = await loadArticles()

  return (
    <>
      <PageIntro eyebrow="Блог" title="Останні новини і оголошення">
        <p>
          Тут ми ділимося новинами студії, інформацією про події та важливими оголошеннями.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt={article.title}
                              {...article.author.image}
                              className="h-96 w-96 lg:h-48 lg:w-48 object-cover grayscale"
                            />
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
