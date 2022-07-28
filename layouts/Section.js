import { OneFormProvider } from '@oneform/react'

export default function Section({ children }) {
	return (
		<OneFormProvider>
			<section className='relative w-full px-[4%]'>
				{children}
			</section>
		</OneFormProvider>
	)
}
