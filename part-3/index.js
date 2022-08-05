const App = (prop) =>{
    return (
        <div>
          <Person name='criss' age={10} hobbies={['walking', 'talking']} />
          <Person name='reddodmadman' age={40} hobbies={['drinking', 'thinking']}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))