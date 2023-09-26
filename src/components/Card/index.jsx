import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesFavoritar from "./desfavoritar.png";
import { useFavoritoContext } from "../../contextos/Favoritos";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((item) => item.id === id);
  const icone = ehFavorito ? iconeDesFavoritar : iconeFavoritar;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        </Link>
        <h2>{titulo}</h2>
        <img
          src={icone}
          alt="Favoritar filme"
          className={styles.favoritar}
          onClick={() => {
            adicionarFavorito({ id, titulo, capa });
          }}
        />
     
    </div>
  );
};

export default Card;
