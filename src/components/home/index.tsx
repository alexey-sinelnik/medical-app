import {FC, JSX, useCallback, useEffect, useState} from "react";
import ScreenComponent from "../screen";
import {IScreenData} from "../../../common/types/screen";
import {secondScreen, startScreen} from "../../../common/data";
import './styles.css'


const HomePage: FC = (): JSX.Element => {
    const [screenData, setScreenData] = useState<IScreenData[]>(startScreen)
    const [buttonName, setButtonName] = useState<string>('')

    const changeScreen = useCallback(() => {
        switch (buttonName) {
            case 'services':
                setScreenData(secondScreen)
        }
    }, [buttonName])

    useEffect(() => {
        changeScreen()
    }, [buttonName, changeScreen]);

    return (
        <div className="screen-wrapper">
            <ScreenComponent data={screenData} setButtonName={setButtonName}/>
        </div>
    );
};

export default HomePage;