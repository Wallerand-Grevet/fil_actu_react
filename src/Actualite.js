import React from 'react';
import HeaderMessage from './HeaderMessage';
import Message from './Message'

class Actualite extends React.Component {
    render () {
        const { auteur, datePublication, message } = this.props.actualite;
        return (
            <div className="Actualite">
                <HeaderMessage auteur={auteur} datePublication={datePublication}/>
                <Message message={message} />
            </div>
        )
    }
}

export default Actualite;