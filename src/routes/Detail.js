import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDescription from "../components/Description";
import styles from "./Home.module.css";


function Description() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [Descriptions, setDescriptions] = useState({});
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDescriptions(json.data.movie);
      setLoading(false);
    };

    useEffect(() => {
      getMovie();
    }, []);
    console.log(Descriptions);
    return (
      <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
            <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.Descriptions}>
              <MovieDescription
                background_image_original={Descriptions.background_image_original}
                medium_cover_image={Descriptions.medium_cover_image}
                url={Descriptions.url}
                title_long={Descriptions.title_long}
                rating={Descriptions.rating}
                runtime={Descriptions.runtime}
                genres={Descriptions.genres}
                download_count={Descriptions.download_count}  
              />
        </div>
      )}
    </div>
    );
  }

export default Description;