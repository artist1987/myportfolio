var CardHolder = React.createClass({
  render: function() {
   var createCard = function(card) {
      return <input type="text" name={card.name} placeholder={card.name} key={card.id}>{card.text}</input>;
    };
    return <form class="pop_form">{this.props.cards.map(createCard)}</form>;
  }
});

var List = React.createClass({

});;

var TrelloApp = React.createClass({
  getInitialState: function() {
    return {cards: []};
  },
  handleClick: function(e) {
   e.preventDefault();
   var nextItems = this.state.cards.concat([{id: Date.now(), name: "card" + (this.state.cards.length + 1)}]);
   this.setState({cards: nextItems});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <CardHolder cards={this.state.cards} />
        <a class="add" href="#" onClick={this.handleClick}><span>{'Add a card #' + (this.state.cards.length + 1)}</span></a>
      </div>
    );
  }
});

ReactDOM.render(<TrelloApp />, document.getElementById('new-list'));