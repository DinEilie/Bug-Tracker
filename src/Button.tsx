function Button(props:any){
    return <div className={"hidden " + props.color + " md:block md:p-2 md:rounded-md md:ease-linear md:duration-150 md:hover:cursor-pointer md:hover:" + props.hover_color}>{props.placeholder}</div>
}

export default Button;