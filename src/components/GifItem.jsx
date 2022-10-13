export const GifItem = ( {title, url}) => {
    return (
        <div>
            <img src= {url} alt = {title}></img>
        </div>
    );
}