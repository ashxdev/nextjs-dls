import type { Metadata } from 'next'
import type { Event } from '@/payload-types'

import React, { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import RichText from '@/components/marketing/RichText'
import { generateMeta } from '@/utilities/generateMeta'
import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/marketing/PayloadRedirects'

import { FadeIn } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { Container } from '@/components/Container'
import { ContactSection } from '@/components/ContactSection'


export async function generateStaticParams() {
  // TODO: temporary fix to prevent revalidate on dev mode: https://github.com/payloadcms/payload/issues/9469#issuecomment-2508624708
  if (process.env.NODE_ENV === 'development') return []

  const payload = await getPayload({ config: configPromise })
  const events = await payload.find({
    collection: 'events',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    select: {
      title: true,
      content: true,
      slug: true,
      publishedAt: true,

    },
  })

  const params = events.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Event({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = '/events/' + slug
  const event = await queryEventBySlug({ slug })

  if (!event) return <PayloadRedirects url={url} />

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        {/* Allows redirects for valid pages too */}
        <PayloadRedirects disableNotFound url={url} />

        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {event.title}
            </h1>
            <time
              dateTime={event?.publishedAt}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(event.publishedAt)}
            </time>
          </header>
        </FadeIn>




        <FadeIn>
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="container">
              <RichText className="max-w-[48rem] mx-auto" content={event.content} enableGutter={false} />
              {event.relatedEvents && event.relatedEvents.length > 0 && (
                <RelatedPosts
                  className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
                  docs={event.relatedEvents.filter((event) => typeof event === 'object')}
                />
              )}
            </div>
          </div>
        </FadeIn>
      </Container>
      <ContactSection />
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const event = await queryEventBySlug({ slug })

  return generateMeta({ doc: event })
}

const queryEventBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'events',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
