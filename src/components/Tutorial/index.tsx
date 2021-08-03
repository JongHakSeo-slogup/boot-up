import styles from "./style";
import Button from "../Button";

interface TutorialProps {
    imageName: string;
    onClick: ()=>void;
}

function Tutorial({imageName, onClick}: TutorialProps) {
    return (
        <styles.TutorialLayout>
            <styles.TextArea>
                <h2>모바일 정비명세서</h2>
                <p>
                    정비 받은 명세서를 쉽고 간편하게<br/>
                    모바일로 관리해보세요.
                </p>
            </styles.TextArea>
            <styles.ImageArea>
                <img src={`/images/${imageName}`} alt={imageName} />
            </styles.ImageArea>
            <Button text="카펫 시작하기" isFull onClick={onClick} />
        </styles.TutorialLayout>
    )
};

export default Tutorial;