// console.log('heloo');
// const el = document.querySelector('#root')
// let html = document.createElement('h1')
// html.innerHTML = "Hello react"
// document.body.appendChild(html)

// // react
// const elReact = React.createElement(
//     'h1',
// { className: "title",},"hello react");

// // Hiển thị ra ngoài giao diện

const el = (
    <div className="container">
        <h1>Hello anh em</h1>
    </div>
)
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(el)