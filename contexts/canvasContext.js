import { createContext, useState } from 'react'

export const CanvasContext = createContext()

export const CanvasProvider = ({ children }) => {
	const [artistName, setArtistName] =
		useState('Artist Name')

	return (
		<CanvasContext.Provider
			value={{
				artistName,
				setArtistName,
			}}
		>
			{children}
		</CanvasContext.Provider>
	)
}
