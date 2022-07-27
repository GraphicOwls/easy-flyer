import React from 'react'
import { CanvasProvider } from '../contexts/canvasContext'

export default function Section({
	children,
	classes,
	bgColor,
}) {
	return (
		<CanvasProvider>
			<section className={`${classes} ${bgColor} relative`}>
				{children}
			</section>
		</CanvasProvider>
	)
}
