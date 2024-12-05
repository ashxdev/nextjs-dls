import { type Metadata } from 'next'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'

interface Page {
  href: string
  date: string
  title: string
  description: string
}

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Мрії повинні здійснюватися!"
        title="Знайди свою пристрасть до життя через танець"
        invert
      >
        <p>
          Ми — група однодумців, які поділяють однакові основні цінності.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Професіоналізм" invert>
            У нашій студії ми прагнемо до високих стандартів виконання.
            Кожен тренер — це не лише майстер своєї справи, але й постійно розвивається як професіонал, який ділиться своїм досвідом з учнями.
          </GridListItem>
          <GridListItem title="Довіра" invert>
            Довіра — це основа наших відносин у студії.
            Ми створюємо атмосферу, де кожен відчуває підтримку і безпеку, де учні можуть відкритися та розвиватися без страху.
            Ми віримо у важливість взаємної довіри між тренерами та танцюристами для досягнення максимальних результатів.
          </GridListItem>
          <GridListItem title="Праця над собою" invert>
            Танці — це не лише про рухи, а й про внутрішню трансформацію.
            Ми підтримуємо кожного учня в прагненні працювати над собою, розвивати дисципліну та вдосконалювати не тільки технічні навички, але й внутрішній світ.
            Кожен крок, кожне тренування — це інвестиція в себе.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Olesya Yatsevka',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

function AboutStudio() {
  return (
    <PageIntro eyebrow="Напрямки танців у студії" title="Сучасність">
      <div className="typography">
        <p>
          Танець – це мистецтво, яке доступне для кожної людини - ні вага, ні статус, ні вік
          неважливі, важливе лише бажання та завзятість!
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p className="mt-8 ">
            Танцювальна студія Dance.Line.Studio пропонує різні напрямки хореографії:
          </p>
          <ul>
            <li>сучасну - Contemporary/Modern, Choreography, High Heels, K-pop, Hip-Hop</li>
            <li>латиноамериканську – Bachata Lady Style, Bachata Couple</li>
            <li>класичну – Balett та - Stretching</li>
          </ul>
          <p>
            Якщо ви вагаєтесь і не можете визначитися з напрямком хореографії – наші викладачі будуть
            неймовірно раді бачити у себе на разовому занятті нові обличчя.
          </p>
          <p>
            Якщо ж ви знаєте чого хочете – то варіант місячного абонементу саме для вас. Абонемент діє
            протягом місяця (від дати до дати) і кількість занять від 8 до 12. Заняття проходять у
            групах (10-12 чоловік) або індивідуально. Групові заняття є денні та вечірні. Індивідуальні
            – час проведення узгоджується залежно від побажань клієнта.
          </p>
          <p>Також наші танцювальні групи різних вікових категорій - від 4 до 99 років.</p>
          <p>
            Окрім вікового критерію формування груп, ми орієнтуємося на рівень майстерності наших учнів.
          </p>
          <p>
            Абсолютно неважливо на якому ви танцювальному рівні – танцюєте лише для свого задоволення
            або ж палко бажаєте здобути переможні місця на змаганнях.
          </p>
          <p>
            В прагненні навчитися чи вдосконалити своє вміння - вам допоможуть наші талановиті
            хореографи.
          </p>
          <p>
            Наші викладачі мають професійну хореографічну освіту та багаторічний стаж. Являються
            учасниками місцевих та закордонних танцювальних конкурсів, майстер-класів. Але насамперед,
            вони займаються своєю улюбленою справою і тим, що вміють найкраще.
          </p>
          <p>
            Якщо вам необхідна танцювальна студія в Ужгороді, <b>Dance Line Studio</b> – саме те місце, де ви
            не тільки навчитеся танцювати, але й просто відчуєте себе <b>щасливими!</b> Бо інколи ми забуваємо
            як це! Танцюючи, людина по-справжньому щаслива, адже вона вміє висловлювати свої емоції і ділитися
            ними з оточуючими.
          </p>
          <p>P.S. Не існує людей, які не вміють танцювати!!!</p>
        </div>
      </div>
    </PageIntro>
  )
}

export const metadata: Metadata = {
  title: 'Про студію',
  description:
    'Dance Line Studio — студія танцю для дорослих та дітей в місті Ужгород, танці Ужгород, Hip hop, Contemporary, Bachata Lady Style, High Heels, Body Ballet, K-pop, Bachata, Choreography',
}

export default async function About() {
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
    <>
      <PageIntro eyebrow="Про студію" title="Наша сильна сторона">
        <p>
          Ми віримо, що наша сила полягає в нашому професійному підході, який ставить наших учнів в центр всього, що ми робимо.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p className="mt-8 ">
            Керівник студії, Олеся Яцевська — хореограф-викладач за освітою, професійна танцівниця.
            Саме <b>професійний розвиток</b>, інтерес до нового та прагнення <b>ставати кращою</b> стали тим поштовхом, що привів її до відкриття студії в рідному місті.
            І це не тільки про особистий розвиток.
          </p>
          <p>
            Це про людей, людей-однодумців, що прагнуть займатися розвитком і підтримкою культури танцю в регіоні.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="9" label="Професійних викладачів" />
          <StatListItem value="8" label="Hапрямків та стилів танцю для кожного!" />
          <StatListItem value="2" label="Сучасних зали в центрі міста" />
        </StatList>
      </Container>

      <Culture />

      <AboutStudio />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Події"
        intro="Останні події і новини студії"
        pages={eventPages}
      />

      <ContactSection />
    </>
  )
}
