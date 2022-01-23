import { useState, useLayoutEffect } from 'react';

export default function useScrollPosition() {
    // Fetching Scroll Position
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useLayoutEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return scrollPosition;
};