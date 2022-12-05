import React, { useId } from 'react';
import uniqueId from 'lodash/uniqueId'


class MicroFrontend extends React.Component {
  name = undefined
  scriptId = `micro-frontend-script-${uniqueId()}`
  containerId = `${uniqueId()}-container`

  state = {
    isLoading: false
  }

  componentDidMount() {
    const { host, document } = this.props;

    fetch(`${host}/manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        this.name = manifest.name
        const script = document.createElement('script');
        script.id = this.scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest['main.js']}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { window } = this.props;

    if(window[this.name]) window[this.name].unmount()
  }

  renderMicroFrontend = () => {
    const {window} = this.props;

    window[this.name].render(this.containerId)
  };

  render() {
    return <div id={this.containerId}></div>;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;