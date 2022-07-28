import Head from 'next/head'
import SettingsPanel from '../components/SettingsPanel'
import Container from '../layouts/Container'
import FlyerCanvas from '../layouts/FlyerCanvas'
import Section from '../layouts/Section'
import FlyerImage from '../components/FlyerImage'

export default function Home() {
	return (
		<div className='grid min-h-screen place-items-center bg-zinc-900'>
			<Head>
				<title>Easy Flyer</title>
				<meta
					name='description'
					content='Edit a flyer template and export as a shareable image.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section>
				<Container>
					<FlyerCanvas>
						<FlyerImage
							src='/assets/images/guitarist.jpg'
							alt='Flyer Image'
						/>
					</FlyerCanvas>
					<button className='w-full py-2 mt-4 text-white transition-colors duration-150 bg-indigo-600 rounded-md hover:bg-indigo-700'>
						Export Flyer as Jpeg
					</button>
				</Container>
				<SettingsPanel />
			</Section>
		</div>
	)
}
