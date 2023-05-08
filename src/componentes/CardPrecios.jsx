import datos from '../datos.json'
import '../index.css'

    function muestraCondiciones(condiciones) {
        return condiciones.map(({ precio, users, almacenamiento, contacto, soporte, modalidad_subscripcion }, conIndex) => {
            return (
                <div key={conIndex}>
                <h3 className="card-title" >{precio}<span className="card-font card-price" > /month</span></h3>
                <p className="card-text">{users}</p>
                <p className="card-text">{almacenamiento}</p>
                <p className="card-text">{contacto}</p>
                <p className="card-text">{soporte}</p>                        
                <button type="button"  className="btn btn-outline-info">{modalidad_subscripcion}</button>
            </div>
        )
    })
    }

export function CardPrecios() {


    
    // return <div className="row row-cols-1 row-cols-md-3 g-4" >
    return datos.subscripciones.map((subItem, subIndex) => {
        return (
            <div   key={subIndex}>
                <div className="card border-dark mb-3  "  >
                    <div className="card-header">{subItem.nombre}</div >
                    <div className="card-body text-dark" >
                        {muestraCondiciones(subItem.condiciones)}
                    </div>
                </div>
            </div> 
        )
    })
    

}