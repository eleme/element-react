import React from 'react';
import { Component, Markdown } from '../../../libs';

import './style.scss';

import template from './README.md';

export default class Playground extends Component {
  render() {
    return <Markdown context={this} component="Badge">{template}</Markdown>
  }
}
