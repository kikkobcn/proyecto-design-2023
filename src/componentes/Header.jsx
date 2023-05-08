import '../index.css';
import { Logo } from './Logo';
import datos from '../datos.json'

export function Header() {

    return <div className="containerHeader d-flex row mt-3 mb-3 text center">
                {/* <div className="row align-items-center justify-content-between"> */}
                    <div className="containerHeaderLogo col-md-3 align-self-center">
                        <Logo /> 
        </div>
        <h1 className="containerHeaderTitle col-md-5 align-self-center">    LOREM     ICSUM</h1>
                    <div className="containerHeaderLinks d-flex col-md-4 justify-content-end">
                        {
                            datos.header.links.map((item,index)=>
                                <a key={index} className=" mx-3" href={item.url}>
                                    <i className={item.icono}></i>
                                    {item.texto}</a>
                )
                            }
                        
                    </div>
            </div>
}