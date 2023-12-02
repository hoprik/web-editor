import CodeEditor from '@uiw/react-textarea-code-editor';
import { useEffect } from 'react';


function write(){
    useEffect(()=>{
        document.documentElement.setAttribute('data-color-mode', 'light')
    }, [])
    return <div className="write">
        <CodeEditor
            value={"code"}
            language="js"
            className='writeArea'
            placeholder="Please enter JS code."
            onChange={(evn) => change(evn)}
            padding={15}
            style={{
                backgroundColor: "#f5f5f5",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
        />
        <div className="sidebar">
            <p>FILES</p>
            <button>html</button>
            <button>css</button>
            <button>js</button>
        </div>
    </div>
}

function change(event) {
    document.querySelector(".render").innerHTML = event.target.value
}

export default write