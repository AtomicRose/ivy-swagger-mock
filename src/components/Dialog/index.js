import React from 'react';

class Dialog extends React.PureComponent {
  render() {
    console.log(this.props);
    let dialogs = this.props.items || [];
    return (
      <div>
        <div className="mask">mask</div>
        {
          dialogs.map((item, i) => {
            return (<div key={i}>{item.message}</div>);
          })
        }
      </div>
    );
  }
}
export default Dialog;