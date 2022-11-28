import { Fragment } from "react"
import { useState } from "react"

function App() {
  const [title, setTitile] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")
  const [gallery, setGallery] = useState([])

  const submitHandler = (data) => {
    data.preventDefault()
    if (title.trim() && author.trim() && url.trim()) {
      console.log(title, author, url)
      var deta = { "title": title, "author": author, "url": url }
      setGallery([...gallery, deta])
      console.log(gallery)
      setAuthor("")
      setTitile("")
      setUrl("")

    }
    else {
      alert("Bhaag jaa bsdk")

    }
  }
  var cardlist = "lol"

  if(gallery.length > 0){
    cardlist = gallery.map((card,index)=>(
      <div key={index} className="card" style={{ width: "300px" }}>
        <img src={card.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.author}</p>
        </div>
      </div>
    ))
  }

  return (
    <>
      <form action="" onSubmit={submitHandler} className="container w-25">
        <input type="text" onChange={(e) => setTitile(e.target.value)} className="form-control mt-5" placeholder="title" value={title} name="title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control mt-2" placeholder="author" name="author" />
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="form-control mt-2" placeholder="image" name="image" />
        <button className="btn btn-success mt-4">Submit</button>
      </form>
      <div className="container d-flex mt-5">
      {cardlist}
      </div>
      
    </>
  );
}

export default App;

// rafce
// rcc
// 