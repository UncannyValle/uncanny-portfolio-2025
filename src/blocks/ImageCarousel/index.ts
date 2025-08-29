import { Block } from 'payload'

export const ImageCarousel: Block = {
  slug: 'imageCarousel',
  interfaceName: 'ImageCarousel',
  fields: [
    {
      name: 'media',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: true,
      label: '',
    },
  ],
}
