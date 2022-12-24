import { useState,useEffect,useRef } from "react"
import "./assets/stylesheets/style.css"
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function App() {
  const button = useRef(null)
  const [Images, setImages] = useState([])
  const [Prompt, setPrompt] = useState("A picture of horse on human")
  const [State, setState] = useState("generated")
  const [Toogle, setToogle] = useState(false)
  
  
  useEffect(()=>{
    setState("generating")
    openai.createImage({
      prompt: Prompt,
      n: 3,
      size: "512x512",})
      .then((res)=>{
        setState("generated")
        var arr = []
        res.data.data.map((item)=>{
          arr.push(item.url)
        })
        setImages(arr)
        console.log(arr)
      })
      .catch(err=>{
        console.log(err)
        button.current.innerHTML = "Requsted Image can't be Generated"
      })

  },[Toogle])

 return (
    <>
     <div id="main">
        <div id="content">
            <div id="text">
                <h1>SnapShot</h1>
                <input onChange={(e)=>{setPrompt(e.target.value)}} value={Prompt} type="text" placeholder="Type naything"/>
                <p ref={button} use onClick={()=>{setToogle(!Toogle)}}>{State === "generated"?"Generate":"Generating..."}</p>
                <h2>Pictures of {Prompt}</h2>
            </div>
            <div id="images">
              {Images.map((item,index)=>(
                  <div key={index} id="img">
                    <img src={item} alt={item}/>
                  </div>
                ))}
            </div>
        </div>
    </div>
    </>
  );
}

export default App;

// rafce
// rcc
// 