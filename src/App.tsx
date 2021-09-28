import React, {useState} from 'react';
import './App.css';


type stateType = {
    name: string;
    status: string;
}
type statusType = {
    [key: string]: stateType[]
}

function App() {
    const [state, setState] = useState<stateType[]>([{name: 'Damir', status: 'start'}])
    const [display, setDisplay] = useState<boolean>(false)
    let obj: statusType = {
        start: [],
        inProgress: [],
        done: []
    }
    state.forEach((el) => {
        // @ts-ignore
        obj[el.status].push(<div onDragEnd={(e)=>handleDragEnd(e)} onDragStart={(e)=> handleDragStart(e, el.name)} draggable className={display?'item hide':'item'}>{el.name}</div>);
    })
    const handleDragStart = (e:React.DragEvent<HTMLDivElement>, name:string) => {
        setTimeout(()=>{
            setDisplay(true)
        })
        e.dataTransfer.setData('id',name)
        // @ts-ignore
        e.target.style.background = 'yellow'
    }
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setDisplay(false)
        // @ts-ignore
        e.target.style.background = ''
    }
    const handleOnDrop = (e:React.DragEvent<HTMLDivElement>, status:string) => {
        let id = e.dataTransfer.getData('id')
        let list = state.filter(el=>{
            if(el.name === id){
                el.status=status
            }
            return el
        })
        // @ts-ignore
        e.target.style.border =''
        setState(list)
        setDisplay(false)

    }
    const handleDragEnter = (e:React.DragEvent<HTMLDivElement>) => {
        // @ts-ignore
        e.target.style.border ='2px solid purple'
        // @ts-ignore
        e.target.style.borderRadius ='20px'
    }
    const handleDragLeave = (e:React.DragEvent<HTMLDivElement>) => {
        // @ts-ignore
        e.target.style.border =''
        // @ts-ignore
        e.target.style.background = ''
    }

    return (
        <div className="App">
            <div className={'row'}>
                <div className={'col-header start'}> Start</div>
                <div className={'col-header progress'}>In Progress</div>
                <div className={'col-header done'}>Done</div>
            </div>
            <div className={'row'}>
                <div
                    onDragLeave={(e)=>handleDragLeave(e)}
                    onDragEnter={(e)=>handleDragEnter(e)}
                    onDrop={(e)=> handleOnDrop(e,'start')}
                    onDragOver={(e)=> handleDragOver(e)}
                    className={'placeholder'}>{obj.start}</div>
                <div
                    onDragLeave={(e)=>handleDragLeave(e)}
                    onDragEnter={(e)=>handleDragEnter(e)}
                    onDrop={(e)=> handleOnDrop(e,'inProgress')}
                    onDragOver={(e)=> handleDragOver(e)}
                    className={'placeholder'}>{obj.inProgress}</div>
                <div
                    onDragLeave={(e)=>handleDragLeave(e)}
                    onDragEnter={(e)=>handleDragEnter(e)}
                    onDrop={(e)=> handleOnDrop(e,'done')}
                    onDragOver={(e)=> handleDragOver(e)}
                    className={'placeholder'}>{obj.done}</div>
            </div>
        </div>
    );
}

export default App;
