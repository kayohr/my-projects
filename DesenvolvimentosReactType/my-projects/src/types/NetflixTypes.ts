
interface NetflixType {
    movie: {
        id: number,
        titles: string,
        poster_path: string
    };
    onclick: () => void;
}

export default NetflixType;
