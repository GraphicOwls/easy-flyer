import Head from 'next/head'
import SettingsPanel from '../components/SettingsPanel'
import Container from '../layouts/Container'
import FlyerCanvas from '../layouts/FlyerCanvas'
import Section from '../layouts/Section'

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
			<Section classes='py-24 px-[4%] bg-zinc-900 min-h-screen grid place-items-center'>
				<Container>
					<FlyerCanvas></FlyerCanvas>
				</Container>
				<SettingsPanel />
			</Section>
		</>
	)
}
