import Cat from "../../components/Cat/Cat";
import Mouse from "../../components/Mouse/mouse";

export default function RenderProps () {

    return (
        <Mouse renderFunction={state => (
            <Cat x={state.x} y={state.y} />
        )} />
    )
}