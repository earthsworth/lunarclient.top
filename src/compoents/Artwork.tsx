import {useRef, useState} from "react";
import {getRandomInt} from "../utils.ts";

import artwork1 from "../assets/artworks/artwork_1.webp";
import artwork2 from "../assets/artworks/artwork_2.webp";
import artwork3 from "../assets/artworks/artwork_3.webp";
import artwork4 from "../assets/artworks/artwork_4.webp";
import artwork5 from "../assets/artworks/artwork_5.webp";
import artwork6 from "../assets/artworks/artwork_6.webp";
import artwork7 from "../assets/artworks/artwork_7.webp";
import artwork8 from "../assets/artworks/artwork_8.webp";
import artwork9 from "../assets/artworks/artwork_9.webp";
import artwork10 from "../assets/artworks/artwork_10.webp";
import artwork11 from "../assets/artworks/artwork_11.webp";
import artwork12 from "../assets/artworks/artwork_12.webp";

export const Artwork = () => {

    const currentArtworkId = useRef(0);

    const newRandomArtwork = () => {
        let id = getRandomInt(0, 11);
        if (currentArtworkId.current === id) {
            if (id === 11) {
                id = 10;
            } else if (id === 0) {
                id = 1;
            } else {
                id--;
            }
        }

        const artworkList = [
            artwork1,
            artwork2,
            artwork3,
            artwork4,
            artwork5,
            artwork6,
            artwork7,
            artwork8,
            artwork9,
            artwork10,
            artwork11,
            artwork12,
        ];

        currentArtworkId.current = id;

        return artworkList[id];
    };

    const [artwork, setArtwork] = useState(newRandomArtwork());

    return <img className="fixed bottom-0 right-0 z-100 size-50 select-none cursor-pointer"
                onClick={() => setArtwork(newRandomArtwork())} src={artwork} alt="artwork image"/>;
}