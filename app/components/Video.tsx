export function Video({ src }: { src: string }) {
    return (
        <video controls width="320" height="240" preload="metadata" className="cursor-pointer">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}