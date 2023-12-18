"use client";
import { useState } from 'react';
import styles from "@/app/components/counter.css";


const Counter = ({value, setValue}) => {  
  const ButtonIncrease = () => {
    return (<button className="plus-button" onClick={() => setValue(value + 1)}> 
    +
    </button>
    )
  }  

  const ButtonDecrease = () => {
    return (<button className="minus-button" onClick={() => setValue(value - 1)}> 
    -
    </button>
    )    
  }

  return (
    <>      
      <p className='counter-p'>{value}</p>
      <div className="button-wrapper">
      <ButtonDecrease />
      <ButtonIncrease />
      </div>
    </>
  );
}

export default function Questao2() {
  const [value, setValue] = useState(10);
  
  return ( 
    <>
      <h1>Questão 2</h1>
      <p>
        Crie um contador inicializado em 0. A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador. Ao
        carregar a tela, o contador deve ser atualizado para 10. Implemente a
        lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
      </p>

      <Counter value={value} setValue={setValue} />
    </>
  );
}
