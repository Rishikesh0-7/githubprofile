import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {


  async function getResults() {
    const user = `https://api.github.com/users/${document.getElementById('name').value}`
    let response = await fetch(user)
    const url = ""
    const json_data = await response.json()
    console.log(json_data)
    
    document.getElementById("uname").innerHTML = `${json_data.login}`
    document.getElementById("fo").innerHTML = `${json_data.followers}`
    document.getElementById("foo").innerHTML = `${json_data.following}`
    document.getElementById("url").href = `${json_data.url}`
    document.getElementById("web").innerHTML = `${json_data.blog}`
  }

  return <>
    <div>
      <section>
        <div className="inputs">
          <input id="name" type="text" placeholder="Enter Username" />
          <button onClick={getResults}  className="button">Go</button>
        </div>
        <div className="results">
          <p><i className="fa fa-user" style={{color : "rgb(30, 163, 30)" , fontSize : 20 , paddingRight : 5}}></i> Name : <span id="uname">Unknown</span></p>
        </div>
        <div className="results">
        
          <p><i className="fa fa-user-plus" style={{ color: "rgb(30, 163, 30)", fontSize: 20}}></i> Followers : <span id="fo">0</span></p>
        </div>
        <div className="results">
        
          <p><i className="fa fa-male" style={{ color: "rgb(30, 163, 30)", fontSize: 20 , paddingRight : 5}}></i> Following : <span id="foo">0</span></p>
        </div>
        <div className="results">
        
          <p><i className="fa fa-link" style={{ color: "rgb(30, 163, 30)", fontSize: 20 , paddingRight : 5}}></i> URL : <a href="" id="url">Click Here!</a></p>
        </div>
        <div className="results">
        
          <p><i className="fa fa-globe" style={{ color: "rgb(30, 163, 30)", fontSize: 20 , paddingRight : 5}}></i> Website : <span id="web">No website.</span></p>
        </div>
      </section>
    </div>
  </>;
}

export default App;
