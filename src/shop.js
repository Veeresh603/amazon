import React from 'react';
import logo from './logo.svg';
import './App.css';
class ShoppingList extends React.Component {
    render() {
        function shop() {

            return (
                <div className="shopping-list">
                    <h1>Shopping List for {props.name}</h1>
                    <ul>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                    </ul>
                </div>
            );

        }
    }
}
