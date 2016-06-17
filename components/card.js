'use strict';

import React from 'react';

class Card extends Recat.Component{
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

    return (
      <div style={styles.card}>
        <h1 style="{styles.title}">{htis.props.title}</h1>
      </div>
    );
  }
}

module.exports = Card;