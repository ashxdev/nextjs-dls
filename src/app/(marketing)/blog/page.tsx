import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from 'src/lib/formatDate'
import configPromise from '@payload-config'
import type { Post, Media } from '@payload-types'


import { getPayload } from 'payload'

type Meta = {
  meta?: {
    title?: string | null
    image?: Media
    description?: string | null
  }
}
type PostI = Omit<Post, "meta"> & Meta


export const metadata: Metadata = {
  title: 'Блог',
  description:
    'Новини, життя, статті -  Dance Line Studio',
}

export default async function Blog() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      seo: true,
      publishedAt: true
    },
  })

  return (
    <>
      <PageIntro eyebrow="Блог" title="Останні новини і статті">
        <p>
          Тут ми ділимося новинами студії, досягненнями та цікавими статтями.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {posts.docs.map((article: PostI) => (
            <FadeIn key={article.slug}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.publishedAt}>
                            {formatDate(article.publishedAt)}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Link href={`/blog/${article.slug}`}>
                              <Image
                                alt={article.title}
                                width={600}
                                height={600}
                                src={article.meta?.image?.thumbnailURL as string}
                                className="h-96 w-96 lg:h-48 lg:w-48 object-cover grayscale"
                              />
                            </Link>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.meta?.description}
                      </p>
                      <Button
                        href={`/blog/${article.slug}`}
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
