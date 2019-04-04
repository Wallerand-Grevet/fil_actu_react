import React from 'react';
import { reactionEmojis } from './actualites';
import classNames from 'classnames';
import uniqid from 'uniqid'; 

class Reactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reactionType: null };
  }

  selectReaction(reactionType) {
    this.setState({ reactionType });
  }

  renderReaction([reactionType, compteur]) {
    const isSelectedReaction = (this.state.reactionType === reactionType);

    if (isSelectedReaction) {
      compteur++;
    }

    return (
      <div
        key={uniqid()}
        className={classNames(
          'Reactions__reaction',
          { 'Reactions__reaction--selected': isSelectedReaction },
        )}
        onClick={(e) => this.selectReaction(reactionType)}
      >
        {reactionEmojis[reactionType]} {compteur}
      </div>
    );
  }

  render() {
    const { reactions } = this.props;

    return (
      <div className="Reactions">
        {Object.entries(reactions).map((reaction) => this.renderReaction(reaction))}
      </div>
    );
  }
}

export default Reactions;
