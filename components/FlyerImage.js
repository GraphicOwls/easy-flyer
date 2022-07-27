import React from 'react'
import Image from 'next/image'

export default function FlyerImage({ src, alt }) {
	return (
		<Image
			width='640'
			height='840'
			src={src}
			alt={alt}
			className='absolute inset-0 object-cover'
			layout='fill'
		/>
	)
}
