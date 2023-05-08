import datos from '../datos.json'
export function FooterSection() {

        function muestraLink(links){
            return links.map((linkItem, linkIndex) => {
                return (
                    <div key={linkIndex}>
                        <a href={linkItem.url}>
                        <i className={linkItem.icono}></i> {linkItem.texto}</a>

                    </div> 
                    )
                });
            }
        
            return datos.footer.map((footerItem, footerIndex) => {
                return (
                    
                    <div className="container1 " key={footerIndex}>
                        <div className="container1Titulo" ><h6 >{footerItem.nombre}</h6></div>
                        <div className="container1link " >
                            {muestraLink(footerItem.links)}
                        </div>
                    </div>
                );
            });
 
}

