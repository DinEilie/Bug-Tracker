var svg_arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
var svg_double_arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>;
var svg_filter = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" /></svg>;

function Tickets(){
    return <div className="px-10 py-5">
        <div className="flex text-center items-center gap-2">
            <div className="">{svg_double_arrow}</div>
            <div className="text-lg">USER</div>
            <div className="">{svg_arrow}</div>
            <div className="text-lg">My Tickets</div>
            <div className="">{svg_arrow}</div>
            <ins className="flex text-center items-center text-lg text-blue-600 font-bold p-1 hover:cursor-pointer gap-1">
                <div className="">OPEN</div>
                <div className="">{svg_filter}</div>
            </ins>
        </div>
    </div>
}

 export default Tickets;