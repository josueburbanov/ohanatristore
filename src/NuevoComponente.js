import React, {Component, useState} from "react";

/*class NuevoComponente extends Component {
    render(){
        return <h1>Hola a todos</h1>
    }
}
*/

/*
function NuevoComponente(){
    return <h1>Hola</h1>;
}
*/

/*
class NuevoComponente extends Component {
    render(){
        return <MyFirstComponent name="Josue David" lastName="Burbano"/>
    }
}

class MyFirstComponent extends Component{
    render(){
        const jsx = <h1>Bienvenido: {this.props.name} {this.props.lastName}</h1>
        return jsx;
    }
}
*/
const NuevoComponente = () => {
    const myObject =  {'nombre':'Josue David'}
    return <MyFirstComponent object={myObject} lastName="Burbano" age="27"/>
}

/*
const MyFirstComponent = (props) => {
    const jsx = <h1>Bienvenido: {props.name.nombre} {props.lastName}</h1>;
    return jsx;
}
*/
/*class NuevoComponente extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Josue",
            lastName: "Burbano",
            gender: "M",
            age: "27"
        }
        this.state.name = "David"; //sin utilizar set?
    }
    render(){
        return <h1>Bienvenido {this.state.name}</h1>
    }
}*/

/*
const NuevoComponente = () => {
    //Hooks, para construir componentes funcionales
    //const [nombreDelEstado, nombreDeLaFuncionQueCambiaElEstado] = useState(elValorInicial)
    const [name, setName] = useState("Josue");
    const [lastName, setLastName] = useState("Burbano");
    const [gender, setGender] = useState("Masc");
    const [age, setAge] = useState("27");
    return <h1>Bienvenido: {name} {lastName} {gender} {age}</h1>
}
*/
const MyFirstComponent = (props) => {
    //Hooks, para construir componentes funcionales
    //const [nombreDelEstado, nombreDeLaFuncionQueCambiaElEstado] = useState(elValorInicial)
    const [name, setName] = useState(props.object.name);
    const [lastName, setLastName] = useState("Burbano");
    const [gender, setGender] = useState("Masc");
    const [age, setAge] = useState(props.age);

    return <h1>Bienvenido: {name} {lastName} {gender} {age} {props.age > 18 ? 'Mayor de edad': 'Menor de edad'}</h1>
}

export default NuevoComponente;