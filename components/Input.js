import { useRef, useState } from 'react'

export default function Input({
	type,
	name,
	id,
	placeholder,
	label,
}) {
	const [value, setValue] = useState('Default title..')

	const refTarget = useRef(`${name}`)
	const handleOnChange = (e) => {
		setValue(refTarget.current.value)
	}

	return (
		<div className='px-3 py-2 border rounded-md shadow-sm border-zinc-700 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600'>
			<label
				htmlFor={name}
				className='block mb-2 text-xs text-zinc-300'
			>
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={id}
				className='block w-full p-0 bg-transparent border-none outline-none text-zinc-300 placeholder-zinc-700 focus:outline-none focus:ring-transparent'
				placeholder={placeholder}
				onChange={handleOnChange}
				ref={refTarget}
			/>
		</div>
	)
}
