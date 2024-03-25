import { useEffect, useState } from 'react'
import authStyle from '../Modal/Main.module.scss'
import { Modal } from '../Modal/Modal'
import './Main.scss'
import enterlogo from '/enter.png'



function Main() {
	const [modalActiveAuth, setModalActiveAuth] = useState(false)
	const [modalActiveReg, setModalActiveReg] = useState(false)
	const [isActive, setIsActive] = useState(true)
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			setIsActive(false)
			setTimeout(() => {
				let Text = document.getElementsByClassName('Main_Text_Main_novision')[0]
				let Text2 = document.getElementsByClassName(
					'Main_Text_Second_novision'
				)[0]
				if (Text != null && Text2 != null) {
					Text.remove()
					Text2.remove()
					setModalActiveAuth(true)
				}
			}, 1000)
		}
	}


	
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<>
			<div className={isActive ? 'Main_Text_Main' : 'Main_Text_Main_novision'}>
				Republic
			</div>
			<div
				className={isActive ? 'Main_Text_Second' : 'Main_Text_Second_novision'}
				style={{ textTransform: 'uppercase' }}
			>
				нажмите
				<img src={enterlogo} alt='logo' />
				чтобы начать
			</div>
			<Modal
			active={modalActiveAuth}
			setActive={setModalActiveAuth}
			children={
				<>
				<div className={authStyle.content} style={{
				maxWidth: '730px'
				}}>
					<div 
					style={{
						display: 'flex',
						justifyContent: 'center',
						fontWeight: 'bold',
						fontSize: '32px',
						fontStyle: 'italic',
						marginBottom: '40px',
					}}>
						Republic
					</div>
					<div style={{
						textAlign: 'center',
						marginBottom: '30px'
					}}>
						<h2>Добро пожаловать на сервер!</h2>
						<h2>Войдите под свой аккаунт или создайте новый</h2>
					</div>
					<div style={{
						display: 'grid',
						gap: '15px',
						marginBottom: '22px'
					}}>
						<input type="text" name="authAccept_login" id="" placeholder='Логин'/>
						<input type="text" name="authAccept_password" id="" placeholder='Пароль'/>
					</div>
					<div style={{
						display: 'inline-flex',
						gap: '21px',
						marginBottom: '40px'
					}}>
						<button>Войти</button>
						<button onClick={() => {
							setModalActiveAuth(!modalActiveAuth)
							setModalActiveReg(!modalActiveReg)
						}}>Зарегистрироваться</button>
					</div>
					<div style={{
						display: 'flex',
						justifyContent: 'center'
					}}>
						<h2>Забыли пароль?&nbsp;</h2>
						<a href="#!"><h2>Восcтановить</h2></a>
					</div>
				</div>
				</>
			}
		/>
		<Modal
		active={modalActiveReg}
		setActive={setModalActiveReg}
		children={
			<>
			<div className={authStyle.content} style={{
			maxWidth: '730px'
			}}>
				<div 
				style={{
					display: 'flex',
					justifyContent: 'center',
					fontWeight: 'bold',
					fontSize: '32px',
					fontStyle: 'italic',
					marginBottom: '40px',
				}}>
					Republic
				</div>
				<div style={{
					textAlign: 'center',
					marginBottom: '30px'
				}}>
					<h2>Добро пожаловать на сервер!</h2>
					<h2>Войдите под свой аккаунт или создайте новый</h2>
				</div>
				<div style={{
					display: 'grid',
					gap: '15px',
					marginBottom: '22px'
				}}>
					<input type="text" name="reg_login" id="" placeholder='Логин'/>
					<input type="text" name="reg_email" id="" placeholder='Почта'/>
					<input type="text" name="reg_password" id="" placeholder='Пароль'/>
					<input type="text" name="reg_acceptPassword" id="" placeholder='Подтверждение пароля'/>
					<button style={{
						marginTop: '15px'
					}}>Правила</button>
				</div>
				<div style={{
					display: 'flex',
					gap: '20px',
					marginBottom: '15px'}}>
					<input type="checkbox" name="accept_rule" id="" />
					<h2>Я ознакомил(а)ся с правилами сервера</h2>
				</div>
				<div style={{
					display: 'flex',
					gap: '20px',
					marginBottom: '30px'}}>
					<input type="checkbox" name="accept_rule" id="" />
					<h2>Я ознакомил(а)ся с правилами сервера</h2>
				</div>
				<div style={{
					display: 'inline-flex',
					gap: '21px',
					marginBottom: '40px'
				}}>
					<button>Зарегистрироваться</button>
					<button onClick={() => {
						setModalActiveReg(!modalActiveReg)
						setModalActiveAuth(!modalActiveAuth)
					}}>Отмена</button>
				</div>
			</div>
			</>
		}
	/>
		</>
	)
}

export default Main
