import './Table.css';

function Table ({suppliers}) {

    if(suppliers.length === 0) return

    return(
    <div className='table'>               
       
            <div className='table__header'>
                <strong className='table__logo'>Logo da empresa</strong>
                <strong className='table__empresa'>Empresa</strong>
                <strong className='table__uf'>Estado</strong>
                <strong className='table__custo'>Custo por kwh</strong>
                <strong className='table__limite'>Limite mínimo kwh</strong>
                <strong className='table__total'>Total de clientes</strong>
                <strong className='table__avaliacao'>Avaliação</strong>
            </div>
        
            {suppliers?.map((supplier) =>{
                return (
                    <div className= 'table__result'key={supplier.id}>

                    <img className='table__logo' src={supplier.logo} alt={`logo da empresa ${supplier.nome}`}/>                    
                    <span className='table__empresa'>{supplier.nome}</span>                    
                    <span className='table__uf'>{supplier.uf}</span>                    
                    <span className='table__custo'>{supplier.custo_kwh}</span>                    
                    <span className='table__limite'>{supplier.limite_min_kwh}</span>                    
                    <span className='table__total'>{supplier.total_clientes}</span>                    
                    <span className='table__avaliacao'>{supplier.avaliacao_media_clientes}</span>
                    </div>                
                )
            }
            )
        }
            </div> 
    ) 
}
export default Table;