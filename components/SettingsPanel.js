import React from 'react'
import Input from '../components/Input'
import { Setting5 } from 'iconsax-react'

export default function SettingsPanel({}) {
	return (
		<div className='fixed w-full max-w-sm p-8 border shadow-xl rounded-2xl right-6 bottom-6 bg-zinc-800 border-zinc-700 shadow-zinc-900'>
			<div className='flex align-center'>
				<Setting5
					size='32'
					color='currentColor'
					variant='Bulk'
					className='mr-2 text-indigo-500'
				/>
				<h3 className='mb-4 text-2xl font-medium text-white'>
					Settings
				</h3>
			</div>
			<div className='grid gap-4'>
				<Input
					label='Event Title'
					placeholder='Add a title..'
					type='text'
					name='eventTitle'
					id='event-name'
				/>
				<Input
					label='Event Address'
					placeholder='Add an address..'
					type='text'
					name='address'
					id='address'
				/>
			</div>
		</div>
	)
}
