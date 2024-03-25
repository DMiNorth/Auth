import './Modal.scss'

export function Modal({ active, setActive, children }) {
	return (
		<>
			<div className={active ? 'modal active' : 'modal'}>
				<div className='modal_content'>{children}</div>
			</div>
		</>
	)
}

