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
            <label>Qual o seu consumo mensal de energia (Kwh)?</label>
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
                    <h5>{supplier.nome}</h5>
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