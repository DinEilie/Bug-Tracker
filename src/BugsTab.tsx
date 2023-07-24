import BugList from "./BugList";
import Button from "./Button";
import Svg from "./Svg";

var svg_filter_bugs = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>;
var svg_settings = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>;

function BugsTab(){
    return <div className="px-10 py-5 flex-auto md:text-lg text-xs">
        <div id="bugs_top" className="flex">
            <div id="bugs_left" className="flex text-center items-center gap-2">
                <Svg name="double arrow" width="5" height="5" destination="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                <div>USER</div>
                <Svg name="arrow" width="5" height="5" destination="M8.25 4.5l7.5 7.5-7.5 7.5" />
                <div>Bugs</div>
                <Svg name="arrow" width="5" height="5" destination="M8.25 4.5l7.5 7.5-7.5 7.5" />
                <ins className="flex text-center items-center text-blue-600 font-bold p-1 hover:cursor-pointer gap-1">
                    <div>OPEN</div>
                    <Svg name="filter" width="5" height="5" destination="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </ins>
            </div>
            <div id="bugs_right" className="ms-auto items-center flex gap-2">
                <div className="w-fit px-2 border-solid border-2 rounded-sm text-blue-600 border-blue-600 hover:bg-blue-600 ease-linear duration-75 hover:text-white hover:cursor-pointer">Submit Bug</div>
                <div className="w-fit py-1 px-2 border-solid border-2 rounded-sm text-blue-600 border-blue-600 hover:bg-blue-600 ease-linear duration-75 hover:text-white hover:cursor-pointer">{svg_filter_bugs}</div>
                <div className="w-fit py-1 px-2 border-solid border-2 rounded-sm text-blue-600 border-blue-600 hover:bg-blue-600 ease-linear duration-75 hover:text-white hover:cursor-pointer">{svg_settings}</div>
                <div></div>
            </div>
        </div>
        <div id="bugs_bottom" className="mt-40">
            <BugList />
        </div>
    </div>
}

 export default BugsTab;