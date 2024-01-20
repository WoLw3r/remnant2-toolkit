import { isErrorResponse } from '@/app/(types)'
import BuildPage from './page'
import { getBuild } from '../../actions'

export default async function Layout({
  params: { buildId },
}: {
  params: { buildId: string }
}) {
  const buildData = await getBuild(buildId)
  if (isErrorResponse(buildData)) {
    console.error(buildData.errors)
    throw new Error(`Build ${buildId} is not found. If you are sure the build exists, it may
    be marked private. You must be logged in as the build creator to view
    a private build.`)
  }
  const { build } = buildData

  return <BuildPage params={{ initialBuildState: build }} />
}