import './Form.css';
import React, { useState } from 'react';
import api from '../../../../services/api';

function Form() {
    const [suppliers, setSuppliers] = useState([]);
    const [inputValue, setInputValue] = useState();
   
    async function loadSuppliers (){
        try {
            const response = await api.get(`/fornecedores/${inputValue}`);
           
            setSuppliers(response.data);

        } catch (error) {
           console.log(error);
        }
    }

    function handleChangeInputValue (e){
        if(e.target.value > 0)
        setInputValue(e.target.value)          
    }

    function handleSubmit (e){
        e.preventDefault();     

        if (!inputValue) return    

        loadSuppliers();       
    }
   
    

    return (
      <div className='form'> 
        <form className='form__consult' onSubmit={handleSubmit}>
            <h2>Qual o seu consumo mensal de energia (kwh)?</h2>
            <input 
            type='number' 
            placeholder='Ex.: 3000'
            value={inputValue}
            onChange={handleChangeInputValue}
            />
           <button           
           onClick={()=>loadSuppliers()}
           type ='submit'
           >Pesquisar fornecedores</button>
        </form>  
        
        <div className='form__result'>
            <div className='form__result__return'> 
            <h3>Foram encontrados {suppliers.length} registros</h3>   
            {suppliers?.map((supplier) =>{
                return (
                    <span className= 'container'key={supplier.id}>
                    <img className='form__img' src={supplier.logo} alt={`logo da empresa ${supplier.nome}`}/>
                    <strong>Empresa:</strong>
                    <span>{supplier.nome}</span>

                    <strong>Estado:</strong>
                    <span>{supplier.uf}</span>

                    <strong>Custo por kwh:</strong>
                    <span>{supplier.custo_kwh}</span>

                    <strong>Limite mínimo kwh:</strong>
                    <span>{supplier.limite_min_kwh}</span>

                    <strong>Total de clientes:</strong>
                    <span>{supplier.total_clientes}</span>

                    <strong>Avaliação media dos clientes:</strong>
                    <span>{supplier.avaliacao_media_clientes}</span>
                    </span>
                                  

                )
            }
            )
        }
            </div>  
        </div>
      </div>    
    );
  }
  
  export default Form;