import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import Config from '../../Config';

import { Container, ConfigBox, Button } from './styles';

class Nav extends Component {
  state = {
    showBox: '',
  };

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (!this.node.contains(e.target)) {
      this.setState({ showBox: '' });
    }
  };

  toggleBox = boxName => {
    this.setState({ showBox: boxName });
  };

  handleNavClick = selected => {
    this.setState({ selected });
    const { setDateType } = this.props;
    setDateType(selected);
  };

  render() {
    const { showBox } = this.state;
    const { selected } = this.props;

    return (
      <Container>
        <div>
          <Button onClick={() => this.handleNavClick('day')} className={selected === 'day' && 'selected'}>
            Day
          </Button>
        </div>
        <div>
          <Button onClick={() => this.handleNavClick('month')} className={selected === 'month' && 'selected'}>
            Month
          </Button>
        </div>
        <div>
          <Button onClick={() => this.toggleBox('config')} className="config">
            &#9881;
          </Button>
        </div>
        <ConfigBox id="config-box" ref={node => (this.node = node)} className={showBox && 'active'}>
          {showBox === 'config' && <Config />}
        </ConfigBox>
      </Container>
    );
  }
}

export default Nav;
