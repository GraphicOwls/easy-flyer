import Head from 'next/head'
import SettingsPanel from '../components/SettingsPanel'
import Container from '../layouts/Container'
import FlyerCanvas from '../layouts/FlyerCanvas'
import Section from '../layouts/Section'
import FlyerImage from '../components/FlyerImage'

export default function Home() {
	return (
		<>
			<Head>
				<title>Easy Flyer</title>
				<meta
					name='description'
					content='Edit a flyer template and export as a shareable image.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Section classes='py-6 px-[4%] bg-zinc-900 min-h-screen grid place-items-center'>
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
		</>
	)
}
