import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'
import ScheduleThreeFloor from '@/components/ScheduleThreeFloor'
import ScheduleSecondFloor from '@/components/ScheduleSecondFloor'

export const metadata: Metadata = {
  title: 'Розклад - Dance Line Studio',
  description:
    'Танці Ужгород, Танці для дітей, танці для дорослих, сучасна хореографія, Dance Line Studio - розклад',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Розклад" title="Розклад на тиждень">
        <p>
          Якщо ви плануєте відвідати нас вперше, обов’язково зателефонуйте або напишіть нам у Viber чи Telegram. Ми з радістю проконсультуємо вас, коли, як і в чому найкраще прийти на заняття.
        </p>
        <Button href="tel:095 086 9104" className="mt-10">
          Зателефонувати
        </Button>
      </PageIntro>

      <div className="mt-6 space-y-24 [counter-reset:section] sm:mt-16 sm:space-y-32 lg:mt-12 lg:space-y-40">
        <Container className="group/section [counter-increment:section]">
          <FadeIn>
            <ScheduleThreeFloor />
            <div className='mt-6'></div>
            <ScheduleSecondFloor />
          </FadeIn>
        </Container>
      </div>

      <ContactSection />
    </>
  )
}
