import Svg from "./Svg";

function ButtonIcon(props:any){
    if (props.break === "true"){
        return <div className={"md:hidden " + props.color + " p-2 rounded-lg ease-linear duration-150 hover:cursor-pointer hover:" + props.hover_color + " hover:scale-110"}>
            <Svg width={props.width} height={props.width} destination={props.destination} />
        </div>
    } else {
        return <div className={"hidden md:block " + props.color + " p-2 rounded-lg ease-linear duration-150 hover:cursor-pointer hover:" + props.hover_color + " hover:scale-110"}>
            <Svg width={props.width} height={props.width} destination={props.destination} />
        </div>
    }

    
};

export default ButtonIcon;