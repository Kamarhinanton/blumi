import { ComponentBaseTitleWithIcons } from '@/gql/graphql'

export const blumiAddress = 'https://blumi.co.uk'

export const cleanedTitleWithIcons = (
  titleWithIcons: (ComponentBaseTitleWithIcons | null)[] = [],
) =>
  titleWithIcons.filter(
    (item): item is ComponentBaseTitleWithIcons => item !== null,
  )
