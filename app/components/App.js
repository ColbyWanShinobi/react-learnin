var React = require('react');
var Popular = require('./Popular');

class App extends React.Component {
  render() {
    /*return (<Badge
      name='Tyler McGinnis'
      username='tylermcginnis'
      img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>
    )*/

    /*return (
      <div>Hello World</div>
    )*/

    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
