import { useContext } from 'react'
import { CanvasContext } from '../contexts/canvasContext'

export default function FlyerCanvas({ children }) {
	const { artistName } = useContext(CanvasContext)

	return (
		<div
			className='relative min-h-[840px] w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800'
			id='flyer-canvas'
		>
			<h1 className='relative z-20 text-2xl text-white'>
				{artistName}
			</h1>
			{children}
		</div>
	)
}
