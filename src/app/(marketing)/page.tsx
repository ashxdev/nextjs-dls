import { type Metadata } from 'next'
import { Button } from '@/components/Button'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/olesya.jpg'
import { Video } from '@/components/Video'
import { PageLinks } from '@/components/PageLinks'
import SnowAnimation from '@/components/SnowAnimation'

import Styles from '@/app/(marketing)/styles/_styles'

interface Page {
  href: string
  date: string
  title: string
  description: string
}


const clients = [
  ['Hip-Hop', logoPhobiaLight],
  ['Contemporary', logoFamilyFund],
  ['Bachata Lady Style', logoUnseal],
  ['High Heels', logoMailSmirk],
  ['Body Ballet', logoHomeWork],
  ['K-pop', logoGreenLife],
  ['Bachata', logoBrightPath],
  ['Choreography', logoBrightPath],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <SnowAnimation />
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            В студії представленні сучасні і класичні напрямки хореографії як для дітей так і для дорослих
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <h3 className="text-white font-semibold">{client}</h3>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies
}) {
  return (
    <>
      <SectionIntro
        title="Вибери свій стиль"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>

        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.title} className="flex">
              <article className=" flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>

                  <Video
                    src={caseStudy.video?.src}
                  />
                </h3>
                <div className="relative">
                  <div>
                    <span className="absolute inset-0 rounded-3xl" />

                    <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                      {caseStudy.title}
                    </p>
                    <p className="mt-2 flex gap-x-2 text-sm text-neutral-950">
                      <span>{caseStudy.subTitle}</span>
                    </p>
                    <p className="mt-4 text-base text-neutral-600">
                      {caseStudy.description}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Прагнення"
        title="Ми допоможемо тобі відкрити себе по-новому, розкрити приховані можливості та продемонструвати їх у всій красі."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Ми докладемо всіх зусиль, щоб відкрити для тебе чарівний світу танцю і забезпечити можливості для постійного розвитку.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Професійні викладачі">
              У Dance Line Studio викладають найкращі викладачі з усієї України.
              Кожен із них — справжній професіонал своєї справи, який постійно вдосконалює свої навички.
            </ListItem>
            <ListItem title="Велика сцена">
              Наші учні регулярно беруть участь у конкурсах, фестивалях та батлах як в Україні, так і за кордоном, здобуваючи призові місця.
            </ListItem>
            <ListItem title="Доступність">
              Ми впевнені, що пропонуємо найкращі умови за конкурентними цінами.
            </ListItem>
            <ListItem title="Постійний розвиток">
              У студії регулярно проводяться майстер-класи від наших викладачів, а також від найкращих майстрів з усієї України.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}


async function LatestEvents() {
  const payload = await getPayload({ config: configPromise })

  const events = await payload.find({
    collection: 'events',
    depth: 1,
    limit: 2,
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
  const eventPages = events.docs.map(item => ({
    date: item.publishedAt,
    title: item.title,
    description: item.meta?.description,
    href: `/events/${item.slug}`,

  })) as Page[]
  return (
    <PageLinks
      className="mt-24 sm:mt-32 lg:mt-40"
      title="Події"
      intro="Останні події і новини студії"
      pages={eventPages}
    />
  )
}

export const metadata: Metadata = {
  description:
    'Dance Line Studio — перша справді сучасна студія танців в Ужгороді.',
}

export default async function Home() {
  const caseStudies = Styles

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Перша справді сучасна студія танців в Ужгороді
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            <b>Dance Line Studio</b> – танцювальна студія, де мистецтво народжується в русі. Це надихаюче місце, де кожен танець залишає незабутній слід у серці.
          </p>
          <Button href="tel:095 086 9104" className="mt-10">
            Зателефонувати
          </Button>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        caption="Олеся Яцевська - засновник і керівник студії"
      >
        Час творити, час пізнати світ танцю.
      </Testimonial>

      <Services />

      <LatestEvents />

      <ContactSection />
    </>
  )
}
