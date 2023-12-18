'use client';

import styles from "@/app/components/red_button.css";

const Button = () => {
  return (
    <button className="button" onClick={function handleClick(){
      alert('O botão foi clicado');
    }}>
      Clique-me!
    </button>
  )
}


export default function Questao1() {
  return (
    <>
      <h1>Questão 1</h1>
      <p>
        Crie um botão vermelho com as bordas arredondadas que exiba "Clique-me!"
        como texto. Ao clicar no botão, um alerta deve ser disparado avisando
        que o botão foi clicado.       
      </p>
      <Button/>
    </>
  );
}

