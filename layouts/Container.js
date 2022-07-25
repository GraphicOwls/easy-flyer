import React from 'react'

export default function Container({ children }) {
	return (
		<div className='relative w-full max-w-2xl mx-auto'>
			{children}
		</div>
	)
}
