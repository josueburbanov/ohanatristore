import React, { Component, useState, useEffect } from "react";

/*
class ComponentesII extends Component {
    constructor() {
        super();

        //Estado
        //Basicamente para inicializar
        this.state = {
            name: "Josue Burbano",
            age: 32,
            hobbies: ["ciclismo", "triatlón", "runnig", "crossfit"]
        }
        //Sintaxis de un objeto
        //{ "llave" : "valor",
        //"llave2" : "valor2"}
        }
        updateName =()=>{
            this.setState({name: "Otro gato"})

    }
    componentDidMount(){
        setTimeout(()=> this.setState({name: "Josue"}), 3000);
    }


    render() {
        return <div onClick={this.updateName}>
            <MyFirstComponent name={this.state.name} age={this.state.age} hobbies={this.state.hobbies} component={NewComponent}></MyFirstComponent>
        </div>
    }
}
*/


/*
const ComponentesII = () => {
    const [name, setName] = useState("Josue Burbano");
    const [age, setAge] = useState(27);
    const [hobbies, setHobbies] = useState(["ciclismo", "triatlón", "runnig", "crossfit"])

    return (<div onClick={()=>setName("Estoy en Ec")}>
        <MyFirstComponent name={name} age={age} hobbies={hobbies} component={NewComponent}></MyFirstComponent>
    </div>)
}
*/


const ComponentesII =() => {
    const [name, setName] = useState("Josue Burbano");
    const [age, setAge] = useState(27);
    const [hobbies, setHobbies] = useState(["ciclismo", "triatlón", "runnig", "crossfit"])

    useEffect(()=> {
        setTimeout(()=> setName("Cambio 3", 3000));
    })
 
    return <MyFirstComponent name={name} age={age} hobbies={hobbies} component={NewComponent}></MyFirstComponent>
}


const MyFirstComponent = (props) => {
    return <h1>{props.name} {props.age} {props.hobbies} {props.component({ contentButton: 'Hacer click' })}</h1>
}

const NewComponent = ({ contentButton }) => {
    function callAlert(text) {
        alert(`Hello ${text}`);
    }
    return <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
    onClick={()=>callAlert("Joker")}>{contentButton}</button>
}

export default ComponentesII;