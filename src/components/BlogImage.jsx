import { Image } from '@imagekit/react';

export const BlogImage = ({src, className, w, h, alt}) => {
    return(
        <Image 
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
            src={src} 
            className={className} 
            loading="lazy"
            width={w}
            height={h}
            alt={alt}/>

    )
}