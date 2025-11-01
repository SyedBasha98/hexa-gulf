import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

class RootErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error){ return { error }; }
  componentDidCatch(error, info){ console.error("App crashed:", error, info); }
  render(){
    if (this.state.error) {
      return (
        <div style={{padding:"2rem",fontFamily:"Inter, system-ui",maxWidth:900,margin:"2rem auto"}}>
          <h1 style={{margin:0,fontSize:"22px"}}>Something went wrong.</h1>
          <pre style={{whiteSpace:"pre-wrap",background:"#fff",border:"1px solid #eee",padding:"1rem",borderRadius:12,marginTop:"1rem"}}>
{String(this.state.error?.message || this.state.error)}
          </pre>
          <p style={{color:"#64748b"}}>Check the browser console for details.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>
);
