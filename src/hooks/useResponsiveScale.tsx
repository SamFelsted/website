import { useEffect, useState } from 'react';

function useResponsiveScale(baseWidth: number = 1200, minScale: number = 0.5, maxScale: number = 1) {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            const widthScale = window.innerWidth / baseWidth;
            const newScale = Math.max(Math.min(widthScale, maxScale), minScale);
            setScale(newScale);
        };

        updateScale();
        window.addEventListener('resize', updateScale);

        return () => {
            window.removeEventListener('resize', updateScale);
        };
    }, [baseWidth, minScale, maxScale]);

    return scale;
}

export default useResponsiveScale;
