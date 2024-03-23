import { permanentRedirect } from 'next/navigation'

import { getServerSession } from '@/features/auth/lib'

export default async function Page() {
  const session = await getServerSession()
  if (!session || !session.user) {
    throw new Error('User not found at /profile/favorited-builds/page')
  }

  permanentRedirect(`/profile/${session?.user?.id}/favorited-builds`)
}
