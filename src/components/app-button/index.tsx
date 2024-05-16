import {FC, JSX} from "react";
import {IAppButtonProps} from "../../../common/types/buttons";
import './styles.css'


const AppButtonComponent: FC<IAppButtonProps> = ({name}): JSX.Element => {
    return (
        <div className="button-wrapper">
            <button className="button">{name}</button>
        </div>
    );
};

export default AppButtonComponent;