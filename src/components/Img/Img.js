const placeholder = ({ width = '40', height = '40' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <rect width="100%" height="100%" fill="#DDDDDD" />
        <path
            fill="#999999"
            d="M7.625 20.715h1.76v-1.89q0-.27.04-.59l-1.8 2.48Zm2.62 0h.73v.57q0 .08-.05.14-.05.06-.15.06h-.53v1.41h-.86v-1.41h-2.44q-.1 0-.17-.06-.08-.07-.1-.16l-.1-.5 2.74-3.66h.93v3.61Zm5.38-.71q0 .75-.17 1.31-.16.56-.44.92-.29.37-.68.55-.39.17-.84.17-.45 0-.84-.17-.39-.18-.67-.55-.28-.36-.44-.92-.16-.56-.16-1.31 0-.76.16-1.32.16-.55.44-.92.28-.36.67-.54.39-.18.84-.18.45 0 .84.18.39.18.68.54.28.37.44.92.17.56.17 1.32Zm-1.02 0q0-.63-.1-1.04-.09-.41-.24-.66-.16-.24-.36-.34-.2-.1-.41-.1-.21 0-.41.1-.2.1-.35.34-.15.25-.24.66-.09.41-.09 1.04 0 .63.09 1.04.09.41.24.65.15.25.35.35.2.09.41.09.21 0 .41-.09.2-.1.36-.35.15-.24.24-.65.1-.41.1-1.04Zm7.37 1.57-.53.51-1.35-1.35-1.37 1.36-.52-.52 1.36-1.37-1.3-1.3.52-.52 1.3 1.3 1.3-1.29.53.52-1.3 1.3 1.36 1.36Zm3.46-.86h1.76v-1.89q0-.27.04-.59l-1.8 2.48Zm2.62 0h.73v.57q0 .08-.05.14-.05.06-.15.06h-.53v1.41h-.86v-1.41h-2.44q-.1 0-.17-.06-.08-.07-.1-.16l-.1-.5 2.74-3.66h.93v3.61Zm5.37-.71q0 .75-.16 1.31t-.45.92q-.28.37-.67.55-.39.17-.84.17-.46 0-.84-.17-.39-.18-.67-.55-.29-.36-.45-.92-.16-.56-.16-1.31 0-.76.16-1.32.16-.55.45-.92.28-.36.67-.54.38-.18.84-.18.45 0 .84.18.39.18.67.54.29.37.45.92.16.56.16 1.32Zm-1.02 0q0-.63-.09-1.04-.09-.41-.24-.66-.16-.24-.36-.34-.2-.1-.41-.1-.22 0-.41.1-.2.1-.35.34-.16.25-.25.66-.09.41-.09 1.04 0 .63.09 1.04.09.41.25.65.15.25.35.35.19.09.41.09.21 0 .41-.09.2-.1.36-.35.15-.24.24-.65.09-.41.09-1.04Z"
        />
    </svg>
);

function Img({ src, alt, width = '40', height = '40', ...props }) {
    return (
        <img
            src={src}
            alt={''}
            onError={(e) => {
                e.target.src = process.env.PUBLIC_URL + '/40.svg';
                e.preventDefault();
            }}
            {...props}
        />
    );
}

export default Img;
