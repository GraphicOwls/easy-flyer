import { useState, useRef, useEffect } from 'react'
import Input from '../components/Input'
import { Setting5, ArrowCircleDown } from 'iconsax-react'
import { Form } from '@oneform/react'

export default function SettingsPanel({}) {
	const [fieldGroupHeight, setFieldGroupHeight] =
		useState(null)

	const fieldGroupRef = useRef(null)

	useEffect(() => {
		setFieldGroupHeight(fieldGroupRef.current.clientHeight)
	}, [])

	const [fieldVisibility, setFieldVisibility] =
		useState(false)

	const handleFieldVisibilityChange = () => {
		setFieldVisibility(!fieldVisibility)
	}

	console.log(fieldVisibility)
	console.log(fieldGroupRef.current.clientHeight)

	return (
		<div className='fixed w-full max-w-sm p-8 border shadow-xl right-6 bottom-6 rounded-2xl border-zinc-700 bg-zinc-800 shadow-zinc-900'>
			<div
				className={`transition-margin flex items-center duration-500 ease-out ${
					fieldVisibility === false ? 'mb-4' : 'mb-0'
				}`}
			>
				<div className='flex items-center w-full space-between'>
					<Setting5
						size='24'
						color='currentColor'
						variant='Bulk'
						className='h-6 mr-2 text-indigo-500'
					/>
					<h3 className='text-xl font-medium text-white'>
						Flyer Content
					</h3>
				</div>
				<ArrowCircleDown
					size='24'
					color='currentColor'
					variant='Linear'
					className={`mr-2 h-6 cursor-pointer text-indigo-500 transition-transform duration-500 ease-out ${
						fieldVisibility ? 'rotate-180' : null
					}`}
					onClick={handleFieldVisibilityChange}
				/>
			</div>
			<div
				className={`${
					fieldVisibility
						? 'h-0'
						: `h-[${fieldGroupHeight}]`
				} overflow-hidden transition-height duration-500 ease-out`}
				ref={fieldGroupRef}
			>
				<Form>
					<form
						className={`${
							fieldVisibility ? 'opacity-0' : 'opacity-100'
						} grid gap-4 transition-opacity duration-500 ease-out`}
					>
						<Input
							label='Artist Name'
							placeholder='Paul Damon Band'
							type='text'
							name='artistName'
							id='artistName'
						/>
						<Input
							label='Event Title'
							placeholder='Pickwicks Jam'
							type='text'
							name='eventTitle'
							id='eventTitle'
						/>
						<Input
							label='Event Subtitle'
							placeholder='Come jam with us..'
							type='text'
							name='eventSubtitle'
							id='eventSubtitle'
						/>
						<Input
							label='Event Address'
							placeholder='123 Street Ave Studio City, CA'
							type='text'
							name='address'
							id='address'
						/>
						<Input
							label='Event Time'
							placeholder='8:00 - 10:00pm'
							type='text'
							name='time'
							id='time'
						/>
					</form>
				</Form>
			</div>
		</div>
	)
}
