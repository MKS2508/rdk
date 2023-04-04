import React from 'react';

interface SoundCloudPlayerProps {
    url: string;
    width?: string;
    height?: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ url, width = '100%', height = '166' }) => {
    const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&auto_play=false&buying=false&liking=false&download=false&sharing=false&show_artwork=true&show_comments=false&show_playcount=false&show_user=false&hide_related=true&visual=false&start_track=0&callback=true`;

    return (
        <iframe
            width={width}
            height={height}
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={src}
            title="SoundCloud Player"
        ></iframe>
    );
};

export default SoundCloudPlayer;
