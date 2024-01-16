import "./style.css"

const faqs = [
  {
    title : "How many participants are required?",
    text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },{
    title : "What is the entry fee for the event?",
    text : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },{
    title : "How to register for this event?",
    text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },{
    title : "What is the code of conduct",
    text : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }
]

function App() {
  return (
    <div>
      <Accordian data = {faqs}/>
    </div>
  );
}

function Accordian({data}){
  return (
    <div className = "accordian">
      {data.map(el => <Accordianitem/>)}
    </div>
  );
}

function Accordianitem({num, title, text}){
  return (
    <div className = "item">
      <p className = "num">{num}</p>
      <p className = "title">{title}</p>
      <p className = "icon">+</p>
      <div className = "text">{text}</div>
    </div>
  );
}

export default App;
