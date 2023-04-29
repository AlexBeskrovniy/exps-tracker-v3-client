import ImageWrapper from "./styled/ImageWrapper.styled";

const CloseButton = (props: { onClick: () => void }) => {
    return(
        <div onClick={ props.onClick }>
            <ImageWrapper size="2rem">
                <svg>
                    <use href="#x"></use>
                </svg>
            </ImageWrapper>
        </div>
    );
}

export default CloseButton;