import React from 'react';

class HeaderMessage extends React.Component {
    render () {

        const { auteur, datePublication } = this.props;
        return(
            <div className= "HeaderMessage">
                <div className="HeaderMessage__auteur">
                    <img src={auteur.avatar} alt= "Avatar" />
                    {auteur.nom}
                </div>
                <div classname= "HeaderMessage__date-publication" >
                    {new Date(datePublication).toLocaleString()}
                </div>
            </div>
        );
    }
}

export default HeaderMessage;