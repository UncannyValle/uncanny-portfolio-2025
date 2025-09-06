/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@payload-config'
import { GRAPHQL_POST, REST_OPTIONS } from '@payloadcms/next/routes'
import type { NextRequest } from 'next/server'

export const POST = GRAPHQL_POST(config)

export const OPTIONS = (request: NextRequest, _ctx: { params: Promise<Record<string, never>> }) => {
  const handler = REST_OPTIONS(config)
  return handler(request as unknown as Request, {
    params: Promise.resolve({ slug: [] as string[] }),
  })
}
