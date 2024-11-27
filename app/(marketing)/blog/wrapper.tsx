import { FadeIn } from '@/app/components/FadeIn'
import { formatDate } from '@/app/lib/formatDate'
import { Container } from '@/app/components/Container'
import { PageLinks } from '@/app/components/PageLinks'
import { MDXComponents } from '@/app/components/MDXComponents'
import { ContactSection } from '@/app/components/ContactSection'

import { type Article, type MDXEntry, loadArticles } from '@/app/lib/mdx'

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>
  children: React.ReactNode
}) {
  let allArticles = await loadArticles()
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(article.date)}
            </time>

          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-12 sm:mt-16 lg:mt-20">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ContactSection />
    </>
  )
}
