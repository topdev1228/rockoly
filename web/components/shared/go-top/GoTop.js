import { toastMessage } from '../../../utils/Toast';
class GoTop extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
      thePosition: false,
    };
  }
  componentDidMount() {
    this._isMounted = true;
    // Hide the scroll issue
    /*
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
    */
  }
  onScrollStep = () => {
    /*
    this._isMounted = true;
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    */
  };
  scrollToTop = () => {
    /*
    this._isMounted = true;
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
    */
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <div className="go-top" onClick={this.scrollToTop}>
          <i className="fas fa-arrow-up"></i>
          <i className="fas fa-arrow-up"></i>
        </div>
      );
    }
  };
  render() {
    try {
      return <React.Fragment>{this.renderGoTopIcon()}</React.Fragment>;
    } catch (error) {
      toastMessage('renderError', error.message);
    }
  }
}
export default GoTop;
