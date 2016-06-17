'use strict';

import React from 'react';

class Card extends React.Component{
  render() {
    let styles = {
      card: {
        border: '1px solid #FF4422',
        borderRadius: 4,
        backgroundColor: '#FF9988'
      },
      title: {
        color: 'white',
        margin: 0,
        padding: 10,
        fontFamily: 'Helvetica Neue'
      }
    };
    
    if(this.props.background) {
      styles.card.background = this.props.background;
    }

    return (
      <div style={styles.card}>
        <h1 style={styles.title}>{this.props.title}</h1>
      </div>
    );
  }
}

module.exports = Card;