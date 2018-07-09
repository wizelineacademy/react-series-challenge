import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'app navbar': {
    'backgroundColor': '#f9f9f9',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#acacac' }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'position': 'relative',
    'zIndex': '200',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left'
  },
  'app navbar navbar-container': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'flex'
  },
  'app navbar navbar-container ul li': {
    'float': 'left',
    'position': 'relative',
    'display': 'block',
    'listStyle': 'none'
  },
  'app navbar navbar-container ul li a': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'textDecoration': 'none'
  },
  'app navbar navbar-container ul li aactive': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }]
  },
  'app container': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'input': {
    'width': [{ 'unit': '%H', 'value': 0.55 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }]
  },
  'text-center': {
    'textAlign': 'center'
  },
  'text-right': {
    'textAlign': 'right'
  },
  'container-gif': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 220 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }]
  },
  'container-gif iicon': {
    'position': 'absolute',
    'marginLeft': [{ 'unit': 'px', 'value': 197 }],
    'marginTop': [{ 'unit': 'px', 'value': 8 }],
    'color': '#e7f52b'
  }
});
