import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">

      <h2 className="font-display text-base font-semibold text-neutral-950">
        На карті
      </h2>
      <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
        <iframe
          title="вулиця Фединця 25a, Ужгород, Закарпатська область, Україна"
          className="h-96 w-96"
          src="https://www.google.com/maps/embed/v1/place?q=⁨Dance+Line+Studio⁩,+вулиця+Фединця,+25,+Ужгород,+Zakarpattia+Oblast,+Ukraine&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
      <Button href="tel:+38 095 086 9104" className="mt-10">
        Зателефонувати
      </Button>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Як нас знайти
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Ми знаходимося в центрі міста Ужгород, <span className="font-semibold">вул. Фединця 25а, 3 поверх</span>
      </p>
      <p className="font-bold">тел.: 095 086 9104</p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Наші соціальні мережі
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Контакти',
  description: 'Дізнайтеся, як нас знайти, та отримайте інформацію про наші послуги та розклад занять.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Контакти" title="Ми завжди на зв'язку">
        <p>Ми з нетерпінням чекаємо на тебе!</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
