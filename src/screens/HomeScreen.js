
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from '../reducer/todoRedux'
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import Footer from '../components/Footer'

const styles = {
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  }
};

const mapStateToProps = (state) => ({
  items: state.items,
});

class HomeScreen extends Component {
  addItem = (item) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.addItem(item));
  }

  removeItem = (index) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeItem(index));
  }

  toggleItemCompleted = (index) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.toggleItemCompleted(index));
  }

  removeCompleted = () => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeCompleted());
  }

  render() {
    const { items } = this.props;

    return (
      <View style={styles.container}>
        <Title> Todo List </Title>
        <Input
          placeholder={'Enter an item!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider}/>
        <List
          items={items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(HomeScreen);