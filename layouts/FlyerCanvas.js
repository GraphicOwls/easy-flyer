import {
	FieldValue,
	useSubformEffect,
} from '@oneform/react'

const defaultValues = {
	artistNameDisplay: 'Artist Name',
	eventTitleDisplay: 'Event Title',
	eventSubtitleDisplay: 'Event Subtitle',
	addressDisplay: 'Event Address',
	timeDisplay: 'Event Time',
}

const watchedFieldNames = Object.keys(defaultValues).map(
	(key) => key.match(/(.+)Display/).at(1)
)

const onChange = ({ fieldName, value }) => {
	if (watchedFieldNames.includes(fieldName)) {
		if (value) {
			return { [`${fieldName}Display`]: value }
		} else {
			return {
				[`${fieldName}Display`]:
					defaultValues[`${fieldName}Display`],
			}
		}
	}
}

export default function FlyerCanvas({ children }) {
	useSubformEffect({
		onChange,
		values: defaultValues,
	})

	return (
		<div
			className='relative min-h-[840px] w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800 p-8'
			id='flyer-canvas'
		>
			<span className='text-4xl font-black text-white flyer-text'>
				<FieldValue name='artistNameDisplay' />
			</span>
			<span className='text-lg text-white flyer-text'>
				<FieldValue name='eventTitleDisplay' />
			</span>
			<span className='text-lg text-white flyer-text'>
				<FieldValue name='eventSubtitleDisplay' />
			</span>
			<span className='text-lg text-white flyer-text'>
				<FieldValue name='addressDisplay' />
			</span>
			<span className='text-lg text-white flyer-text'>
				<FieldValue name='timeDisplay' />
			</span>
			{children}
		</div>
	)
}
