import React from 'react'

export default function FlyerCanvas({ children }) {
	return (
		<div
			className='w-full p-40 rounded-lg bg-zinc-800'
			id='flyer-canvas'
		>
			{children}
		</div>
	)
}
