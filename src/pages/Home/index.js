import Header from "components/Header";
import relogio from "assets/inicial.png";
import styles from "./Home.module.scss";
import { Categorias } from "mock/Categorias";

export default function Home() {
  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={relogio}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {Categorias.map((categoria, index) => (
            <div key={index}>
              <img className={categoria.thumnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
