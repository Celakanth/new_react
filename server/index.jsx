console.log('App is running')

// JSX base file
const app = {
    title: 'My Details',
    options: ['Item one', 'Item two', 'Item 3']
}
let title = 'My Deatils'
const user = {
    name: 'Christian',
    age: 20
};

const getLocation = (location) => {
    if(location){
        return (<div>
            <label>Location </label>
        <input type='text' value={location} readOnly='readOnly' /> <br />
            </div>);
    }
}

const processItems = () => {
    let allItems = []
    app.options.forEach((item, index) =>{
        allItems.push(<li key={index} id={index}>{item}</li>)
    })

    return allItems
}

const template = (
    
    <div>
        <h1>{title}</h1>
        <p>
            This is me!
        </p>
        <label>Name </label>
        <input type='text' value={user.name ? user.name : 'Unknown'} /> <br />
        {(user.age && user.age >= 18) && (
            <div>
                <label>Age </label>
                <input type='text' value={user.age} />
            </div>
        )}
        <br />
        {getLocation(user.location)}
        <ol>
            {processItems()}
        </ol>
    </div>
);

const appRoot = document.getElementById('root');
ReactDOM.render(template,appRoot);

