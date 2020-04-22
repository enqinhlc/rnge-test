import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import CreateEntities from './Entities';
import Systems from '@systems/Systems';
import Controllers from '@components/Controllers';
import SystemOutput from '@components/SystemOutput';
import { EVENTS, PLAYER_START_X, PLAYER_START_Y } from './Constants';
import Inventory from '@components/Inventory';
import TopBar from '@components/TopBar';
import Entitiy from './classes/Entitiy';

interface Props {}
interface State {
  gameRunning: boolean;
}

export default class GameScene extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      gameRunning: true,
      gameEngine: null,
      score: 0,
      chat: [],
      items: [],
      playerCoords: {
        position: { x: PLAYER_START_X, y: PLAYER_START_Y },
        bounds: { x: 0, y: 0 },
      },
      showInventory: false,
      showChat: false,
      entities: CreateEntities,
    };
  }
  entities = null;

  onEvent = (evt) => {
    const { type, value } = evt;
    if ([EVENTS.MOB_KILL_SCORE].includes(type)) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }

    if ([EVENTS.USED_SKILL_FOR_CHAT].includes(type)) {
      this.setState((prevState) => {
        const chat = prevState.chat;
        chat.push({ type, text: value });

        return { chat };
      });
    }

    if ([EVENTS.DROP_LOOT].includes(type)) {
      this.setState((prevState) => {
        const chat = prevState.chat;
        chat.push({ type, text: `${value.title} looted!` });

        return { chat };
      });
    }

    // if ([EVENTS.PLAYER_COORDS].includes(type)) {
    //   this.setState((prevState) => {
    //     const playerCoords = prevState.playerCoords;
    //     playerCoords.position.x += value.x;
    //     playerCoords.position.y += value.y;
    //     playerCoords.bounds.x += -value.x;
    //     playerCoords.bounds.y += -value.y;

    //     return { playerCoords };
    //   });
    // }

    if ([EVENTS.DROP_LOOT].includes(type)) {
      this.setState((prevState) => {
        const items = prevState.items;
        items.push(value);

        return { items };
      });
    }
  };

  restartGame = () => {
    console.log(Entitiy.getEntities());

    // this.state.gameEngine.swap(CreateEntities);
    // this.setState({ gameRunning: true });
  };

  setRef = (ref) => {
    if (this.state.gameEngine === null) {
      this.setState({ gameEngine: ref });
    }
  };

  toggleInventory = () => {
    this.setState((prevState) => ({ showInventory: !prevState.showInventory }));
  };

  toggleChat = () => {
    this.setState((prevState) => ({ showChat: !prevState.showChat }));
  };

  render() {
    const {
      gameRunning,
      gameEngine,
      entities,
      score,
      chat,
      items,
      showInventory,
      showChat,
      playerCoords,
    } = this.state;

    return (
      <>
        <GameEngine
          ref={this.setRef}
          style={[StyleSheet.absoluteFill, { backgroundColor: '#cccccc' }]}
          entities={entities}
          onEvent={this.onEvent}
          running={gameRunning}
          systems={Systems}>
          <StatusBar hidden={true} />
        </GameEngine>

        <TopBar
          playerCoords={playerCoords}
          toggleInventory={this.toggleInventory}
          toggleChat={this.toggleChat}
          restartGame={this.restartGame}
          score={score}
        />

        {showInventory && <Inventory items={items} />}
        {showChat && <SystemOutput chat={chat} />}
        <Controllers gameEngine={gameEngine} />
        {/* {!gameRunning && (
          <View
            style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableWithoutFeedback onPress={this.restartGame}>
              <Text style={{ fontSize: 50, color: '#000' }}>Game Over</Text>
            </TouchableWithoutFeedback>
          </View>
        )} */}
      </>
    );
  }
}
