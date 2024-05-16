import {FC, JSX} from "react";
import {IScreenComponentProps, IScreenData} from "../../../common/types/screen";
import AppButtonComponent from "../app-button";


const ScreenComponent: FC<IScreenComponentProps> = ({data, setButtonName}): JSX.Element[] => {
    return (
        data.map((element: IScreenData) => (
            <div key={element.id} onClick={() => setButtonName(element.name)}>
                <AppButtonComponent name={element.title}/>
            </div>
        ))
    );
};

export default ScreenComponent;