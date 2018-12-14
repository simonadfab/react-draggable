var Draggable = window.ReactDraggable;

var App = React.createClass({
  getInitialState() {
    return {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      },
      text: 'text'
    };
  },

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  },

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  },

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  },

  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  },

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  },

  onControlledDrag(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  },

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
  },

  tmp() {
    const { text } = this.state;
    this.setState({text: text + 'text'});
  },

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition, text} = this.state;
    return (
      <div>
        <h1 onClick={this.tmp}>React Draggable</h1>
        <p>Active DragHandlers: {this.state.activeDrags}</p>
        <p>
          <a href="https://github.com/mzabriskie/react-draggable/blob/master/example/index.html">Demo Source</a>
        </p>
        <div className="box" style={{height: '100px', width: '100px', position: 'relative', overflow: 'auto', padding: '0'}}>
          <div>
            <Draggable repositionOnClick bounds="parent" {...dragHandlers}>
              <div className="box">
              {text}
              </div>
            </Draggable>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
