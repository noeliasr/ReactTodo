import React, {Fragment} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Touchable, ScrollView, FlatList, Image } from 'react-native';
import deleteImage from '../../../assets/delete.png';

const styles = StyleSheet.create({
    //este es el estilo del contenedor del texto: View
    container: {
        width: "100%"
    },
    listItem: {
        margin: 5,
        padding: 5,
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    //el guión
    bullet:{
        fontWeight: "bold"
    },  
    //este es el estilo del texto
    text: {
        flex: 1,
        marginLeft: 5,
        padding: 5,
        fontWeight: "bold"
    },
    textDone: {
        color: "#aaa",
        textDecorationLine: 'line-through',
        fontWeight: "normal"
    },
    delete:{
        widt: 44, //recomendación mínimo 40-44
        height: 44,
        alignItems: "center",
        justifyContent: "center"
    },
    // deleteText:{
    //     color: "#ff0000",
    //     fontSize: 18,
    //     marginRight: 18
    // },
    emptyList: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    separator: {
        height: 1,
        width: "90%",
        backgroundColor: "#CED0CE",
        marginLeft: "10%"
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: "#ff0000"
    }
});

//todo.done ? null : <Text key={todo.text}>{todo.text}</Text>
const TodoList = ({ todos, onUpdate, onDelete }) => {
    renderSeparator = () => {
        return(
            <View 
                style={styles.separator}
            />
        );
    };
    
    renderEmptyComponent = () => (
        <View style={styles.emptyList}>
            <Text>Lista Vacía</Text>
        </View>
    );
    
    renderItem = todo => (
        <TouchableOpacity 
        style={styles.listItem} 
        key={todo.id} 
        onPress={() => onUpdate({...todo, done: !todo.done})}>
            <Text style={styles.bullet}>-</Text>
            <Text style={[styles.text, todo.done && styles.textDone]}>
                {todo.text}
            </Text>
    
            <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
                <Image style={styles.icon}
                    source={deleteImage}    
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
    
    return(
        <FlatList
            style={styles.container}
            //contentContainerStyle={styles.container}
            //prueba array vacío: data = {[]}
            data={todos}
            keyExtractor={todo => todo.id}
            renderItem={({item}) => renderItem(item)}
            
            //elemento de separación
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={renderEmptyComponent}
        />
    );

    // <ScrollView contentContainerStyle={styles.container}>
    //     {todos.map(
    //         todo =>
    //         (
    //         <TouchableOpacity style={styles.listItem} key={todo.text} onPress={() => onUpdate({...todo, done: !todo.done})}>
    //             <Text style={styles.bullet}>-</Text>
    //             <Text style={[styles.text, todo.done && styles.textDone]}>
    //                 {todo.text}
    //             </Text>

    //             <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
    //                 <Text style={styles.deleteText}>X</Text>
    //             </TouchableOpacity>

    //         </TouchableOpacity>
    //         )
    //     )}
    // </ScrollView>
    
};

export default TodoList;
