import TelaInicial from '../TelaInicial';
import { Badge } from 'reactstrap';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { Collapse, Button, CardBody, Card,Container,CardImg,CardGroup,CardFooter,Input,Label,FormGroup } from 'reactstrap';

class Refrigerantes extends Component {
	constructor(props) {
		super(props);
		this.tamanhoPadrao = 24
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false,
			tamanhoLetra: this.tamanhoPadrao,
			classeContraste: 'semContraste'
		};
	}

	moficarFonte(valor){
		if(valor > 0 && this.state.tamanhoLetra < 40){
			this.setState({tamanhoLetra: this.state.tamanhoLetra+valor});
		}else if (valor < 0  && this.state.tamanhoLetra > 15){
			this.setState({tamanhoLetra: this.state.tamanhoLetra+valor});
		} else if(valor===0){
			this.setState({tamanhoLetra: this.tamanhoPadrao});
		}
	}
	
	moficarContraste(){
  	if (this.state.classeContraste==="semContraste"){
  		this.setState({classeContraste: "comContraste"});
  	}else{
  		this.setState({classeContraste: "semContraste"});
  	}
  }
	toggle() {
	this.setState({ collapse: !this.state.collapse });
	}

	render() {
	return (
		<div className= {this.state.classeContraste} >
		<div style={{background:'black'}}>
			<Button color="link" onClick = {() => this.moficarFonte(-2)}>Diminuir fonte</Button>
			<Button color="link" onClick = {() => this.moficarFonte(0)}>Fonte normal</Button>
			<Button color="link" onClick = {() => this.moficarFonte(2)}>Aumentar fonte</Button>
			<Button color="link" onClick = {() => this.moficarContraste()} style= {{float: "right"}}>Constraste</Button>
		</div>
		<TelaInicial/>
		<Container style={{padding:'10px',float:'center'}}> 


		<Button  color="primary" onClick={this.toggle}  style={{fontSize: (this.state.tamanhoLetra*0.66)+'px', marginBottom: '1rem' }}>Especificações</Button>
	<Button color="danger" style={{fontSize: (this.state.tamanhoLetra*0.66)+'px',float: 'right' }}>Finalizar</Button>
	<Collapse isOpen={this.state.collapse}>
		<Card>
		<CardBody>
		<FormGroup style={{color:'black'}}>
		<Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="RefrigerantesNumber">Quantidade:</Label>
		<Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="number" name="number" id="RefrigerantesNumber" placeholder="Digite a quantidade" />
		</FormGroup>
		<FormGroup style={{color:'black'}}>
		<Label style={{fontSize: (this.state.tamanhoLetra)+'px'}} for="RefrigerantesSelect">Tamanho:</Label>
		<Input style={{fontSize: (this.state.tamanhoLetra*0.7)+'px'}} type="select" name="select" id="RefrigerantesSelect">
		<option>Médio</option>
		<option>Grande</option>
		</Input>
		</FormGroup>
		<FormGroup>
		<Button style={{fontSize: (this.state.tamanhoLetra*0.66)+'px'}} color="primary">+Carrinho</Button>
		</FormGroup>
		</CardBody>
		</Card>
	</Collapse>
		</Container>
		<div style={{padding:'10px'}}>
		<Container style={{padding:'10px'}}>
			<h2 style={{fontSize: (this.state.tamanhoLetra*2)+'px',marginTop:'20px'}}>Refrigerantes</h2>
			<CardGroup style={{marginTop:'20px'}}>
				<Card inverse style={{borderSize:'1px'}}>
					<CardImg width="100%" alt="Selecionar Refrigerante de Coca-Cola" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2fCBzNRu9nHs3NDnN-BSF5Awi3RuXdEIBbXLy99gB24mT3NN4" />
					
					
					<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
						<FormGroup check>
							<Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
							<Input type="checkbox" id="checkbox2" />{' '}
							Coca-Cola
									
							</Label>
						</FormGroup>
					</CardFooter>
				</Card>
				<Card inverse style={{borderSize:'1px'}}>
					<CardImg width="100%" alt="Selecionar Refrigerante de Fanta" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMWFhUXGBgYFxYXFhcXFRoaGBUYGBgYGRgYHSggGBslGxcYITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0mICUtLzctLS0tLi4tMC0tLS0vLS0tLS0tLS4vLS0rLS0tMC0tLy0yLS81LS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADsQAAEDAgUCAwcEAgIBAwUAAAEAAhEDIQQSMUFRYXEFIoETMpGhscHwBkLR4RSCUvEjFTNiNENykrL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQMEBQIG/8QAMhEAAgECAwMMAwACAwAAAAAAAAECAxEEITESQVEFEyIyYXGBkaHB0fBCseEVQxQjM//aAAwDAQACEQMRAD8A9vzAalSUIn7JqDnEeYQZI7ibHogCxJM5wAkpqdQOALSCDoRcFAA/sXGoCfdE/uNzIjyxAgTeUUoueBAO6coAdJJJACSUDTEl0XIA+E/ypBACJUaVQOEjSSPgYPzCmoucB0QBJJU1w6xaYuJHIkT8lNlQGYIMaoAmmSIUKNPKImbnXqSQPTT0QAzs0zIi0D6yforVVUcZFpG/qnbTAM7/APX8IAsSSSQBFjwdE4SjhJo6ygCDC6TIEbcpvYDNm342nSY5i08JVM0gjQahWoASYpSnQBFrI/Pz8CkkkgCLWAaKSYhVVS6QBpBk72iBHWTfp1QBKpVgwBJ7x+f0qH4sghuW9s1wQ0Gdd9RHqiGsjcqrKxxNwbQRYjcGR6oAem/NIcIiLfQ/EfJRrYVhJJ1Lcp8xHlmdAfmrG0GgAAQAZQuHxntHPytIyuLJcNcup6NvYoANpsAAA0CgKAFgSBwDYduB0U2OkSpIAz/CPEmV6Ye3s5p95rhq0jn66rQXA/5rKONGIoiKNaWVo0zt0J2zDniy7ulUDgCCCCJBFwQdCEkwJEKFOiGgNaIA0A4ViSYEKlMO1EwQfUaJ6ZMXEGT1tNvkpJIAjUJgxc7BNTcSLgi51+qkQnQAkwKZyZrxMcIAmmISlKUAMWpmUw2SN9T2ED5KaYoAYgEchIBMGXmbcff85UkAV+0BMTefsDHwOirpYoOIEESJaTEHmBM8K0N3IBPICcMHGlh0HThICSqe10kh3YQFOo4gSBKq9ta4vwDNuRFymA+FYQ2DyYkyQOCdyrgmAhOgBFNMCSdNSpKManXogCmlTafMJ1J4PWenRXNB3UaR1GWANNINtlYgBiUpVFJ7iSCLdj1tfXa45VwKAEHdFB1SNbDlWIPEYhweGZCRlLi8jyjKRI6GDKAL8VSzscyYzNLZGokRIWbQwxDfMAHS1z3jyAZdb8QNOt9UayvmuTlENIG4DtJI6ync0nM0kw4ETxM6Ht9EALBY+lVBNN7XwYOUzB4PCVai6Zblvqdx1QfhXhgotIa1ocXhxIEA6T8p+K1kAV4dsNAmeqhhqrnNDi3KT+2bjoeqvSQBk4PwWmzDNw0AjLBJE5nG7nX1JMlYn6T9rhnPw1SXUm1C2k+R5ZAIpuGoBM5TptquiwZpsa2k0xkAa0OcSbCwk3NvVZniuD9sxzSMtQ/vbtBb5uhba2sEwkFjoQU6y/AsWX0wHVGVHACXs0eNnRsTuOQVqITuAkkxUKWb90b6d7fLVMCxJMCnQBCoVRh2eUgG14O8zfXqra4MGFXg7sHJknuSSR6aeiALM8a/nKhSxTXaGSNQNlA4cl4cYdAAbOs3k8JYTBhhe79zzJ4ECAB0ASzGVYvxH2bc7hDQ4NO58zsoiNeyLZVkkQbR2TvpNMSAY0n5KGIxDWAucbASbTHVAhHFMDspMG+uhjWD0TvfLSRex/6UHYdjsjtQ0lze7gQT8HH4qxjRqBE6pgB4nFEU5DTIJkf/ABYfMQeNvVEYJxNNhOpaD8kN4s6n7NwqOIESSJFpG4FhpPRQwWMbUZTeHhoJADc0RAHlAI8029CEgNJ0wY124lV0Q6DJBMmP7jrKdj3FxBFtiq62LDSZGnUSbftG/HdMAhk7p0zTIlOgBEp1XVaYt+Xv8k9F0tBkGwuNPTogCRSTqJCAE9sgg7iPioU6eWwiN+6k9s7kdk8oAoxOIylrRdzpgTwLk9NB3IWe3E1A6mwyXOnNMBtm5iA0mdxpI1vyfiaQLmuytLmzBcJInjjZKpSDi18XEw6PMAeJ2SAelhmNs1gANyBprNh3n4q6AB0CcJwmAglKU30SAQAk6SSAMfxJ1KlT9pUIDWvDpIm8gADqTb1QXjzDVpHE4V3/AJaRkaiS0SWPHY94PVa2IoNeGh1w1weAYiW3E9jf0Sw8MLpADXEGwN3GxLj18oQBydXEnDvo4ik0+wqHMQTAaHgZ6cbEOGYdZG67RmIBYHi4IkEaREysrxbwwVKb8NOVtQHI7/i/8v8AFDfpLElrDRe0NfTe5jmgktzAB0sm4a4OzRzmXIHQZyYjpINjBVqi0/D5pyV0AiVHaBG3wVThIJkkECwP0kwJQ+ED2uqZrsJBYTFhlAy/EE+qACcRTzbkEaHg/dC4VzhEQ4OeY2yti4nc2J9dkz8SwW5kZZvPEaXS8PB1yxYTGxOo+QSGGUsQ0uLQbjX82VpKHpYmZlpEazEK9rwbi4TERrVWtEuIA6210UXsbUaRYtNjEEEbgqOKwzX5c37XZh3SwlDIItJJJ1i/E6bJZjysTquIAgT6wAE7HSAdJvCVN1yCRrbmLa+sqNXNLYIibyYt0sZ+SBCc289OiAqYGjUg3aRx5SdNt9BdaLhKDp0RoSfKZknUAyO0QPTuhjTsFhpiJvygaNIurS9s5QbuFg4uGU09ogEk6+YaaKNTxBrTmF2EwXaixNgJ163m3RaaFZg00OkCkE6YhnNmyow4eHEGC2BfQ5pMgDiIREqMXlAEWVQZggxqpSmgCTAHKEq1ZLZloN+J4HTn0QBfSoBpJE3n5mfX1SrVmt1OvQn6KmiC0ATqeDP51Q9HEGoA9hdBO7ctv9hKALnYp0Z4GWd9ehKtZVJiw7B3Gs9eiaDOUsJBF3SIPQjnqp06ADQL2/PX+kAAY3H1KYNRwAYDBbBJAvLyQdIgxCOwlcu22kGDBB3CtbBFxE6gxvsUqFIMaGjQCBvA2F0AWJJoToASSSSAAwU+UGJAtpbRVgqYKBEsXTJae4IPBXPY2sGuGKbZoeBXA1BaCA6Yu2HXHUHZdDTJzRNiNDrbhZ2Jwga5zm3Y+W1G9dndCPukM0sJimvaHA6iY3SdOU5jNzsNOOtlguxrKFN1YNljJkgXuWgxG1h8FrYbxGm5rXBwAc0OE8ESEoyurnUo2dirGS0FwdknI1pJiSTJtzA73Kep4nADssAyIPvZgCQB6BR8UyPaBOY5g5rWkhxcNLgggc9JQFfBikwVKjnlzSXXdmEkm0TAAmBeAFw5XbSY0rZsuMOLKjmgNBMBpJIJc0y6Bc20HKKGOpNcfOBMTfj8hU+B1HFjg9hZLzAcR+2BaDJFteh6I/FYemWlpFjrlF/kEmpqPRav2/UNODl0l5GZW8So+0zB7uuUSDxrwqKPj2oyOjaItfUCDE8XU2YcNqNFOlTNLKSTUze1LibCCIY0Dcib6bqWHq4h1SahpMpNbYUw97yZEE5mw0CLWVdLENdKcV3K/wC2T/8ASurFvvfwF4LEV3iAAI/e9pGYTbKyx0iSY7Kyq6s6we1jf+TfM4joDohBENqPlzxmAdEZc2omTlHcn6K3NEeTeNbQNmu7xtCmvfeyO3YXDCOIH/lIJJMx5jIiO4VOG9pSc2nUdmB9x0EkmdHEz5okzZJ1QGzXxctJbNrEbWN+2h4sTSouluYyGyRPvTBbJO/lJ+K7Uc9/mcN5bvIMQGI8QpB+Q3eOmljc8BA+O+OMpgsaTnO429fv91yeGrOzF41acwA0F+DY9ZF1TxXKEKMlFZvf2FvD4CVWLm8lu7TbxHi9QNDmhkzbM3O60EgEZWi9+UJ4h4vUq5BndTDRfI5wknl2pHRC0qc5wabnOImZPlJvJteVS2kLLDr8qVNzy+H3GnTwlJarM6PC/qFzQGuIcAPeM5j3RtP9SMM2210k8X+q5iphssbyJ7d4UMgPol/mcRCWy7EbwVGWaOz8P8ZbUdkLS0xOoLe0+q0sy84aajDma4/EwjMD4nWuA7u3KNOZGh5K0sLywp2jJO/YVa/J9k5Qasds6pws7xFhIAzXLotPHTQRKG8DxZqNcCfdgCBFrgaze3zCjXzuqta0ktm5/wDkJ3tP9LYpzU4qS3mbODhJxYxmnUyiajngRDocHDd4Js0Ae9r0W4wQBmN4APB207pqVAgkzqZ0CarhA5xcd25SNokn7/RdnI7nNaHGTa5vJ+ag/FGwDSXOBIHAEXPxCJyjhL2TeNo9EwINbIkWJ1VjJi+qcBNkvKAJJJJIASSSSAMwvA+IHYkSJ4SqOd7rdfz5rH8Vr0mvyTlqkMcWF1oMhpdJjVugvZA4zD16r8wqOYDAz/8A3AXahocIbI3HaRdIAzB44h7vauggw1oIDrDzGHGeiJxjX1ABSJpulriXjNbNcFu8jqjMPVFMAOLiSAMxuYFpJ3+iaoAXQx5/jmQehsgRImzQ50ACIaAM0iJ0Mb2HKsLKRblyQIDRFhGgAj0VVRgkuM2153iJFyhmVw6+zSCYN9b2sefmgdzQyFrgWNhsXhoLj6yqsRSzTmYC0mSCZvsb69uiqxGJMjLcHeSZHS/P0+GdiMS9rs0G593UQBeRN/6UNSpGmrsmp03N2RqufsZf0GoHJkwgxXDiQ1hfJjK9lhzeb6ISlic1zGWdADAFp0v+dkVVrtbcCTcCDAvCqyrqUdq9l6/fMsxpOLta7LalctGUsaBGgbb/APXa9u/xQxxuha0XGpyta07CYi3ohMRiCTBcQCA2JMT+ShsZWLR7Me6LmAQHE3kyqVfGKEJSzyyXf9uWIYe7S46myz22WAC55gyTIy3u06EqNcvosl4EReILZkQIs6TJNrCDyEB4ZWrsBczSJgtJafXZZ1PHs9sH1pyySQ3k304lcLHpQjk1J5K+i7bnSwspSejSzdte42KfiTCGta0huk2awOkQQAbam2vzRJxGIdTcwls3Ac1jgSOIJidpn4LLwGKZVrPNMEsa0HKQ2XEEjN1AHrosj9TeK1qrvYva0XAAG5IsZPMg/BXI4jo3lK98st5UrUtiWS0NAfpmoNDneb5SWg9Sbmd/VDf476TyD5XCQQYOwPqLiFmeHVXtdlcXe0pyCJuIBtM2t9CtTCOL6gnzE6zcn1OixK3NtuMYuMr5O7ftc1oOo4qbldW0sl9sa2BfS9nleHEzmzC41gZjtBGm1kBiKQa7K1wIG40/v+lN+ILgGg+XUNBJbe+irY0kwB+fZQ4yqpRjBLq79/31OaUHFuTevkRazeSmdT30WlQ8Ke65t9UUPAwNSVUhhaks0gliYRepz4q5ZBMg6QbSrMPiqbKjXMMkTmbeBINs2ju3XeIWzW/TVNw3WfiP049hljrAWaRbvIhaFGnOgtprx1sRTxFObsvHcC/+r1W1c5JIOo2joF1H6exntGufa0WA04g8Fcni6DxIe2Dsrf074iaNUAnyPgOna+vorPJ+PnCrsVJXTY8ThIVKW1BZrgd/TcTqI+anlUWDrKmF6gwR0kkkAJJJJACSSSQAkwTpIAwqgZ7T2hDbDKXEXAuQJvuZgc9kSyCQ4EACR0ITNYxwNMCW6ETuL6qtrDBIDgG2yxbRAiTrh3lF9jffb0VVOk0FzwfeAbHAbIgJsNWDiLRbTaREj5q2qSPdtpcd7oAE9sdQSWxeAC2QLnKb6n4BCzkqEGmIDS4Fp94SBadRBJjsjsYBFwSBBMRcRDtNbEyFk1qFSqyjmdA3aBeCbEyOscC2spDNPEkFobPmk7iRJus5mYAuJsAAedYsjqrKRFiWn3Q+ZPGh6lZ9Wi8ayRMT1HTlZ2KbXTtfhb3NDD26mj3/AMJ2cSQBrZo001POyVGmXR5SZMAAxcQNfVRayHAQ0W0Nzfpz30spDpFhJkmSQDAnqVRknKac/v30LSsk1EtdTawyRA90gm8gm4+H0WPWPmJ5J1JJv1P5ZFYnM67iXGTfuZgdBp6IVwg2+Ky+UMVzkubgrRT8/vAnw1O3Sk7sIo+JVGU8gd5YNiOdQOdVnY1weW06YnYGILidZV1bv6dIkFVVqjjUa5pDC2IIMRG/UrhVJyShN3WS8N9uBZhCMXtJZ+/aP4bijhngPYCSCJJcC2NYI28wmEsNgP8AKc51SbuzZwRnLTZrADYaG5j1mwePY2q32mbQ3N7kjzaWlafg2HxbQTRc0hzAB7QDPl21vbqtmhZpQtdLxZi4uNRVXKW/yOfq4dtCu6lfKQCCYBg9uoIlG4THGm6fSdR/sFVjqVSl7Q4n2ramafaMDXB2YDK13mENAFomJKzhjRsTcfPr81Rrw2am1mjQ5PqKcXS8V8HR4F1V9QsItA7jof4touu8PwIaOqx/0nhTkznU3K1/F8VkYGg3PxA5UVJRd6s9FoQ4qblU5qAbUqNaLkDusTH+J1MxAgDbeeqAe8xuef5SD7XuFHVxcp9FdEdLDKGbzCGeKVR+75CEXhfFnGzsu/TQaLKywmj4qBV6sHfab7LksqNOS0OlZ7Oq2YF9jqsLxb9PRLqfwVFR5BGvT8+C0vDvEyLPuI13H8qWNanUdpKz4kSp1KPSg8uBreA4kvotze83yunWR/ULSBWTUaWHOz/Zuzh/PBWhRrBzQ4aFeqweJ5yOxLrLX5MqtHPaWjCUoUWlPKukI6qosImTNzeZ3MfKFZKdACSSSQAkkkkAc5gsKWtHmHle4yDcd/4Um40Z3sBP7XdBJIj5fNP4OYoGG2bPlH/Haw0ssTA0HO9o5wipWf5RJgMZYDoMt+7igRvUcJ5pmPO4j/YfnwTsLszgdjAHItcepRAqiPkq6pDsrs0QbmCbCdRugCjGYtrA4ONyPLHWQUGKTqVMOcLZpBJBANhJIuDbp6q7D12VcpGWoAM4c3a8wTyYNuir8VbnyuPkAdF23LjuB8dlWqbUW5eXu2WKey0o+ftYswHmaGeU2FiIJMmSHb6fJTp0qhLgRliobyLtgXk/lismrUIZllzvP7xjS5gb2K0MG72jRLSYkG4ymwgunoo4YiDqc0uBJOjJQ5xlmKLbh0SLSeo2QVCnmgON4ueTGqKxOFJBA01E8iQR8FX4czK6S3MR7o4PXhVMTzk6qpbPRer/AKTUlGMHK+fAGq0XAGxsPXugnRaOkla3iVQsHnylxsDBFt45GnqFjPndYWPoxpVNmL7+w0MNJzjdkMS6TJueZWbVpOcHRcASdNEc9yEqVXAOaDAdGYcxcKsmm7yNCmmlkZDQA9pcPLmBI6SJXcYz9QYYBppVTmsIDDYE725+q43ENQjWEEX/AO9vmr+ExcqSskszjGYWNWO028k9DS/UmN9rlqZxBJApAkuaASAX9T91g+yILXDQmPlP2WgKAqOABDSd3GG+p2VGGZIJmcri0cWN11Uq7V5S+sxcHTlUrRcd2v3tPUf08B7MdggvGmn2h9I+CI/TlYFgIEdFV4xUmqR0ETEHdV7ReFS7SaF1iJALH2tbkH6hOG8Kt4vfX84V9NriJF/zRQw6WVtC1LLMra2x6apNHm7a/CStLDYZsZqkgGRc7c/nCuxXhpAOUXDSOrvTlW/8fPYUn/Sv/wAmN7GDzPdS6lSY3bfhOeo+IP1WfzeRabNTwrHmzHXB0PHTsj2n2T7+44+gdsfVc/QpTH8HbsF0j2h9PmQtPB1KijfetO7gZ2JjFS7HqHtKnKzPD8VLIcfM2x9CRPrCuNckgAGIkmO0DMbb7TovVU6iqQU1vMyUXFtMMzJ86DY5xbBseTE9ORP5CahBdGU2G4N/9iIJXZyGPExBIg362NvjB9FMgyL/AJb89Vh0sZUZU9m9haDJbUMFr4PukAnIYdqTeD6aDPEWxMiNJBkbcd/qgA1s7p0DWxpDgGxredYg6c3hXMqNN9J6oAwfBHZQadP/ANsCddzc63Q/g9bPUc90FzMzRwGkgkfIIrxCs2iwsb7ztANZKhg8I2m0ZoDnC/UnX1Qchr2gOjTNJ9VGlYQTB16apnDTTNsDvH3Um1NJaAeBp80DK8OBq0ZQb6Qb627oDEB73Aud5QT5ZvmBIHyAuj8W9p0Mcja+yzzhHuYWlxbDRIdEZicz3SR9FXqq+VronpO2d7MyRUJ2i+k2F0Rh6rmmWkjsYR3+HTs1pD3am8z6rPotuRItyYWHWw1SnJS48DYp16dROK3cTYp44ADM0xpIvxqOZmwmyjiMS1wAY+C7QG2YAbTvBlDUgNZBkCD13HQ9VOobCRJPwnpG60XWcqavwzZSVFRqO3ggTFYWtJcWuI7yhKtOpaWuvbQrUw2NIcW6SbXPEb67InC+IFx/8giJkgGbC8gaaLKeAoVHdTefj8Fzn6sPxWRzFR0CN90LVR3iuJFR+cAxEX1sqcfgXUw0uPvDTQjTnuLrMlRzlsu6W/8ARqUpq0drJvcBYiqXMayBDZMxczyVb4PgmPFR7ml+TLDZIHmJEktvsFQ9qrpV30zmY5zTy0keltVJSqKM05Zk1Sm5U3GDs2UeM4cU6nlBAIDmiZIB+qbBODw6AInbnda36o8Pq1WZ8oD3Wn3RDRBGkTZc3+lCWtdTcILHkEHW4B+6t4ui4wcjI5Nw6VRzUvBe5336XrwMpWn41hr5wB1XO4CrlIK6/C1Q9sHhUcNJTTpS36CxadOrziOeqsAiCLiT06JqGabbmLK/HYH2Zg6bH+UT4fQAAi5dv/A4UlHDyqVtnQ6nWiqe1qF1KJGX2hFtTFojTXrdabIMOBssSvSzPMvMXHJyg6xOv2hWtxjGtDQ478E9OgW5KpGM3eyXfm2ZvNuUVb9EsfLicpjmAf4uqHBpaARpbuQOLmdFCpiQ4OEm4A4Pe2+1kMaroIJJ/wBvoqVavSi3JZ38UWYU5WS4GxhqZZIcWMbE+9J62NxoPil4diw4uaDNpmIvv9lgkyEf4I/zx0K4nyi6s4QjFJHLwqhGUm7sKa1wqPawNzGHAu2vDojeIWjRkASZMX7rPxTstVjrbg9kY6s3qO5H2WxyZO9Jx4Nr39yjiFmnxX8LpG8joIVf+WNifh91VUa2JcZB0AGu26uw5bfzBo0izdryNr/RaJXHbiYtrPTnus+hgRSaRqAD5p80k3+U37rRLmyQ0B3UR9eUPjH+VzRIJETExPTtKYDAD3iLxYgetthtp/1o06DYiP6t+fFZz5jknTfsRKMq4kToD3MfZIbdjOOBzHO4+YkHtGg+isbVDwDMj/lAuRb7J8Zka0McYmBYwewi6hV0IjKG2giJ2t0TOCQaCROt72hPkG5n0Sy5Wy6zIOvAUKZBEtmO176dkhiqUgdtRH9IVuLL7tALRma8awBpA3JtaPgig93ulrgSwuAPu2/bmNpKz8TWq+zY6nTGYky0k+UZo2gydVHLNpIlhkrtGXWBD7OynNYBoENnS40O8DlPXolpuZvqPitI0HS4lpIMWsSbDU/FU/8ApjyS05SDcPaR6AzdZ+Mw7qq0U+z72l7C1lTfSf3+A+HrFtrQdRsfzladGuwsNoA1gB0X6oBuDeyc7C42iD5TzJGvZEYZtK7nDLbQnMJ0IiJH9qvhedp9GXr8+1yxiObnmvQavh21LsOnQ6b/APSpa8U3yS6eoIm1+6JY6mHZxVibQA8AdzEK+rQp1h5XTvbmN+ildHa6ULbffr6kfPOPRlfZ7tPQyP8AEpvdLXgA/tcIjsU9fwjNJNSo6P3ZC4QNheXegVWYMd52nynTX07LfwWKFRoc10ctIuDe35wo8PhaFS6lHPsuvS5JXr1aVnF5eD9bHKHBUnRlriSS3KWEGRroTZHYXwCmHB1SpmAuWtA2G97XWyyC9waSC0znIBzdQJ0/hCYqnUZADGZQSXVCQ0XM3bf5H4KWOAoRe1s/v5I3jq8o7O1by+Ab/PbUe5vs3lh8tyQdSLAXBGszOi5vwnFtxD61N7qYdRqGkKnumqMzg10AQD5ZI0l0iLo/HYKq9rx7Z9Bx/dRrQHNg6tLtDyIUP0/+maeFBc1uZ9iapu/qA0Hyi/y1Uk4OpFqQQnGlnHUjRJFiCDuDZb3hGNg5T6K4C0QDI/cB05HdPTpQ7aOAADMwdFkvkZqV1P0/pPVx0akbOId4ixtRo/5bWnuo07NDenZQeNvz5KyjRLgfNDpt8PmtGNGNFOb10bKG02ktwA6sAdCHaxYgHqd9kIYzW7Ij/BqB12k631CGqASY55svPVqkpZtWz0NSmo7ncl21H4Qpa2OqYt39U72iRAsQo7nQxtrcdNVreD4cSXgzt/2s1tMusASTst7w7D+zZfXUqxhabdS+5FbEztC18wXHk+0bG19finLGuN7XBtIiNN+fjuo5szy7bQfdWjLItJIHQfReh5Mg1Scn+Tb8NPYza7zS4Ik53EDtH20VYqmwB+Iki+wITVtPKBrrr+FSpFtjMze31K0yuENeIBd5uZJv1sbKqrUtAbbpcxE+voo4ZjSbu0I0Gvrsj3Umny5bbQLoEV4drg2Tae0349FbRoQBaes/n4VcKQiBb6+icUiNDb86JgZpw1MFpIk7EiTOsSBAV2IpkghrgHcm8HqFB1x7huYJMERyeQrajX5mwfLvrFrZen9JCKcSKgbkEX1LpJ62hU4fCBri8OdMkwCQL7dv4RjaYIhxI6SedZN1d7LYCOo2+WvdA7Aj6Z7dT3Q9HzSdA3lpBNyDaNNPij6jSBAguOhiOUI7D2vGW0t1vIm4jy2IhJjRVXqgBvfkkajgQsrF492awpwGmfeD4g6PBta+i16uAa4Aa7ATEb2H5oEPXwF5y6b2Ou/W/KhqbX4k9LYXWM2hifda2mHAazdzrf8AKPKZvPA0U3UzlqPpkSQIa4DM2JLvNB5tYdeUZ/i5pDvKdJA1+OqGxvhdwKfSXH+tVQcayd5LaXkXYypPJO3qU4TEh0B1MatkwQLG5BiBMX01VVN1YPdkADJtF3OHUjSeALRqUY3w1jctz2cLG0abI6rhmZfKSIsROmkW7ruNGerSTRzKrDRN2YLhKRPndZuoA1JB0jcdSmx1R5OYAgnRo6C8AazcdZV7MNcy0k8kyTHSdLpYk+UA3cAQQL34AJA0U8ItQsyKUk5XRF4BYblkiNfMwRJk6877oRtZ9NrauYkOygAuLhDjPOWSP3FGUjm2JjlsRbi430U8ZhwWgaABoMR5gCbadv6UjzV0cJpOzBqmEp1POGkHYyW7D4x1WTjaFSncCQdXmHP/ANnnQbeuy08eyCG54OgaIznyi4J9dtlDD4aA4HOc0Tm0Ec6a26rlxuxxnZcSvABxF3M7AO2O87oqnTAkg2Nhrb7qilhwDEQBs0WHqdVfiKwawl3laLk/0PouVGx1KV9CVKQIN/jxwhcR4o2m6JkjXb87LnMb+o3uJDTkbtaH25O3og6WJBNnCe4WVjMQ7ShTTz3/AAaGHwkZWlUa7j0LBeKtfup4nAsqXFjzH2XC0Kx/afgR/K1cL4vVb1WUq0rbNRXRJPBOL2qTN+n4Ry74BX0/C2AQb9Vl0v1E7dhKhU/UouCI9QpYSoLSLuVpUsRv9jeo0mU9B6nVC+IY7YLIpeJPq6QBzqfRWUx3vrrK0aGGqVbKS2Y+rK87Qd27svbO0kcfxKuoVCZ20/6VLT/x06q3WOhlbkUkrIpN8Qr2UkCJ4N/tr/SkME4gwAInWwm/G07XSp4uBltPOh9VOnjtbj4fTldnBbhMNBLjF9tQNfmUSx/514Qn+Q4+7ftb7WUsrwRYXuSTEH8lMQW10mFaWlQDhyPipmo3kJiBauh/OFc77H6tSSQC0E78+JTN0Hc/QpJJDBRq7s1MdB+cpJLljRVS1Pb7FX0PcSSSidMrZqfX6JnbdvukkkNlL9v/AMil4d77u6SS5/I6fVZT4roO6bE+9/sfskkov9j8Pclj/wCa8fYu3HYpzp6j6p0lMiFmLhP/AKk/7f8A9Fa1bbukkuKOj72d1+su5fohW39PqsL9R+7T7n6JJLmpoyWjqjAqIDEpJKjIvxAn6q+jokkqs9SwtBno7B6j84SSUtPUhmdX4N/7bu4RbN+ySS1KXVMyr1mF4dXtSSUyIJCbqp7pJLo4DcLoeyJd7o9EkkxDt0UHJJJgf//Z" />
					
					
					<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
						<FormGroup check>
						<Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
							<Input type="checkbox" id="checkbox2" />{' '}
							Fanta
								
						</Label>
						</FormGroup>
					</CardFooter>
				</Card>
				<Card inverse style={{borderSize:'1px'}}>
					<CardImg width="100%" alt="Selecionar Refrigerante de Guaraná" src="http://semmedida.com/wp-content/uploads/2015/06/wine-cheese-1024x640.jpg" />
					
					
					<CardFooter size="sm" style={{borderSize:'1px',borderColor:'black'}} className="text-muted">
							<FormGroup check>
								<Label style={{fontSize: this.state.tamanhoLetra+'px'}} check>
								<Input type="checkbox" id="checkbox2" />{' '}
								Guaraná
								
								</Label>
							</FormGroup>
					</CardFooter>
				</Card>
			</CardGroup>
			</Container>
		</div>
		</div>
	);
	}
}

export default Refrigerantes;