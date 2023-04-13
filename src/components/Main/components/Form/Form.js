import './Form.css';
import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';

function Form() {
    const [suppliers, setSuppliers] = useState([]);
    const [form, setForm] = useState();
   
    async function loadSuppliers (){
        try {
            const response = await api.get (`/fornecedores/${form}`);
            
            setSuppliers(response.data);

        } catch (error) {
           console.log(error);
        }
    }
    function handleChangeInputValue (e){
        setForm(e.target.value)
        console.log(suppliers);
    }

    function handleSubmit (e){
        e.preventDefault();     
       
        console.log('Submit');
        console.log(form);
    }
   
    useEffect(() => {
        loadSuppliers();
    },[]);

    return (
      <div className='form'> 
        <form className='form__consult' onSubmit={handleSubmit}>
            <label>Qual o seu consumo mensal de energia?</label>
            <input 
            // name='name'
            type='number' 
            placeholder='Informe aqui'
            value={form}
            onChange={handleChangeInputValue}
            />
           <button
           onClick={()=>loadSuppliers()}
           >Pesquisar fornecedores</button>
        </form>  
        
        <div className='form__result'>
            <div className='form__result__return'> 
            {/* ternário (se form.length = 0 - Não foi encontrado nenhum fornecedor)    */}
            <h5>Foram encontrados {suppliers.length} registros</h5>   
            {suppliers.map((supplier) =>(
                <h3 key={suppliers.id}>{suppliers}</h3>
            ))}  
            </div>  
        </div>
      </div>    
    );
  }
  
  export default Form;