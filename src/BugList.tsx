var amount = 15;
var result:any = [];
for (let index = 0; index < amount; index++) {
    if (index + 1 == amount){
        result.push(
            <div key={"bug_num_" + index}>
                <div className="flex gap-2 my-5">
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-5/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                </div>
                <hr className="h-1 bg-gray-400"></hr>
            </div>
        );
    } else {
        result.push(
            <div key={"bug_num_" + index}>
                <div className="flex gap-2 my-5">
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-5/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                    <div className="bg-slate-300 w-1/12 rounded h-3 animate-pulse"></div>
                </div>
                <hr></hr>
            </div>
        );
    } 
}

setTimeout(()=>{
    
},1000);

function BugList(){
    
    return (
        <div>
            <div className="flex text-sm font-bold text-gray-500 gap-2">
                <div className="w-1/12 rounded">ID</div>
                <div className="w-1/12 rounded">TITLE</div>
                <div className="w-5/12 rounded">BUG</div>
                <div className="w-1/12 rounded">FROM</div>
                <div className="w-1/12 rounded">ISSUED BY</div>
                <div className="w-1/12 rounded">UNTIL</div>
                <div className="w-1/12 rounded">STATUS</div>
                <div className="w-1/12 rounded">PRIORITY</div>
            </div>
            <hr className="mt-2 h-1 bg-gray-400"></hr>
            {result}
        </div>
    );
}

export default BugList;