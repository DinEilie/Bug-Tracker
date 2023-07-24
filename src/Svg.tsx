function Svg(props:any){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-" + props.width + " h-" + props.height}><path strokeLinecap="round" strokeLinejoin="round" d={"" + props.destination} /></svg>;
}

export default Svg;