import Svg from "./Svg";

function Tab(props:any){
    return <div className="px-3 py-5 ease-linear duration-75 hover:cursor-pointer hover:bg-slate-700">
        <div className="w-fit text-white mx-auto mb-2">
            <Svg width={props.width} height={props.height} destination={props.destination} />
        </div>
        {props.placeholder}
    </div>
}

export default Tab;