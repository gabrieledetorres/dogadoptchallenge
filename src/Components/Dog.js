import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style/styles";

export default function Dogs() {
  const [data, setData] = useState(null);

  const API = "https://dog.ceo/api/breeds/image/random";

  const Dog = () => {
    axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data.message);
      })
      .catch((error) => {
        console.log("Desculpe, você não conseguiu consumir sua API", error);
      });
  };

  return (
    <S.Div>
      <h1>Adote um doguinho</h1>
      <S.Foto src={data} alt="img" />
      <S.Button
        onClick={() => {
          Dog();
        }}
      >
        Clique aqui
      </S.Button>
    </S.Div>
  );
}
