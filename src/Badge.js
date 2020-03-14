import React from 'react'
import './Badge.css';
import logo from './html5.png'

class Badge extends React.Component{
    render(){
        return <div className = "Contenedor">

            <div className = "Cabeza">
                <header className = "Cabecera">
                    
                    
                    <div className="Textobase">
                        <p>¿Quieres Aprender a Diseñar <p className="interno">paginas web?</p> </p>
                    </div>
                    
                </header>
                
            </div>
           <img src = {logo} className = "logo" alt = "logos"/>
            <div className = "Cuerpo">
                <ul>
                    <li>Aprende HTML5</li>
                    <li>Aprende CSS3</li>
                    <li>Aprende JAVASCRIPT</li>
                    <li>Aprende React</li>
                </ul>
                
            </div>
            
            <footer className = "pie">
                <p>Contactanos: 319-417-5781 </p>
            </footer>
        </div>
        
    }
}

export default Badge;