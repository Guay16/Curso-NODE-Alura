import "./CampoTexto.css"





    const CampoTexto = (props) => {
        const placeholderModificada = `${props.placeholder}...` 
     /* **************retirado para receber via props *************
     const{valor , setValor} =  useState('')*/
    
      const aoDigitado = (evento) => {
            /* **************retirado para receber via props *************
            setValor {evento.target.value}
            console.log(valor)*/
            props.aoAlterado(evento.target.value)
        }
        return (
          <div className="campo-texto">
              <label>
                {props.label}
                </label>
              <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}
              />
              
          </div>
             )
                
    }
                     
   
export default CampoTexto


    /*
    ************************** EXERCICIO *****************.

Primeiro, ajuste o CampoTexto para receber as props relacionadas. Depois, crie o componente ListaSuspensa para permitir que o usuário selecione o time do colaborador.

Em caso de dúvidas, não deixe de usar o fórum.import 


******************'./CampoTexto.css'*****************************

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    let valor = 'Guilherme Silveira'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto

**************************************ListaSuspensa/index.js***************************************

import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa*/