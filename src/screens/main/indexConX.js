import React, {Component} from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet, Button } from "react-native";
import TodoList from "../../components/TodoList";
import {getTodos, addTodo, updateTodo, deleteTodo} from "../../data/todos"; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        //justifyContent: "center"
        margin: 30
        // marginTop: 30,
        // marginBottom: 20
    },
    addRow: {
        flexDirection: "row",
        //justifyContent: "center",
        width: "80%",
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10
    },
    text: {
        // width: "80%",
        // borderBottomWidth: 1,
        // padding: 5
        flex: 1,
        borderBottomWidth: 1,
        padding: 5
    }
});

class MainScreen extends Component {
    //constructor de state
    constructor(props){
        super(props)
        
        this.state = {
            todos: [],
            newTodo: null
        };
    }

    //método que asigna el estado
    componentDidMount = () => {
        //esto asigna el estado
        this.setState({todos:getTodos()});
    }

    //método para el botón (activa el evento)
    handleAdd = () => {
        const {todos, newTodo} = this.state;
        const newList = addTodo(todos, {text: newTodo});
        this.setState({todos: newList, newTodo: null});
    }

    //método para actualizar el done
    handleUpdate = todo => {
        const {todos} = this.state;
        const newList = updateTodo(todos, todo);
        this.setState({todos: newList});
    }

    //método para borrar, aplicado a la x
    handleDelete = todo => {
        const {todos} = this.state;
        const newList = deleteTodo(todos, todo);
        this.setState({todos: newList});
        
    }

    render() {
        const {todos, newTodo} = this.state;
        return (
            //SafeAreaView para "evitar" el notch (View)
            <SafeAreaView style={styles.container}>
                <Text selectable style={styles.title}>
                    ToDo List App
                </Text>

                {/*le damos estilo de row para poder poner el botón al lado*/}
                <View style={styles.addRow}>
                    <TextInput 
                        placeholder="Introduce un nuevo ToDo"
                        value={newTodo}
                        onChangeText={todo => this.setState({newTodo : todo})}
                        style={styles.text}
                        autoCapitalize="words"
                        clearButtonMode="always" //aplica a ios
                        returnKeyType="done" //aplica a ios (el check)
                    />
                    <Button onPress={this.handleAdd} title="Añadir" />
                </View>

                <TodoList todos={todos} onUpdate={this.handleUpdate} onDelete={this.handleDelete} />
            
            </SafeAreaView>
        );
    }
}

export default MainScreen;