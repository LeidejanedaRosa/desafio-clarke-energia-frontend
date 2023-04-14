import './Form.css';
import { useState } from 'react';
import api from '../../../../services/api';
import Table from '../Table/Table'

function Form() {
    const [suppliers, setSuppliers] = useState([]);
    const [inputValue, setInputValue] = useState();
    const [showTable, setShowTable] = useState(false); 
      
    async function loadSuppliers (){
        
        const response = await api.get(`/fornecedores/${inputValue}`);
           
        setSuppliers(response.data);
        setShowTable(true);
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
            <h2>Qual o seu consumo mensal de energia (kWh)?</h2>
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
        
        {showTable && <Table suppliers={suppliers}/>}
        
        </div>
 
    );
  }
  
  export default Form;