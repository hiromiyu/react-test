import { ColoredMessage } from "./components/ColoredMessage";
import { useContext, useState, memo, useCallback } from "react";
import { CssModules } from "./components/CssModules";
import { TailwindCss } from "./components/TailwindCss";
// import './style.css';
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = memo(() => {
    console.log("Appレンダリング");
    const [num, setNum] = useState(0);
    const onClickButton = () => {
        setNum(num + 1);
    };
    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);
    const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
            <h1 className="text-3xl font-bold pt-5 pl-1 pb-3">こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <div>
                {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
                <button onClick={onClickSwitch}>切り替え</button>
                <Card isAdmin={isAdmin} />
            </div>
            <button className="bg-blue-700 text-white btn hover:bg-red-500 py-2 px-4 rounded-xl" onClick={onClickButton}>ボタン</button>
            <p className="pt-5 pl-1 pb-3">{num}</p>
            {/* Propsとして関数を設定 */}
            <Child1 onClickReset={onClickReset} />
            <Child4 />
            <CssModules></CssModules>
            <TailwindCss></TailwindCss>
        </div>
    );
});