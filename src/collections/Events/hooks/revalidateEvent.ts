import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Event } from '../../../payload-types'

export const revalidateEvent: CollectionAfterChangeHook<Event> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/events/${doc.slug}`

    payload.logger.info(`Revalidating event at path: ${path}`)
    revalidatePath(path)

    payload.logger.info(`Revalidating event at path: /events`)
    revalidatePath('/events/')
  }

  // If the event was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/events/${previousDoc.slug}`

    payload.logger.info(`Revalidating old event at path: ${oldPath}`)
    revalidatePath(oldPath)

    payload.logger.info(`Revalidating event at path: /events`)
    revalidatePath('/events/')
  }

  return doc
}
